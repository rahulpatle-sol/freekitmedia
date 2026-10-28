"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { partners } from "@/content/partners";
import type { Partner } from "@/content/partners";

export function PartnerRelated({ partner }: { partner: Partner }) {
  const relatedSlugs = partner.relatedSlugs ?? [];
  const sameIndustry = partners.filter(
    (item) =>
      item.slug !== partner.slug && item.industry === partner.industry,
  );
  const related = relatedSlugs
    .map((slug) => partners.find((item) => item.slug === slug))
    .filter((item): item is Partner => Boolean(item))
    .concat(sameIndustry)
    .filter(
      (item, index, arr) => arr.findIndex((x) => x.slug === item.slug) === index,
    )
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="bg-paper py-16 sm:py-24" aria-labelledby="related-partners-heading">
      <Container>
        <header className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Keep exploring
          </p>
          <h2
            id="related-partners-heading"
            className="font-display mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink"
          >
            More from the same desk.
          </h2>
        </header>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/partners/${item.slug}`}
              className="group flex min-h-32 flex-col justify-between gap-6 rounded-2xl border border-ink/10 bg-white p-6 transition-colors duration-300 hover:border-brand/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
            >
              <div>
                <p className="text-[10px] font-semibold tracking-[0.16em] text-grey-400 uppercase">
                  {item.industry}
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-grey-600">
                  {item.oneLine}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                View case study
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}