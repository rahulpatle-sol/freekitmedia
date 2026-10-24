
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

  return (
    <section
      id="industries"
      ref={ref}
      className="relative overflow-hidden bg-[#EDEBE4] py-24 text-[#202119] sm:py-32 lg:py-40"
    >
      <Container>
        {/* Section header */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-[#202119]/20 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#646653] sm:text-xs">
            Industry-specific thinking
          </p>

          <p className="font-mono text-[10px] text-[#646653] sm:text-xs">
            {String(industries.length).padStart(2, "0")} INDUSTRIES
          </p>
        </div>

        {/* Main editorial layout */}
        <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* Left: sticky title + visual */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p
                data-reveal
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#737D43]"
              >
                Aapke business ke liye
              </p>

              <h2
                data-reveal
                className="font-display mt-6 text-[clamp(3.2rem,6.4vw,6.5rem)] font-extrabold leading-[0.86] tracking-[-0.075em]"
              >
                Har industry.
                <br />
                <span className="text-[#737D43]">Apni strategy.</span>
              </h2>

              <p
                data-reveal
                className="mt-6 max-w-md text-sm leading-relaxed text-[#62635A] sm:text-base"
              >
                Har business ka customer, competition aur growth challenge
                alag hota hai. Strategy bhi usi hisaab se honi chahiye.
              </p>

              {/* Active industry visual */}
              <div
                data-reveal
                className="group relative mt-10 aspect-[5/4] overflow-hidden rounded-2xl bg-[#D8D7CD]"
              >
                {activeIndustry && (
                  <>
                    <Image
                      key={activeIndustry.slug}
                      src={
                        industryVisuals[
                          activeIndex % industryVisuals.length
                        ]
                      }
                      alt={`${activeIndustry.name} industry`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/65">
                            Currently exploring
                          </p>

                          <h3 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                            {activeIndustry.name}
                          </h3>
                        </div>

                        <span className="font-mono text-sm text-white/75">
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
                className="group mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#292D22] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#737D43]"
              >
                Request a free audit
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right: interactive industry list */}
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#646653]">
                Find your industry
              </p>

              <span className="text-[10px] text-[#646653]">
                Hover / tap to explore
              </span>
            </div>

            <div className="border-t border-[#202119]/20">
              {industries.map((industry, index) => {
                const active = activeIndex === index;

                return (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={[
                      "group relative block border-b border-[#202119]/15 py-6 outline-none transition-colors duration-300 sm:py-8",
                      active ? "bg-white/60" : "hover:bg-white/35",
                    ].join(" ")}
                  >
                    <div className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-3 px-3 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-5 sm:px-5">
                      <span
                        className={[
                          "pt-1 font-mono text-xs transition-colors duration-300",
                          active ? "text-[#737D43]" : "text-[#96968C]",
                        ].join(" ")}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3
                          className={[
                            "font-display text-xl font-bold tracking-[-0.045em] transition-all duration-300 sm:text-3xl lg:text-4xl",
                            active
                              ? "translate-x-1 text-[#737D43]"
                              : "text-[#202119]",
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
                            <p className="max-w-lg pt-3 text-sm leading-relaxed text-[#62635A]">
                              {industry.problemLine}
                            </p>

                            <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#737D43]">
                              Explore industry
                              <Icon
                                name="arrowRight"
                                className="size-3.5"
                              />
                            </span>
                          </div>
                        </div>
                      </div>

                      <span
                        className={[
                          "grid size-9 place-items-center rounded-full border transition-all duration-300 sm:size-11",
                          active
                            ? "rotate-0 border-[#737D43] bg-[#737D43] text-white"
                            : "border-[#202119]/15 text-[#646653] group-hover:border-[#737D43]",
                        ].join(" ")}
                      >
                        <Icon
                          name="arrowRight"
                          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-[#77786F]">
              <Icon
                name="sparkles"
                className="mt-0.5 size-4 shrink-0 text-[#737D43]"
              />
              <p>
                Apni category nahi mili? Free audit mein apne business ka
                challenge discuss karo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
