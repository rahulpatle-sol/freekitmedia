"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { offlineSupport, services } from "@/content/services";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="services" ref={ref} className="bg-mist py-24 sm:py-32">
      <Container>
        <div data-reveal className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
              Services
            </p>
            <h2 className="font-display mt-4 text-h1 leading-[1.05] font-extrabold tracking-[-0.02em]">
              Poora marketing department, ek hi chhat ke neeche
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-grey-600">
            Har service alag le sakte hain. Par asli leverage tab milti hai jab
            chaar milke chalte hain.
          </p>
        </div>

        <div className="mt-14 border-t border-ink/10">
          {services.map((service, i) => (
            <article
              key={service.slug}
              data-reveal
              className="group grid gap-6 border-b border-ink/10 py-9 transition-colors hover:bg-paper sm:py-11"
            >
              <div className="grid items-start gap-6 sm:grid-cols-[2.5rem_1.35fr_1fr] lg:grid-cols-[2.5rem_1.15fr_1.1fr_auto] lg:gap-10">
                <span className="font-display text-sm font-bold text-grey-400 tabular-nums">
                  {service.num}
                </span>
                <div>
                  <span className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center bg-brand text-ink">
                      <Icon name={service.icon} className="size-4.5" />
                    </span>
                    <h3 className="font-display text-h3 leading-tight font-extrabold tracking-tight">
                      {service.title}
                    </h3>
                  </span>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-grey-600">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2 sm:border-l sm:border-ink/10 sm:pl-6">
                  {service.points.slice(0, 4).map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 size-4 shrink-0 text-brand-deep"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`${service.title} ki detail page`}
                  className="link-underline inline-flex items-center gap-1.5 self-center text-sm font-semibold text-ink/60 transition-colors hover:text-ink lg:justify-self-end"
                >
                  Detail
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                  <span className="sr-only">- {String(i + 1).padStart(2, "0")}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-14 bg-brand p-8 text-ink sm:p-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div className="max-w-2xl">
              <p className="font-display text-h3 font-extrabold tracking-tight">
                {offlineSupport.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed sm:text-base">
                {offlineSupport.text}
              </p>
            </div>
            <p className="font-display max-w-xs text-sm font-bold leading-relaxed sm:border-l sm:border-ink/30 sm:pl-6">
              {offlineSupport.line}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
