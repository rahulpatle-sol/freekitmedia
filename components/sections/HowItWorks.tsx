"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { Container } from "@/components/ui/Container";
import { Mark } from "@/components/ui/Mark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/data/steps";

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="process"
      ref={ref}
      className="border-y border-ink/[0.06] bg-cream py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              4 step. Zero <Mark>confusion</Mark>.
            </>
          }
          description="Call se lekar pehli report tak — poora process likhit hai, sab timings ke saath."
        />
        <div data-reveal-stagger className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} data-reveal>
              <span className="font-display text-5xl font-bold tracking-tight text-ink/80">
                {step.number}
              </span>
              <span aria-hidden="true" className="mt-4 block h-1 w-10 rounded-full bg-brand" />
              <h3 className="font-display mt-4 text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
