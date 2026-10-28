"use client";

import { Container } from "@/components/ui/Container";
import type { Partner } from "@/content/partners";

export function PartnerMetrics({ partner }: { partner: Partner }) {
  const metrics = partner.metrics;

  if (!metrics || metrics.length === 0) {
    return null;
  }

  return (
    <section className="bg-ink py-16 text-paper sm:py-24">
      <Container>
        <header className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Results
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-paper">
            Impact, measured honestly.
          </h2>
        </header>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {metric.label}
              </p>
              {metric.hint ? (
                <p className="mt-2 text-xs leading-6 text-white/45">
                  {metric.hint}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}