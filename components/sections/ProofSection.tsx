"use client";

import Link from "next/link";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { proof } from "@/content/page-sections";
import { partners } from "@/content/partners";
import { useReveal } from "@/lib/use-reveal";
import { site } from "@/content/site";

export function ProofSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const caseStudySlug =
    "/case-studies/jewellery-6-lakh-one-day" as const;

  return (
    <section id="proof" ref={ref} className="bg-mist py-24 sm:py-32">
      <Container>
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Proof
          </p>
          <h2 className="font-display mt-4 text-h1 leading-[1.05] font-extrabold tracking-[-0.02em]">
            {proof.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-lead leading-relaxed text-grey-600">
            {proof.sub}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div
            data-reveal
            className="bg-ink p-9 text-paper sm:p-12 lg:col-span-7"
          >
            <span className="inline-flex items-center border border-paper/15 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand uppercase">
              {proof.result.tag}
            </span>
            <p className="font-display mt-6 text-[clamp(2.75rem,5.5vw,4.75rem)] leading-none font-extrabold tracking-[-0.02em] text-brand">
              {proof.result.value}
            </p>
            <p className="mt-4 max-w-md text-lead leading-relaxed text-paper/80">
              {proof.result.line}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-paper/10 pt-6">
              <p className="text-xs leading-relaxed text-paper/50">
                Real result. Numbers monthly report mein hote hain — jhoot nahi
                karte.
              </p>
              <Link
                href={caseStudySlug}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-soft"
              >
                Case study padho
                <Icon name="arrowRight" className="size-4" />
              </Link>
            </div>
          </div>

          <figure
            data-reveal
            className="flex flex-col justify-between lg:col-span-5"
          >
            <blockquote>
              <span
                aria-hidden="true"
                className="font-display block text-6xl leading-none font-extrabold text-brand"
              >
                &ldquo;
              </span>
              <p className="font-display -mt-4 text-2xl leading-snug font-bold tracking-tight text-ink sm:text-[1.7rem]">
                {proof.testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="mt-6 border-t border-ink/10 pt-5 text-sm text-grey-600">
              <span className="font-semibold text-ink">
                {proof.testimonial.by}
              </span>
              {" — "}
              {proof.testimonial.role}
            </figcaption>
          </figure>
        </div>

        <div
          data-reveal
          className="mt-10 flex flex-col gap-4 border border-ink/10 bg-mist p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <p className="max-w-xl text-sm leading-relaxed text-grey-600">
            Client interviews sirf real feedback ke saath publish hote hain —
            generic footage se nahi. Tab tak hamara live kaam Instagram par
            hai.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/50 sm:self-auto"
          >
            <Icon name="instagram" className="size-4" />
            Reels Instagram par dekho
          </a>
        </div>

        <div id="partners" className="mt-16 sm:mt-20">
          <div
            data-reveal
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <h3 className="font-display text-h2 leading-tight font-extrabold tracking-tight">
              Partner brands
            </h3>
            <p className="text-sm leading-relaxed text-grey-600">
              Har partner ki apni story page par hai.
            </p>
          </div>
          <ul className="mt-8">
            {partners.map((partner) => (
              <li key={partner.slug} data-reveal>
                <Link
                  href={`/partners/${partner.slug}`}
                  className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-ink/10 py-6 transition-colors hover:bg-paper"
                >
                  <span className="font-display flex items-baseline gap-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                    {partner.name}
                    <span className="text-[0.7em] font-bold text-brand">
                      ↗
                    </span>
                  </span>
                  <span className="text-sm text-grey-600">
                    {partner.industry} · {partner.city}
                  </span>
                  <span className="hidden max-w-md basis-full text-sm leading-relaxed text-grey-600 sm:block lg:basis-auto">
                    {partner.oneLine}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p
            data-reveal
            className="mt-6 text-xs leading-relaxed text-grey-600"
          >
            Industries served: {proof.industriesNote.replace("Industries: ", "")}
          </p>
        </div>
      </Container>
    </section>
  );
}
