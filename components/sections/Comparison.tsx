"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonFootnote, comparisonRows } from "@/data/comparison";

function UsTag() {
  return (
    <span className="rounded bg-brand px-1.5 py-0.5 text-[0.65rem] font-bold text-ink uppercase tracking-wide">
      Hum
    </span>
  );
}

function ThemTag() {
  return (
    <span className="rounded bg-ink/[0.07] px-1.5 py-0.5 text-[0.65rem] font-bold text-ink/60 uppercase tracking-wide">
      Others
    </span>
  );
}

export function Comparison() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="compare"
      ref={ref}
      className="border-t border-ink/[0.06] py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Comparison"
          title={
            <>
              Hum vs <Mark>baaki agencies</Mark>
            </>
          }
          description="Fark shabdon mein nahi, system mein hai. Dekho khud."
        />
        <div data-reveal className="mt-14">
          <div className="hidden overflow-hidden rounded-3xl border border-ink/[0.08] md:block">
            <table className="w-full border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr>
                  <th scope="col" className="w-[24%] bg-white p-5" aria-label="Parameter" />
                  <th scope="col" className="bg-brand p-5 font-display text-base font-bold tracking-tight text-ink">
                    FreeKit Media
                  </th>
                  <th scope="col" className="bg-ink/[0.045] p-5 font-display text-base font-bold tracking-tight text-ink/55">
                    Typical agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-t border-ink/[0.06] bg-white p-5 align-top font-medium text-ink/80"
                    >
                      {row.label}
                    </th>
                    <td className="border-t border-ink/[0.06] bg-brand/[0.07] p-5 align-top">
                      <div className="flex items-start gap-2.5">
                        <Icon name="check" className="mt-0.5 size-4 text-brand-deep" />
                        <span className="text-ink">{row.us}</span>
                      </div>
                    </td>
                    <td className="border-t border-ink/[0.06] bg-white p-5 align-top">
                      <div className="flex items-start gap-2.5">
                        <Icon name="x" className="mt-0.5 size-4 text-ink/30" />
                        <span className="text-ink/60">{row.them}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 md:hidden">
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="rounded-3xl border border-ink/[0.08] bg-white p-5"
              >
                <p className="font-semibold text-ink">{row.label}</p>
                <div className="mt-3 flex items-start gap-2.5">
                  <UsTag />
                  <span className="text-sm text-ink/80">{row.us}</span>
                </div>
                <div className="mt-2.5 flex items-start gap-2.5">
                  <ThemTag />
                  <span className="text-sm text-ink/55">{row.them}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-ink/45">{comparisonFootnote}</p>
        </div>
      </Container>
    </section>
  );
}
