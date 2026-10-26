
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { industries } from "@/content/industries";
import { useReveal } from "@/lib/use-reveal";

const industryVisuals = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
];

export function PitchSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useReveal(ref);

  const activeIndustry = industries[activeIndex];

  const getIndustryImage = (index: number) =>
    industryVisuals[index % industryVisuals.length];

  return (
    <section
      id="industries"
      ref={ref}
      className="relative overflow-hidden bg-[#F8F7FC] py-20 text-[#29243A] sm:py-28 lg:py-36"
    >
      <Container>
        {/* Section heading */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-[#302644]/15 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8069A9] sm:text-xs">
            Industries we serve
          </p>

          <p className="font-mono text-[10px] text-[#8C849C] sm:text-xs">
            {String(industries.length).padStart(2, "0")} CATEGORIES
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: heading, image and CTA */}
          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p
                data-reveal
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9673D8]"
              >
                Built around your business
              </p>

              <h2
                data-reveal
                className="font-display mt-5 text-[clamp(3rem,6.2vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.075em]"
              >
                Every industry.
                <br />
                <span className="text-[#9673D8]">Its own strategy.</span>
              </h2>

              <p
                data-reveal
                className="mt-5 max-w-md text-sm leading-7 text-[#716A80] sm:text-base"
              >
                Different customers. Different challenges. We build marketing
                strategies around what makes your business unique.
              </p>

              {/* Active industry image */}
              <div
                data-reveal
                className="group relative mt-8 aspect-[5/4] overflow-hidden rounded-2xl bg-[#E8E1F3] sm:mt-10"
              >
                {activeIndustry && (
                  <>
                    <Image
                      key={activeIndustry.slug}
                      src={getIndustryImage(activeIndex)}
                      alt={`${activeIndustry.name} industry`}
                      fill
                      priority={activeIndex === 0}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171322]/80 via-[#171322]/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                      <div className="flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/70">
                            Industry spotlight
                          </p>

                          <h3 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                            {activeIndustry.name}
                          </h3>
                        </div>

                        <span className="shrink-0 font-mono text-xs text-white/75">
                          {String(activeIndex + 1).padStart(2, "0")} /{" "}
                          {String(industries.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/#contact"
                className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#302644] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8060BB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9673D8] focus-visible:ring-offset-2 sm:w-auto"
              >
                Get a free marketing audit
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right: interactive industry list */}
          <div className="min-w-0 lg:col-span-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold text-[#514565]">
                Find your industry
              </p>

              <p className="text-[10px] text-[#8C849C] sm:text-xs">
                Select to explore
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#302644]/10 bg-white/70">
              {industries.map((industry, index) => {
                const active = activeIndex === index;

                return (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    aria-current={active ? "true" : undefined}
                    className={[
                      "group block border-b border-[#302644]/10 p-4 outline-none transition-colors duration-300 last:border-b-0 sm:p-5",
                      active
                        ? "bg-[#F1ECF9]"
                        : "hover:bg-[#F8F5FD] focus-visible:bg-[#F1ECF9]",
                    ].join(" ")}
                  >
                    <div className="grid grid-cols-[2rem_minmax(0,1fr)_2.25rem] items-start gap-3 sm:grid-cols-[2.5rem_minmax(0,1fr)_2.75rem] sm:gap-4">
                      <span
                        className={[
                          "pt-1 font-mono text-xs transition-colors",
                          active ? "text-[#8060BB]" : "text-[#A7A0B2]",
                        ].join(" ")}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className={[
                            "font-display text-lg font-bold leading-snug tracking-[-0.04em] transition-colors sm:text-2xl lg:text-3xl",
                            active ? "text-[#8060BB]" : "text-[#302644]",
                          ].join(" ")}
                        >
                          {industry.name}
                        </h3>

                        <div
                          className={[
                            "grid transition-[grid-template-rows,opacity] duration-300",
                            active
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0",
                          ].join(" ")}
                        >
                          <div className="overflow-hidden">
                            <p className="max-w-lg pt-2 text-sm leading-6 text-[#716A80]">
                              {industry.problemLine}
                            </p>

                            <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8060BB]">
                              Explore industry
                              <Icon name="arrowRight" className="size-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>

                      <span
                        className={[
                          "grid size-9 place-items-center rounded-full border transition-all duration-300 sm:size-11",
                          active
                            ? "border-[#8060BB] bg-[#8060BB] text-white"
                            : "border-[#302644]/15 text-[#716A80] group-hover:border-[#9673D8] group-hover:text-[#8060BB]",
                        ].join(" ")}
                      >
                        <Icon
                          name="arrowRight"
                          className={[
                            "size-4 transition-transform duration-300",
                            active ? "translate-x-0.5" : "",
                          ].join(" ")}
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <p className="mt-5 text-sm leading-6 text-[#716A80]">
              Don’t see your industry?{" "}
              <Link
                href="/#contact"
                className="font-semibold text-[#8060BB] underline decoration-[#8060BB]/40 underline-offset-4 transition-colors hover:text-[#302644]"
              >
                Let’s talk about your business.
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
