
"use client";

import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { useReveal } from "@/lib/use-reveal";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);

  useReveal(ref);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate overflow-hidden bg-[#302644] py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Subtle lavender background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[28rem] rounded-full border border-[#C4B5FD]/15 sm:-right-24 sm:-top-48 sm:size-[38rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 size-[20rem] rounded-full border border-[#C4B5FD]/10 sm:size-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[#211A30]/60 to-transparent"
      />

      <Container>
        {/* Section header */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-white/15 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D0BDFB] sm:text-xs">
            Let’s work together
          </p>

          <p className="font-mono text-[10px] text-white/45 sm:text-xs">
            GET IN TOUCH
          </p>
        </div>

        <div className="mt-10 grid min-w-0 gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 xl:gap-20">
          {/* Left: conversion copy */}
          <div data-reveal className="min-w-0 lg:sticky lg:top-28">
            <p className="flex items-center gap-2 text-xs font-semibold text-[#D0BDFB]">
              <span className="size-2 rounded-full bg-[#C4B5FD]" />
              Your next step starts here
            </p>

            <h2 className="font-display mt-5 text-[clamp(3.1rem,6.2vw,5.8rem)] font-extrabold leading-[0.91] tracking-[-0.075em]">
              Ready to
              <br />
              grow your
              <br />
              <span className="text-[#C4B5FD]">business?</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/70 sm:text-base">
              Let’s understand your goals, identify opportunities, and figure
              out what your business needs to grow.
            </p>

            {/* Audit information */}
            <div className="mt-7 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 sm:mt-8 sm:p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#C4B5FD]/15 text-[#D0BDFB]">
                <Icon name="clock" className="size-5" />
              </span>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">
                  Free Digital Audit
                </p>
                <p className="mt-1 text-xs leading-5 text-white/55">
                  {site.cta.auditNote}
                </p>
              </div>
            </div>

            {/* Contact channels */}
            <div className="mt-8 border-t border-white/15 pt-6 sm:mt-9">
              <p className="mb-4 text-xs font-medium text-white/55">
                Prefer to talk directly?
              </p>

              <ContactChannels />
            </div>

            <p className="mt-6 max-w-sm text-xs leading-6 text-white/45">
              Working with businesses across Chhattisgarh and beyond.
              {" "}
              {site.address.line}
            </p>
          </div>

          {/* Right: contact form */}
          <div data-reveal className="min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#302644]/10 bg-[#FDFCFF] p-5 text-[#302644] shadow-[0_30px_90px_-35px_rgba(12,8,20,0.6)] sm:p-7 md:p-9 lg:p-8 xl:p-10">
              {/* Lavender accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9673D8] via-[#C4B5FD] to-[#9673D8]"
              />

              <div className="mb-6 border-b border-[#302644]/10 pb-6 sm:mb-8 sm:pb-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8060BB]">
                  {site.cta.audit}
                </p>

                <h3 className="font-display mt-3 text-2xl font-extrabold leading-tight tracking-[-0.045em] sm:text-3xl">
                  Tell us about your business.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#716A80]">
                  Share a few details about your business and goals. We’ll
                  help you identify the next steps.
                </p>
              </div>

              <ContactForm />

              {/* Privacy note */}
              <div className="mt-6 flex items-start gap-3 border-t border-[#302644]/10 pt-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#F1ECF9] text-[#8060BB]">
                  <Icon name="shield" className="size-4" />
                </span>

                <p className="pt-1 text-xs leading-5 text-[#716A80]">
                  Your details are used to understand your requirements and
                  respond to your enquiry.
                </p>
              </div>
            </div>

            <p className="mt-4 px-1 text-xs leading-5 text-white/45">
              No pressure. Just an honest conversation about your business.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
