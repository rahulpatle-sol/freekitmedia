"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { process as processData } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import type { IconName } from "@/components/ui/Icon";

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="process" ref={ref} className="py-24 sm:py-32">
      <Container>
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-grey-400 uppercase">
            Process
          </p>
          <h2 className="font-display mt-4 text-h1 font-bold leading-[1.08] tracking-[-0.02em]">
            {processData.headline}
          </h2>
          <p className="mt-6 text-lead leading-relaxed text-grey-600">
            {processData.sub}
          </p>
        </div>
        <div
          data-reveal-stagger
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {processData.steps.map((step) => (
            <article
              key={step.num}
              className="rounded-3xl border border-grey-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-display grid size-9 place-items-center rounded-full bg-ink text-sm font-bold text-paper">
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-grey-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-16 grid gap-4 md:grid-cols-3">
          {processData.grows.map((grow) => (
            <article
              key={grow.name}
              className="flex items-start gap-4 rounded-3xl bg-brand/15 p-6"
            >
              <Icon name={grow.icon as IconName} className="mt-0.5 size-6 text-brand-deep" />
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {grow.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-grey-600">
                  {grow.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-4 grid gap-4 md:grid-cols-[1.2fr_1fr]"
        >
          <div className="rounded-3xl bg-ink p-8 text-paper sm:p-10">
            <p className="font-display text-h3 font-bold tracking-tight text-brand">
              {processData.report.title}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {processData.report.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-paper/75"
                >
                  <Icon name="check" className="mt-0.5 size-4 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-paper/50">
              {processData.report.note}
            </p>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-grey-200 bg-white p-8 sm:p-10">
            <div>
              <p className="font-display text-h3 font-bold tracking-tight">
                {processData.honesty.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-grey-600 sm:text-base">
                {processData.honesty.text}
              </p>
            </div>
            <p className="font-display mt-8 text-sm font-semibold text-brand-deep">
              {processData.honesty.line}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
