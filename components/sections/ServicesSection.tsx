
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/content/services";

type PreviewPosition = {
  x: number;
  y: number;
};

const serviceImages: Record<string, string> = {
  "content-creation-branding":
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=85",
  "meta-google-ads":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
  "website-social-media":
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=85",
  "personal-branding-influencer":
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
};

export function ServiceHoverPreview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [position, setPosition] = useState<PreviewPosition>({
    x: 0,
    y: 0,
  });

  const pendingPosition = useRef<PreviewPosition | null>(null);
  const animationFrame = useRef<number | null>(null);

  const activeService =
    activeIndex !== null ? services[activeIndex] : null;

  useEffect(() => {
    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;

    const previewWidth = Math.min(360, window.innerWidth * 0.8);
    const previewHeight = 250;
    const offset = 28;
    const edge = 16;

    let x = event.clientX + offset;
    let y = event.clientY + offset;

    if (x + previewWidth > window.innerWidth - edge) {
      x = event.clientX - previewWidth - offset;
    }

    if (y + previewHeight > window.innerHeight - edge) {
      y = window.innerHeight - previewHeight - edge;
    }

    pendingPosition.current = {
      x: Math.max(edge, x),
      y: Math.max(edge, y),
    };

    if (animationFrame.current === null) {
      animationFrame.current = requestAnimationFrame(() => {
        if (pendingPosition.current) {
          setPosition(pendingPosition.current);
        }

        animationFrame.current = null;
      });
    }
  }

  return (
    <section
      id="services"
      className="relative overflow-clip bg-[#F8F7F4] py-14 text-[#20201E] sm:py-24"
    >
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setActiveIndex(null)}
        className="relative"
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          {/* Editorial heading */}
          <div className="grid gap-9 pb-10 sm:gap-12 sm:pb-14 lg:grid-cols-12 lg:gap-8 lg:pt-10">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50 sm:text-xs">
                One connected system
              </p>

              <h2 className="mt-5 font-display text-[clamp(3.25rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] sm:mt-7">
                What we do
                <br />
                Best<span className="text-[#D5AC19]">.</span>
              </h2>

              <p className="mt-6 max-w-xs text-sm leading-relaxed text-black/60 sm:mt-8 sm:text-base">
                Content se leads tak — har service ek dusre se connected.
                Ek team, ek strategy, better results.
              </p>

              <div className="mt-5 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45 lg:flex">
                <span className="size-2 rounded-full bg-[#D5AC19]" />
                Strategy, design & technology
              </div>
            </div>

            {/* DESKTOP SERVICE LIST */}
            <div className="hidden lg:col-span-7 lg:block lg:pt-1">
              <div className="border-t border-black/20">
                {services.map((service, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onPointerEnter={(event) => {
                        if (event.pointerType !== "touch") {
                          setActiveIndex(index);
                        }
                      }}
                      onFocus={() => setActiveIndex(index)}
                      onBlur={() => setActiveIndex(null)}
                      className={`group flex items-start gap-4 border-b border-black/20 py-7 outline-none transition-colors duration-300 xl:py-8 ${
                        isActive
                          ? "text-[#8A6C05]"
                          : "text-[#20201E] hover:text-black/55"
                      } focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#65745B] motion-reduce:transition-none`}
                    >
                      <span className="pt-2 text-xs tabular-nums text-black/40">
                        {service.num}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[clamp(2rem,4.2vw,4.8rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] [overflow-wrap:anywhere]">
                          {service.title}
                        </span>

                        <span
                          className={`mt-3 block max-w-md text-sm leading-relaxed text-black/55 transition-opacity duration-300 ${
                            isActive
                              ? "opacity-100"
                              : "opacity-70 group-hover:opacity-100"
                          }`}
                        >
                          {service.description}
                        </span>
                      </span>

                      <span className="pt-1 text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-4 pt-5 text-[10px] uppercase tracking-wider text-black/50">
                <span>Hover to preview</span>
                <Link
                  href="/contact"
                  className="text-[#20201E] underline underline-offset-4"
                >
                  Discuss a project ↗
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE FLIP CARDS */}
          <div className="lg:hidden">
            <div className="mb-5 flex items-end justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-black/50">
                Explore our services
              </p>

              <p className="text-[10px] text-black/45">
                Tap to flip ↗
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {services.map((service, index) => {
                const isFlipped = flippedIndex === index;

                return (
                  <div
                    key={service.slug}
                    className="min-w-0 [perspective:1000px]"
                  >
                    <div
                      className={`relative aspect-[0.77] w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none ${
                        isFlipped ? "[transform:rotateY(180deg)]" : ""
                      }`}
                    >
                      {/* FRONT */}
                      <button
                        type="button"
                        aria-label={`Flip ${service.title} card`}
                        aria-pressed={isFlipped}
                        onClick={() =>
                          setFlippedIndex(isFlipped ? null : index)
                        }
                        className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-4 text-left shadow-[0_8px_30px_-22px_rgba(0,0,0,0.3)] [backface-visibility:hidden] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8A6C05] sm:p-5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-wider text-black/45">
                            {service.num}
                          </span>

                          <span className="grid size-8 place-items-center rounded-full bg-[#F7C928]/25 text-lg">
                            ↗
                          </span>
                        </div>

                        <div className="my-auto py-5">
                          <h3 className="font-display text-[clamp(1.15rem,4.8vw,2rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] [overflow-wrap:anywhere]">
                            {service.title}
                          </h3>

                          <p className="mt-3 text-[11px] leading-relaxed text-black/55 sm:text-xs">
                            {service.short}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-black/10 pt-3">
                          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-black/50">
                            Discover
                          </span>

                          <span className="h-1 w-10 rounded-full bg-[#F7C928]" />
                        </div>
                      </button>

                      {/* BACK */}
                      <div
                        className="absolute inset-0 overflow-hidden rounded-2xl bg-[#20201E] [transform:rotateY(180deg)] [backface-visibility:hidden]"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.02) 10%, rgba(15,15,15,0.82) 100%), url("${serviceImages[service.slug]}")`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                          <span className="font-mono text-[10px] text-white/80">
                            {service.num} / 04
                          </span>

                          <button
                            type="button"
                            aria-label={`Flip ${service.title} card back`}
                            onClick={() => setFlippedIndex(null)}
                            className="grid size-8 place-items-center rounded-full border border-white/40 bg-black/20 text-lg text-white backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                          >
                            ↻
                          </button>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                          <h3 className="font-display text-lg font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-2xl">
                            {service.title}
                          </h3>

                          <p className="mt-2 line-clamp-3 text-[10px] leading-relaxed text-white/80 sm:text-xs">
                            {service.description}
                          </p>

                          <Link
                            href={`/services/${service.slug}`}
                            className="mt-4 flex min-h-10 items-center justify-between gap-2 border-t border-white/35 pt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[10px]"
                          >
                            Explore service
                            <span aria-hidden="true" className="text-base">
                              ↗
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="mt-6 flex min-h-12 items-center justify-between border-y border-black/15 py-4 text-xs font-semibold"
            >
              <span>Have a project in mind?</span>
              <span>
                Let&apos;s talk <span aria-hidden="true">↗</span>
              </span>
            </Link>
          </div>
        </div>

        {/* DESKTOP FLOATING IMAGE PREVIEW */}
        <div
          aria-hidden="true"
          className={`pointer-events-none fixed z-[100] hidden overflow-hidden rounded-sm border border-white/60 bg-[#222] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:block ${
            activeService ? "visible" : "invisible"
          }`}
          style={{
            left: position.x,
            top: position.y,
            width: "min(360px, 80vw)",
            height: 250,
            opacity: activeService ? 1 : 0,
            transform: activeService
              ? "scale(1) rotate(-2deg)"
              : "scale(0.92) rotate(2deg)",
          }}
        >
          {activeService && (
            <div
              className="absolute inset-0 flex flex-col justify-between bg-[#20201E] bg-cover bg-center p-5 text-white"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.05), rgba(15,15,15,0.88)), url("${serviceImages[activeService.slug]}")`,
              }}
            >
              <div className="flex items-center justify-between border-b border-white/25 pb-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  What we do / {activeService.num}
                </span>

                <Icon
                  name={activeService.icon}
                  className="size-5 text-[#F7C928]"
                />
              </div>

              <div>
                <p className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.06em]">
                  {activeService.title}
                </p>

                <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/80">
                  {activeService.short}
                </p>
              </div>

              <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75">
                Explore service <span aria-hidden="true">↗</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
