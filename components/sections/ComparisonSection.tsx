"use client";

import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { comparison } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

export function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="py-24 sm:py-32">
      <Container>
        <div data-reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-grey-400 uppercase">
            Comparison
          </p>
          <h2 className="font-display mt-4 text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
            {comparison.headline}
          </h2>
          <p className="mt-4 text-lead leading-relaxed text-grey-600">
            {comparison.sub}
          </p>
        </div>

        <div
          data-reveal-stagger
          className="mt-14 overflow-hidden rounded-3xl border border-grey-200 bg-white text-sm"
        >
          <div className="hidden grid-cols-[0.7fr_1.15fr_1.15fr] sm:grid">
            <div className="bg-mist px-6 py-4" />
            <div className="bg-ink px-6 py-4 text-center">
              <span className="font-display text-lg font-bold tracking-tight text-paper">
                FreeKit
              </span>
            </div>
            <div className="bg-mist px-6 py-4 text-center text-lg font-medium text-grey-600">
              Typical agency
            </div>
          </div>
          {comparison.rows.map((row) => (
            <Fragment key={row.label}>
              <div
                className={cn(
                  "grid border-t border-grey-200 sm:grid-cols-[0.7fr_1.15fr_1.15fr]",
                )}
              >
                <div className="bg-mist px-6 py-3 font-medium text-ink sm:py-5">
                  {row.label}
                </div>
                <div className="bg-brand/10 px-6 py-3 font-semibold text-ink sm:py-5">
                  {row.us}
                </div>
                <div className="px-6 py-3 text-grey-500 sm:py-5">{row.them}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
