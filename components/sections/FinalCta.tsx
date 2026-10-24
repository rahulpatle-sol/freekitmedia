
"use client";

import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { site } from "@/content/site";
import { useReveal } from "@/lib/use-reveal";
import { Icon } from "@/components/ui/Icon";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);

  useReveal(ref);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate overflow-hidden bg-[#22251D] py-24 text-[#F7F6F0] sm:py-32 lg:py-40"
    >
      {/* Decorative SVG — static, lightweight, no extra dependency */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-48 -top-32 -z-10 w-[34rem] opacity-30 sm:-right-32 sm:-top-40 sm:w-[48rem]"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={i}
            cx="300"
            cy="300"
            r={75 + i * 23}
            stroke="#C5C9A7"
            strokeWidth="0.7"
          />
        ))}
        <circle cx="300" cy="300" r="5" fill="#C5C9A7" />
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C5C9A7]/50 to-transparent"
      />

      <Container>
        {/* Top label */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-white/20 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5C9A7] sm:text-xs">
            Let’s build something that works
          </p>

          <p className="font-mono text-[10px] text-white/45 sm:text-xs">
            YOUR NEXT MOVE / 001
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          {/* Left: conversion copy */}
          <div data-reveal className="lg:col-span-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              <span className="size-2 rounded-full bg-[#C5C9A7]" />
              Agla step, aapka
            </p>

            <h2 className="font-display mt-7 text-[clamp(3.5rem,7vw,7rem)] font-extrabold leading-[0.84] tracking-[-0.075em]">
              Business ko
              <br />
              grow karna
              <br />
              <span className="text-[#C5C9A7]">hai?</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-relaxed text-white/65 sm:text-base sm:leading-7">
              Aapke business mein customers kahan miss ho rahe hain aur
              growth ke liye pehle kya improve karna chahiye — chaliye
              milkar samajhte hain.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-4 py-3">
              <Icon
                name="clock"
                className="size-5 shrink-0 text-[#C5C9A7]"
              />
              <div>
                <p className="text-sm font-semibold">Free Digital Audit</p>
                <p className="mt-0.5 text-xs text-white/50">
                  {site.cta.auditNote}
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Prefer a direct conversation?
              </p>

              <ContactChannels />
            </div>

            <p className="mt-8 max-w-sm text-xs leading-relaxed text-white/40">
              Working with businesses across Chhattisgarh and beyond.
              {" "}{site.address.line}
            </p>
          </div>

          {/* Right: form panel */}
          <div data-reveal className="lg:col-span-7 lg:pt-3">
            <div className="relative overflow-hidden rounded-2xl bg-[#F7F6F0] p-6 text-[#25271F] shadow-[0_35px_100px_-35px_rgba(0,0,0,0.6)] sm:p-9 lg:p-11">
              {/* Accent strip */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[#C5C9A7]"
              />

              <div className="mb-8 flex items-start justify-between gap-4 border-b border-[#25271F]/10 pb-6 sm:mb-10">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#737D43]">
                    {site.cta.audit}
                  </p>

                  <h3 className="font-display mt-3 text-2xl font-extrabold tracking-[-0.045em] sm:text-3xl">
                    Tell us about your business.
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[#68695F]">
                    Share a few details. We’ll understand your goals and
                    figure out the next step together.
                  </p>
                </div>

                <span className="hidden size-11 shrink-0 place-items-center rounded-full border border-[#25271F]/10 text-[#737D43] sm:grid">
                  <Icon name="arrowRight" className="size-5" />
                </span>
              </div>

              <ContactForm />

              <div className="mt-7 flex items-start gap-2 border-t border-[#25271F]/10 pt-5">
                <Icon
                  name="shield"
                  className="mt-0.5 size-4 shrink-0 text-[#737D43]"
                />

                <p className="text-xs leading-relaxed text-[#77786F]">
                  Your details are used to understand your requirements
                  and respond to your enquiry.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1 text-[10px] uppercase tracking-[0.14em] text-white/40">
              <span>No pressure. Just clarity.</span>
              <span>Built on honest conversations.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
