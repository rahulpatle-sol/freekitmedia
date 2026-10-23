"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { systemPillars } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function SystemSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="system" ref={ref} className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <div data-reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Hamara system
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
            Visibility → Trust → Growth
          </h2>
          <p className="mt-5 max-w-2xl text-lead leading-relaxed text-paper/60">
            Hum &quot;posting&quot; nahi bechte — hum ek system dete hain: teen
            steps, jo har mahine repeat hote hain.
          </p>
        </div>
        <div data-reveal-stagger className="mt-16 grid gap-5 md:grid-cols-3">
          {systemPillars.map((pillar) => (
            <article
              key={pillar.num}
              className="group relative overflow-hidden rounded-3xl border border-paper/10 bg-paper/[0.03] p-8 transition-colors hover:border-brand/60"
            >
              <span className="font-display text-6xl font-bold tracking-tight text-paper/10 transition-colors group-hover:text-brand/70">
                {pillar.num}
              </span>
              <h3 className="font-display mt-6 text-h3 font-bold tracking-tight">
                {pillar.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                {pillar.desc}
              </p>
              <p className="font-display mt-6 flex items-center gap-2 text-base font-semibold text-brand">
                <Icon
                  name={pillar.name === "Trust" ? "heart" : pillar.name === "Conversion" ? "trendingUp" : "eye"}
                  className="size-4"
                />
                {pillar.outcome}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
