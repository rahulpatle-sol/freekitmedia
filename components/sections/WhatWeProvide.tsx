"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function WhatWeProvide() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="services" ref={ref} className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we provide"
          title={
            <>
              Ek chhat ke neeche, <Mark>sab services</Mark>
            </>
          }
          description="Chhe services, ek contract, ek WhatsApp thread. Jo chahiye wo le lo, jo aage chahiye wo badh lo."
        />
        <div data-reveal-stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              data-reveal
              className="group flex flex-col rounded-3xl border border-ink/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_20px_44px_-24px_rgba(29,23,0,0.18)] sm:p-7"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-brand/15 text-ink">
                <Icon name={service.icon} className="size-[1.35rem]" />
              </span>
              <h3 className="font-display mt-6 text-lg font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-ink/[0.06] pt-5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <Icon name="check" className="mt-0.5 size-4 text-brand-deep" />
                    {point}
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
