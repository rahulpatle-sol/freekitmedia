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
    <section ref={ref} className="bg-paper py-24 sm:py-32">
      <Container>
        <div data-reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Comparison
          </p>
          <h2 className="font-display mt-4 text-h1 leading-[1.05] font-extrabold tracking-[-0.02em]">
            {comparison.headline}
          </h2>
          <p className="mt-4 text-lead leading-relaxed text-grey-600">
            {comparison.sub}
          </p>
        </div>

        <div
          data-reveal-stagger
          className="mt-14 border border-ink/10 text-sm"
        >
          <div className="hidden grid-cols-[0.7fr_1.15fr_1.15fr] sm:grid">
            <div className="bg-mist px-6 py-4" />
            <div className="bg-brand px-6 py-4">
              <span className="font-display text-lg font-extrabold tracking-tight text-ink">
                FreeKit
              </span>
            </div>
            <div className="px-6 py-4 text-base font-medium text-grey-600">
              Typical agency
            </div>
          </div>
          {comparison.rows.map((row) => (
            <Fragment key={row.label}>
              <div
                className={cn(
                  "grid border-t border-ink/10 sm:grid-cols-[0.7fr_1.15fr_1.15fr]",
                )}
              >
                <div className="bg-mist px-6 pt-4 font-semibold text-ink sm:py-5">
                  {row.label}
                </div>
                <div className="bg-brand/10 px-6 py-2.5 font-medium text-ink sm:py-5">
                  <span
                    aria-hidden="true"
                    className="mr-2 text-[0.65rem] font-bold text-brand-deep uppercase sm:hidden"
                  >
                    FreeKit
                  </span>
                  {row.us}
                </div>
                <div className="border-b border-grey-100 px-6 pb-3.5 pt-1 text-grey-600 sm:border-0 sm:py-5">
                  <span
                    aria-hidden="true"
                    className="mr-2 text-[0.65rem] font-bold text-grey-400 uppercase sm:hidden"
                  >
                    Typical
                  </span>
                  {row.them}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
