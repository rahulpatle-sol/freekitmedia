import { Icon } from "@/components/ui/Icon";

export type PartnerReel = {
  title: string;
  url: string;
};

function embedUrl(url: string) {
  return `${url.replace(/\/?$/, "/")}embed/`;
}

export function PartnerReelCard({
  reel,
  className,
}: {
  reel: PartnerReel;
  className?: string;
}) {
  const src = embedUrl(reel.url);

  return (
    <div
      className={`relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-ink ${className ?? ""}`}
    >
      <a
        href={reel.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${reel.title} on Instagram`}
        className="absolute top-1/2 left-1/2 z-10 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-ink transition-transform duration-300 hover:scale-110 motion-reduce:transition-none"
      >
        <Icon name="play" className="size-6" />
      </a>
      <iframe
        src={src}
        title={`${reel.title} on Instagram`}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 z-0 size-full border-0"
      />
    </div>
  );
}

export function PartnerReels({
  partnerName,
  reels,
}: {
  partnerName: string;
  reels: PartnerReel[];
}) {
  return (
    <section
      aria-labelledby="partner-reels-heading"
      className="mt-16 border-t border-ink/15 pt-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-brand-deep">
            Partner videos
          </p>
          <h2
            id="partner-reels-heading"
            className="font-display mt-2 text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl"
          >
            {partnerName}, in motion
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-grey-600">
          Reels and videos from this partner&apos;s Instagram.
        </p>
      </div>

      {reels.length > 0 ? (
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {reels.map((reel) => (
            <article
              key={reel.url}
              className="overflow-hidden border border-ink/15 bg-paper"
            >
              <PartnerReelCard reel={reel} />
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="font-display text-base font-semibold leading-snug text-ink">
                  {reel.title}
                </h3>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
                >
                  Watch on Instagram
                  <span className="sr-only">: {reel.title}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-7 border-l-4 border-brand bg-mist p-6 sm:p-8">
          <p className="font-display text-xl font-bold tracking-tight text-ink">
            More videos are being added.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-grey-600">
            Partner reels will appear here as they are added to the gallery.
          </p>
        </div>
      )}
    </section>
  );
}