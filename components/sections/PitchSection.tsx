"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { industries } from "@/content/industries";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function PitchSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="bg-mist py-24 sm:py-32">
      <Container>
        <div data-reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Aapke business ke liye
          </p>
          <h2 className="font-display mt-4 text-h1 leading-[1.05] font-extrabold tracking-[-0.02em]">
            Har category ka problem alag — solution bhi wahi hona chahiye
          </h2>
        </div>
        <div className="mt-14 border-t border-ink/10">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              data-reveal
              className="group grid gap-x-10 gap-y-2 border-b border-ink/10 py-6 transition-colors hover:bg-paper sm:grid-cols-[2.5rem_1fr_auto] sm:py-7"
            >
              <span className="font-display text-sm font-bold text-grey-400 tabular-nums">
                {String(industries.indexOf(industry) + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-extrabold tracking-tight">
                  {industry.name}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-grey-600">
                  {industry.problemLine}
                </p>
              </div>
              <Icon
                name="arrowRight"
                className="hidden size-5 self-center text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-ink sm:block"
              />
            </Link>
          ))}
        </div>
        <div data-reveal className="mt-10 flex flex-wrap items-center gap-6">
          <p className="max-w-md text-sm leading-relaxed text-grey-600">
            Apni category list mein rakho — ya ho, ya nahi. Pehla step wahi
            hai: free audit mein position samjho.
          </p>
          <Link
            href="/#contact"
            className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-ink"
          >
            Free Digital Audit Lo
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
