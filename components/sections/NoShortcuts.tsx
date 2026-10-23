"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { noShortcuts } from "@/content/page-sections";
import { useReveal } from "@/lib/use-reveal";

const itemIcons: ("x")[] = ["x", "x", "x"];

export function NoShortcuts() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <div data-reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Na lalach, na dhoka
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
            {noShortcuts.title}
          </h2>
        </div>
        <div data-reveal-stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {noShortcuts.items.map((item, i) => (
            <article
              key={item.title}
              className="rounded-3xl border border-paper/10 bg-paper/[0.03] p-8 transition-colors hover:border-brand/60"
            >
              <Icon name={itemIcons[i]} className="size-6 text-brand" />
              <h3 className="font-display mt-4 text-h3 font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
        <p
          data-reveal
          className="font-display mt-12 max-w-3xl text-h3 font-bold leading-snug tracking-tight text-brand [&_q]:text-brand"
        >
          &ldquo;{noShortcuts.line}&rdquo;
        </p>
      </Container>
    </section>
  );
}
