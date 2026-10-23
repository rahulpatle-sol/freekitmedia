"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/data/plans";
import { cn, whatsappLink } from "@/lib/utils";
import { site } from "@/data/site";

export function Pitch() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="plans"
      ref={ref}
      className="border-y border-ink/[0.06] bg-cream py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Plans"
          title={
            <>
              Aapke business ke hisaab se <Mark>plan</Mark>
            </>
          }
          description="Har plan likhit scope ke saath — kya hoga, kab hoga, kitne mein. Starting prices transparent; ad spend hamesha aapke apne account pe."
        />
        <div data-reveal-stagger className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.slug}
              data-reveal
              className={cn(
                "relative flex flex-col rounded-3xl border p-6 transition-transform duration-300 hover:-translate-y-1",
                plan.popular
                  ? "border-transparent bg-ink text-white shadow-[0_28px_60px_-28px_rgba(29,23,0,0.45)]"
                  : "border-ink/[0.08] bg-white",
              )}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink">
                  Sabse popular
                </span>
              ) : null}
              <h3
                className={cn(
                  "font-display text-xl font-bold tracking-tight",
                  plan.popular ? "text-white" : "text-ink",
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-xs font-medium",
                  plan.popular ? "text-brand" : "text-brand-deep",
                )}
              >
                {plan.audience}
              </p>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  plan.popular ? "text-white/65" : "text-ink/60",
                )}
              >
                {plan.pitch}
              </p>
              <div className="mt-5">
                <p>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      plan.popular ? "text-white/60" : "text-ink/55",
                    )}
                  >
                    From{" "}
                  </span>
                  <span
                    className={cn(
                      "font-display text-3xl font-bold tracking-tight",
                      plan.popular ? "text-white" : "text-ink",
                    )}
                  >
                    {plan.priceFrom}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      plan.popular ? "text-white/60" : "text-ink/55",
                    )}
                  >
                    /mo
                  </span>
                </p>
                <p
                  className={cn(
                    "mt-1.5 text-xs",
                    plan.popular ? "text-white/45" : "text-ink/45",
                  )}
                >
                  {plan.priceNote}
                </p>
              </div>
              <ul className={cn("mt-6 flex-1 space-y-2.5 border-t pt-5", plan.popular ? "border-white/15" : "border-ink/[0.06]")}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex items-start gap-2.5 text-sm",
                      plan.popular ? "text-white/80" : "text-ink/75",
                    )}
                  >
                    <Icon name="check" className={cn("mt-0.5 size-4", plan.popular ? "text-brand" : "text-brand-deep")} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={whatsappLink(
                  site.whatsapp.number,
                  `Hi FreeKit Media! Mujhe ${plan.name} plan (${plan.audience}) ke bare mein baat karni hai.`,
                )}
                variant={plan.popular ? "primary" : "outline"}
                size="sm"
                className="mt-7"
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
        <p data-reveal className="mt-8 text-center text-sm text-ink/60">
          Koi hidden charges nahi — contract se pehle sab kuch likhit.{" "}
          <Button href="#faq" variant="ghost" size="sm" className="p-0 text-ink/80 underline decoration-brand decoration-2 underline-offset-4 hover:text-ink">
            FAQ dekho
          </Button>
        </p>
      </Container>
    </section>
  );
}
