"use client";

import { Container } from "@/components/ui/Container";
import type { Partner } from "@/content/partners";

const intentionLabels: Record<string, string> = {
  attention: "Attention",
  discovery: "Discovery",
  credibility: "Credibility",
  education: "Education",
  conversion: "Conversion",
};

export function PartnerStrategy({ partner }: { partner: Partner }) {
  const phases = partner.strategy;

  if (!phases || phases.length === 0) {
    return null;
  }

  return (
    <section className="bg-paper py-16 sm:py-24">
      <Container>
        <header className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Strategy
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            Why we made the content that way.
          </h2>
        </header>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => (
            <li
              key={phase.title}
              className="rounded-2xl border border-ink/10 bg-white p-6"
            >
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-brand-deep uppercase">
                {intentionLabels[phase.intention] ?? phase.intention}
              </p>
              <h3 className="font-display mt-4 text-xl font-bold tracking-tight text-ink">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-grey-600">
                {phase.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}