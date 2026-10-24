"use client";

import { Container } from "@/components/ui/Container";
import { faqs } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function FaqSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="faq" ref={ref} className="bg-paper py-24 sm:py-32">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            FAQ
          </p>
          <h2 className="font-display mt-4 text-h1 leading-[1.05] font-extrabold tracking-[-0.02em]">
            Jo sab poochte hain
          </h2>
          <p className="mt-4 max-w-sm text-lead leading-relaxed text-grey-600">
            Sawal ka jawab na ho, toh WhatsApp par joche lo — jawab dena humein
            achha lagta hai.
          </p>
        </div>
        <div data-reveal-stagger className="divide-y divide-grey-200 border-y border-grey-200">
          {faqs.map((faq, i) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-brand-deep [&::-webkit-details-marker]:hidden">
                <span className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-bold text-brand-deep tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center border border-grey-200 font-display text-lg font-bold transition-colors group-open:border-brand group-open:bg-brand group-open:text-ink"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="pb-6 pr-10 pl-10 text-sm leading-relaxed text-grey-600 sm:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
