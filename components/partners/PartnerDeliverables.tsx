"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { Partner } from "@/content/partners";

export function PartnerDeliverables({ partner }: { partner: Partner }) {
  const groups = partner.deliverables;

  if (!groups || groups.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <header className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            The work
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            What we delivered.
          </h2>
          <p className="mt-4 text-base leading-7 text-grey-600 sm:text-lg">
            Only the services this partnership actually covered.
          </p>
        </header>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.group}
              className="rounded-2xl border border-ink/10 bg-mist p-6 sm:p-7"
            >
              <span className="inline-flex rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                {group.group}
              </span>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-ink/80"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 size-4 shrink-0 text-brand-deep"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}