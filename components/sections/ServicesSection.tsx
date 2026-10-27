
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/content/services";

type PreviewPosition = {
  x: number;
  y: number;
};

export function ServiceHoverPreview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [position, setPosition] = useState<PreviewPosition>({
    x: 0,
    y: 0,
  });
  const pendingPosition = useRef<PreviewPosition | null>(null);
  const animationFrame = useRef<number | null>(null);

  const activeService =
    activeIndex !== null ? services[activeIndex] : null;

  useEffect(
    () => () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    },
    [],
  );

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    // Avoid cursor-following on touch devices.
    if (event.pointerType === "touch") return;

    const previewWidth = Math.min(360, window.innerWidth * 0.8);
    const previewHeight = 250;
    const offset = 28;
    const edge = 16;

    let x = event.clientX + offset;
    let y = event.clientY + offset;

    // Keep the floating preview inside the viewport.
    if (x + previewWidth > window.innerWidth - edge) {
      x = event.clientX - previewWidth - offset;
    }

    if (y + previewHeight > window.innerHeight - edge) {
      y = window.innerHeight - previewHeight - edge;
    }

    x = Math.max(edge, x);
    y = Math.max(edge, y);

    pendingPosition.current = { x, y };
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
      className="relative overflow-clip bg-[#F8F7F4] py-16 text-[#20201E] sm:py-24"
    >
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setActiveIndex(null)}
        className="relative"
      >
        {/* Editorial header */}
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          {/* <div className="flex items-center justify-between gap-4 border-t border-black/20 py-4 text-[9px] font-semibold uppercase tracking-[0.14em] sm:text-[11px]">

            <span className="hidden sm:block">
              Strategy, design & technology
            </span>
            <span>Services / 0{services.length}</span>
          </div> */}

          {/* Main typography layout */}
          <div className="grid gap-12 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50 sm:text-xs">
                One connected system
              </p>

              <h2 className="mt-7 font-display text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.79] tracking-[-0.075em]">
                What we do
                <br />
                Best
              </h2>

              <p className="mt-8 max-w-xs text-sm leading-relaxed text-black/55 sm:text-base">
             Content se leads taq har service ek dusre se connected
              </p>
            </div>

            <div className="lg:col-span-7 lg:pt-1">
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
                      className={`group flex items-start gap-3 border-b border-black/20 py-6 outline-none transition-colors duration-300 sm:py-8 ${
                        isActive
                          ? "text-[#91856A]"
                          : "text-[#20201E] hover:text-black/55"
                      } focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#65745B] motion-reduce:transition-none`}
                    >
                      <span className="pt-2 text-[10px] tabular-nums text-black/45 sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[clamp(2.25rem,5.5vw,5.7rem)] font-black uppercase leading-[0.84] tracking-[-0.065em] [overflow-wrap:anywhere]">
                          {service.title}
                        </span>

                        <span
                          className={`mt-3 block max-w-md text-xs leading-relaxed text-black/55 transition-opacity duration-300 sm:text-sm ${
                            isActive
                              ? "opacity-100"
                              : "opacity-70 sm:opacity-0 sm:group-hover:opacity-100"
                          }`}
                        >
                          {service.description}
                        </span>
                      </span>

                      <span className="pt-1 text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:text-2xl">
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-4 pt-5 text-[10px] uppercase tracking-wider text-black/50">
                <span>Hover to explore</span>
                <Link
                  href="/contact"
                  className="text-[#20201E] underline underline-offset-4"
                >
                  Discuss a project ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cursor-following floating preview */}
        <div
          aria-hidden="true"
          className={`pointer-events-none fixed z-[100] hidden overflow-hidden border border-white/60 bg-[#222] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-[opacity,transform,left,top] duration-300 ease-out motion-reduce:transition-none md:block ${
            activeService
              ? "visible"
              : "invisible"
          }`}
          style={{
            left: position.x,
            top: position.y,
            width: "min(360px, 80vw)",
            height: 250,
            opacity: activeService ? 1 : 0,
            transform: activeService
              ? "scale(1) rotate(-2deg)"
              : "scale(0.88) rotate(2deg)",
          }}
        >
          {activeService && (
            <div className="absolute inset-0 flex flex-col justify-between bg-paper p-5 text-ink">
              <div className="flex items-center justify-between border-b border-ink/15 pb-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                  What we do / {String((activeIndex ?? 0) + 1).padStart(2, "0")}
                </span>
                <Icon name={activeService.icon} className="size-5 text-brand-deep" />
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.06em]">
                  {activeService.title}
                </p>
                <p className="mt-3 max-w-xs text-xs leading-relaxed text-ink/60">
                  {activeService.short}
                </p>
              </div>
              <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                Explore service <span aria-hidden="true">↗</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
