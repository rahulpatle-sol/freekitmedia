
"use client";

import { Fragment, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { comparison } from "@/content/page-sections";
import { useReveal } from "@/lib/use-reveal";

export function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="comparison"
      ref={ref}
      className="relative overflow-hidden bg-[#F4F2EC] py-24 text-[#171813] sm:py-32 lg:py-40"
    >
      <Container>
        {/* Editorial heading */}
        <div
          data-reveal
          className="grid gap-8 border-t border-[#171813]/20 pt-5 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#737D43]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#55594A] sm:text-xs">
                A different way to grow
              </p>
            </div>

            <h2 className="font-display mt-7 max-w-5xl text-[clamp(3.2rem,8vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.075em]">
              {comparison.headline}
              <span className="text-[#737D43]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#65665D] lg:col-span-4 lg:justify-self-end lg:pb-2 sm:text-base">
            {comparison.sub}
          </p>
        </div>

        {/* Comparison board */}
        <div data-reveal className="mt-14 sm:mt-20">
          {/* Column headings */}
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2 sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-3">
            <div className="hidden items-end pb-5 sm:flex">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77786F]">
                What matters
              </span>
            </div>

            <div className="flex min-h-36 flex-col justify-between rounded-xl bg-[#292D22] p-4 text-[#F4F2EC] sm:min-h-48 sm:rounded-2xl sm:p-7">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full border border-white/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[10px]">
                  Our approach
                </span>
                <Icon
                  name="sparkles"
                  className="size-4 text-[#D1D7A7] sm:size-5"
                />
              </div>

              <div>
                <h3 className="font-display text-2xl font-extrabold tracking-[-0.06em] sm:text-4xl">
                  FreeKit<span className="text-[#D1D7A7]">.</span>
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed text-white/55 sm:text-sm">
                  Built around your growth.
                </p>
              </div>
            </div>

            <div className="flex min-h-36 flex-col justify-between rounded-xl border border-[#171813]/10 bg-white/55 p-4 sm:min-h-48 sm:rounded-2xl sm:p-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#77786F] sm:text-[10px]">
                The usual way
              </span>

              <div>
                <h3 className="font-display text-lg font-bold tracking-[-0.045em] text-[#77786F] sm:text-3xl">
                  Typical agency
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#77786F] sm:text-sm">
                  The standard playbook.
                </p>
              </div>
            </div>
          </div>

          {/* Feature rows */}
          <div className="mt-3 overflow-hidden rounded-xl border border-[#171813]/10 bg-white/35 sm:mt-4 sm:rounded-2xl">
            {comparison.rows.map((row, index) => (
              <Fragment key={row.label}>
                <div
                  className={[
                    "group grid grid-cols-2 transition-colors duration-300 hover:bg-white/80 sm:grid-cols-[1.1fr_1fr_1fr]",
                    index !== 0 ? "border-t border-[#171813]/10" : "",
                  ].join(" ")}
                >
                  {/* Label */}
                  <div className="col-span-2 flex items-center justify-between gap-3 border-b border-[#171813]/[0.07] px-4 py-4 sm:col-span-1 sm:border-b-0 sm:px-6 sm:py-6 lg:px-8">
                    <span className="font-display text-sm font-bold tracking-[-0.025em] sm:text-base lg:text-lg">
                      {row.label}
                    </span>
                    <span className="font-mono text-[10px] text-[#77786F]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* FreeKit */}
                  <div className="relative flex items-start gap-2.5 bg-[#737D43]/[0.09] px-4 py-4 sm:px-5 sm:py-6 lg:px-7">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#737D43] text-white"
                    >
                      <Icon name="check" className="size-3" />
                    </span>
                    <div>
                      <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#737D43] sm:hidden">
                        FreeKit
                      </span>
                      <p className="text-xs leading-relaxed text-[#292D22] sm:text-sm">
                        {row.us}
                      </p>
                    </div>
                  </div>

                  {/* Typical agency */}
                  <div className="flex items-start gap-2.5 px-4 py-4 sm:px-5 sm:py-6 lg:px-7">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#171813]/15 text-[#8C8D84]"
                    >
                      <Icon name="minus" className="size-3" />
                    </span>
                    <div>
                      <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8C8D84] sm:hidden">
                        Typical
                      </span>
                      <p className="text-xs leading-relaxed text-[#686960] sm:text-sm">
                        {row.them}
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>

          {/* Bottom caption */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] uppercase tracking-[0.13em] text-[#77786F] sm:text-xs">
              Different priorities. Different outcomes.
            </p>
            <p className="font-mono text-[10px] text-[#77786F] sm:text-xs">
              FREEKIT / COMPARISON 001
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div
          data-reveal
          className="mt-16 flex flex-col gap-6 border-t border-[#171813]/15 pt-7 sm:mt-24 sm:flex-row sm:items-end sm:justify-between sm:pt-9"
        >
          <p className="font-display max-w-2xl text-2xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Less guesswork.
            <br />
            <span className="text-[#737D43]">More meaningful growth.</span>
          </p>

          <a
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-[#292D22] px-6 text-sm font-semibold text-[#F4F2EC] transition-colors duration-300 hover:bg-[#737D43] sm:self-auto"
          >
            Discuss your goals
            <span className="grid size-7 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
              <Icon name="arrowRight" className="size-4" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
