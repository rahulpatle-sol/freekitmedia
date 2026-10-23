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
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-grey-400 uppercase">
              Services
            </p>
            <h2 className="font-display mt-4 text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
              Poora marketing department, ek hi chhat ke neeche
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-grey-600">
            Har service alag le sakte hain. Par asli leverage tab milti hai jab
            chaar milke chalte hain.
          </p>
        </div>
        <div
          data-reveal-stagger
          className="mt-14 grid gap-4 md:grid-cols-2"
        >
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col rounded-3xl border border-grey-200 bg-white p-8 transition-[border-color,box-shadow] hover:border-ink/20 hover:shadow-[0_24px_60px_-28px_rgba(11,11,11,0.3)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand/15 text-brand-deep">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-grey-400">
                    {service.num}
                  </span>
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`${service.title} ki detail page`}
                  className="link-underline inline-flex items-center gap-1 text-sm font-semibold text-ink/60 hover:text-ink"
                >
                  Detail
                  <Icon name="arrowRight" className="size-4" />
                </Link>
              </div>
              <h3 className="font-display mt-6 text-h3 font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-600">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {service.points.slice(0, 4).map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80"
                  >
                    <Icon name="check" className="mt-0.5 size-4 text-brand-deep" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div
          data-reveal
          className="mt-4 rounded-3xl bg-brand p-8 text-ink sm:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-display text-h3 font-bold tracking-tight">
                {offlineSupport.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed sm:text-base">
                {offlineSupport.text}
              </p>
            </div>
            <p className="font-display max-w-xs text-sm font-semibold leading-relaxed">
              {offlineSupport.line}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
