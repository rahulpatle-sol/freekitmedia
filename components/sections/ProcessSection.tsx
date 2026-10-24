"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { process as processData } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";
import type { IconName } from "@/components/ui/Icon";

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="process" ref={ref} className="bg-paper py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
              Process
            </p>
            <h2 className="font-display mt-4 text-h1 leading-[1.08] font-extrabold tracking-[-0.02em]">
              {processData.headline}
            </h2>
            <p className="mt-5 text-lead leading-relaxed text-grey-600">
              {processData.sub}
            </p>
            <div className="mt-8 flex flex-wrap"
              aria-label="Har mahine kya badhta hai"
            >
              {processData.grows.map((grow) => (
                <span
                  key={grow.name}
                  className="flex items-center gap-2 border border-ink/10 bg-mist px-3.5 py-2 text-sm font-semibold text-ink"
                >
                  <Icon name={grow.icon as IconName} className="size-4 text-brand-deep" />
                  {grow.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ol className="lg:col-span-8">
          {processData.steps.map((step, i) => (
            <li
              key={step.num}
              data-reveal
              className="grid items-start gap-x-10 gap-y-2 border-t border-grey-200 py-7 last:border-b sm:grid-cols-[5.5rem_1fr] sm:py-8"
            >
              <span
                className={cn(
                  "font-display text-4xl leading-none font-extrabold tracking-tight tabular-nums",
                  i === 0 ? "text-brand-deep" : "text-grey-200",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-grey-600">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="border border-ink/10 bg-mist p-8 sm:p-10">
          <p className="font-display text-h3 font-extrabold tracking-tight">
            {processData.report.title}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {processData.report.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80"
              >
                <Icon name="check" className="mt-0.5 size-4 text-brand-deep" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-grey-600">{processData.report.note}</p>
        </div>
        <div data-reveal className="flex flex-col justify-between">
          <div>
            <p className="font-display text-h3 font-extrabold tracking-tight">
              {processData.honesty.title}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-grey-600 sm:text-base">
              {processData.honesty.text}
            </p>
          </div>
          <p className="font-display mt-8 max-w-sm border-l-4 border-brand pl-5 text-sm font-extrabold leading-relaxed text-brand-deep">
            {processData.honesty.line}
          </p>
        </div>
      </Container>
    </section>
  );
}
