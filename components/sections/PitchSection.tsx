"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { pitchItems } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function PitchSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="bg-mist py-24 sm:py-32">
      <Container>
        <div data-reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-grey-400 uppercase">
            Aapke business ke liye
          </p>
          <h2 className="font-display mt-4 text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
            Har category ka problem alag — solution bhi wahi hona chahiye
          </h2>
        </div>
        <div data-reveal-stagger className="mt-14 grid gap-4 md:grid-cols-2">
          {pitchItems.map((pitch) => (
            <article
              key={pitch.slug}
              className="flex flex-col rounded-3xl border border-grey-200 bg-white p-8"
            >
              <h3 className="font-display text-h3 font-bold tracking-tight">
                {pitch.who}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-grey-600">
                <span className="font-semibold text-ink">Problem:</span>{" "}
                {pitch.problem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-grey-600">
                <span className="font-semibold text-brand-deep">Hum kya karte hain:</span>{" "}
                {pitch.weDo}
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-brand/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand hover:text-ink"
              >
                {pitch.cta}
                <Icon name="arrowRight" className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
