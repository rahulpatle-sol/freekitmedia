"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { noShortcuts } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function NoShortcuts() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="bg-olive text-paper">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div data-reveal>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-paper/70">
            Na lalach, na dhoka
          </p>
          <h2 className="font-display mt-3 text-h2 leading-tight font-extrabold tracking-tight">
            {noShortcuts.title}
          </h2>
          <p className="font-display mt-5 text-sm font-bold leading-relaxed text-paper/85">
            &ldquo;{noShortcuts.line}&rdquo;
          </p>
        </div>
        <div data-reveal className="grid gap-8 sm:grid-cols-3">
          {noShortcuts.items.map((item) => (
            <article key={item.title}>
              <Icon name="x" className="size-5 text-brand" />
              <h3 className="font-display mt-3 text-base font-extrabold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
