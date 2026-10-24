"use client";

import { Container } from "@/components/ui/Container";
import { losses, problem } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="bg-paper py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Reality check
          </p>
          <h2 className="font-display mt-4 text-h1 leading-[1.08] font-extrabold tracking-[-0.02em]">
            {problem.headline}
          </h2>
          <p className="mt-6 text-lead leading-relaxed text-grey-600">
            {problem.text}
          </p>
          <p className="font-display mt-10 max-w-md border-l-4 border-brand pl-5 text-h3 leading-snug font-extrabold tracking-tight">
            {problem.line}
          </p>
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          <ol>
            {losses.map((loss, i) => (
              <li
                key={loss.title}
                data-reveal
                className="group border-t border-grey-200 py-7 transition-colors last:border-b hover:bg-mist"
              >
                <div className="flex items-baseline gap-5 px-4 py-3 sm:gap-8 sm:px-6">
                  <span className="font-display w-8 shrink-0 text-sm font-bold text-brand-deep tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold tracking-tight">
                      {loss.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-grey-600">
                      {loss.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
