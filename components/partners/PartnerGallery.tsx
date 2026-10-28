"use client";

import Image from "next/image";
import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PartnerReelCard, type PartnerReel } from "@/components/partners/PartnerReels";
import { useReveal } from "@/lib/use-reveal";
import type { Partner, PartnerGalleryItem } from "@/content/partners";

export function PartnerGallery({ partner }: { partner: Partner }) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const items: PartnerGalleryItem[] = [
    ...(partner.reels ?? []).map((reel) => ({
      id: reel.url,
      mediaType: "reel" as const,
      url: reel.url,
      title: reel.title,
      instagramUrl: reel.url,
    })),
    ...(partner.gallery ?? []).filter((item) => {
      if (item.mediaType !== "reel") return true;
      const related = (partner.reels ?? []).some(
        (reel) => reel.url === (item.url ?? item.instagramUrl),
      );
      return !related;
    }),
  ];

  if (items.length === 0) {
    return null;
  }

  const featured = items[0];
  const singleReel =
    featured.mediaType === "reel" &&
    items.length === 1 &&
    Boolean(featured.url);

  return (
    <section ref={ref} data-reveal className="bg-mist py-16 sm:py-24">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Campaign gallery
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            Real work, in motion.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-grey-600 sm:text-lg">
            Campaign films and content from this partnership.
          </p>
        </header>

        {singleReel && featured.url ? (
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <PartnerReelCard reel={{ title: featured.title, url: featured.url }} />
            <div>
              {featured.contentCategory ? (
                <span className="inline-flex rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                  {featured.contentCategory}
                </span>
              ) : null}
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {featured.title}
              </h3>
              {featured.caption ? (
                <p className="mt-4 text-base leading-7 text-grey-600 sm:text-lg">
                  {featured.caption}
                </p>
              ) : null}
              {featured.instagramUrl ? (
                <a
                  href={featured.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
                >
                  Watch on Instagram
                  <Icon name="instagram" className="size-4" />
                </a>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const reel: PartnerReel | null =
                item.mediaType === "reel" && item.url
                  ? { title: item.title, url: item.url }
                  : null;

              if (reel) {
                return (
                  <article
                    key={item.id}
                    className="overflow-hidden border border-ink/15 bg-white"
                  >
                    <PartnerReelCard reel={reel} />
                    <div className="flex items-center justify-between gap-3 p-4">
                      <h3 className="font-display text-base font-semibold leading-snug text-ink">
                        {item.title}
                      </h3>
                      {item.instagramUrl ? (
                        <a
                          href={item.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
                        >
                          Watch on Instagram
                          <span className="sr-only">: {item.title}</span>
                        </a>
                      ) : null}
                    </div>
                  </article>
                );
              }

              if (item.mediaType === "image") {
                return (
                  <figure
                    key={item.id}
                    className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.src ?? item.url ?? ""}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    {item.caption ? (
                      <figcaption className="p-4 text-sm text-grey-600">
                        {item.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }

              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white"
                >
                  <video
                    src={item.src ?? item.url ?? ""}
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full bg-ink"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold leading-snug text-ink">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}