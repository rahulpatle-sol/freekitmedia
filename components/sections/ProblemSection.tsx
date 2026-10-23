"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { losses, problem } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import type { IconName } from "@/components/ui/Icon";

const lossIcons: IconName[] = ["eye", "shield", "mapPin", "search"];

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="py-24 sm:py-32">
      <Container>
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-grey-400 uppercase">
            Reality check
          </p>
          <h2 className="font-display mt-4 text-h1 font-bold leading-[1.08] tracking-[-0.02em]">
            {problem.headline}
          </h2>
          <p className="mt-6 text-lead leading-relaxed text-grey-600">
            {problem.text}
          </p>
        </div>
        <div
          data-reveal-stagger
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {losses.map((loss, i) => (
            <article
              key={loss.title}
              className="rounded-3xl border border-grey-200 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(11,11,11,0.25)]"
            >
              <Icon name={lossIcons[i]} className="size-6 text-brand" />
              <h3 className="font-display mt-4 text-lg font-bold tracking-tight">
                {loss.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-600">
                {loss.text}
              </p>
            </article>
          ))}
        </div>
        <p data-reveal className="font-display mt-14 max-w-3xl text-h3 font-bold leading-snug tracking-tight text-ink">
          {problem.line}
        </p>
      </Container>
    </section>
  );
}
