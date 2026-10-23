"use client";

import Image from "next/image";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { Counter } from "@/components/ui/Counter";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="results" ref={ref} className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title={
            <>
              Numbers bolte hain, <Mark>promises nahi</Mark>
            </>
          }
          description="Jo bhi claim karte hain, report mein proof hota hai. Yeh kuch clients jo har mahine humpe bharosa karte hain."
        />
        <div data-reveal-stagger className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} data-reveal>
              <Counter
                value={stat.value}
                decimals={stat.decimals}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl"
              />
              <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
        <div data-reveal-stagger className="mt-16 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              data-reveal
              className="flex flex-col gap-5 rounded-3xl border border-ink/[0.08] bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(29,23,0,0.15)] sm:p-8"
            >
              <div
                aria-label="5 out of 5 stars"
                className="flex gap-1 text-brand"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" className="size-4" />
                ))}
              </div>
              <blockquote className="text-[0.97rem] leading-relaxed text-ink/80">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3.5">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.business}`}
                  width={56}
                  height={56}
                  sizes="56px"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-xs text-ink/55">
                    {testimonial.role} · {testimonial.business}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
