
"use client";

import { useRef } from "react";
import { Button, AuditButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { gsap, useGSAP } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatsappLink, cn } from "@/lib/utils";
import {
  heroHeading,
  heroSub,
  heroTrust,
  site,
} from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

const heroSelectors = {
  badge: "[data-hero-badge]",
  title: "[data-hero-title]",
  subtitle: "[data-hero-subtitle]",
  actions: "[data-hero-actions]",
  trust: "[data-hero-trust]",
  card: "[data-hero-card]",
};

function Title() {
  return (
    <h1
      data-hero-title
      className={cn(
        "font-display mx-auto mt-8 max-w-5xl text-[clamp(3rem,8.3vw,7.4rem)]",
        "font-semibold leading-[0.94] tracking-[-0.075em] text-ink"
      )}
    >
      {heroHeading.map((part, i) => {
        if (typeof part === "string") {
          return <br key={i} />;
        }

        return (
          <span
            key={i}
            className={cn(
              "inline-block px-[0.07em] pb-[0.06em]",
              part.highlight &&
                "rounded-[0.14em] bg-brand text-ink"
            )}
          >
            {part.text}{" "}
          </span>
        );
      })}
    </h1>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoFrameRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      const videoFrame = videoFrameRef.current;
      const mm = gsap.matchMedia();

      mm.add(
        {
          motionOK: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const targets = Object.values(heroSelectors).join(",");

          if (context.conditions?.reduce) {
            video?.pause();
            gsap.set(targets, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              clearProps: "filter",
            });
            return;
          }

          const intro = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          intro
            .fromTo(
              heroSelectors.badge,
              { y: 12, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.55 },
              0
            )
            .fromTo(
              `${heroSelectors.title} span`,
              { y: 28, autoAlpha: 0, rotateX: -8 },
              {
                y: 0,
                autoAlpha: 1,
                rotateX: 0,
                duration: 0.75,
                stagger: 0.075,
                clearProps: "transform",
              },
              0.1
            )
            .fromTo(
              heroSelectors.subtitle,
              { y: 16, autoAlpha: 0, filter: "blur(4px)" },
              {
                y: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 0.65,
              },
              0.3
            )
            .fromTo(
              heroSelectors.actions,
              { y: 14, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.55 },
              0.42
            )
            .fromTo(
              heroSelectors.trust,
              { y: 10, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.5 },
              0.52
            )
            .fromTo(
              heroSelectors.card,
              { y: 30, autoAlpha: 0, scale: 0.975 },
              { y: 0, autoAlpha: 1, scale: 1, duration: 0.9 },
              0.55
            );

          if (!video || !videoFrame) return;

          // Scroll-driven cinematic video reveal.
          // Playback stays paused so scrolling controls the frame.
          video.pause();

          const scrollAnimation = gsap.timeline({
            scrollTrigger: {
              trigger: videoFrame,
              start: "top 90%",
              end: "bottom 15%",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });

          scrollAnimation
            .fromTo(
              videoFrame,
              { borderRadius: "1.5rem" },
              {
                borderRadius: "0.7rem",
                ease: "none",
              },
              0
            )
            .fromTo(
              video,
              { scale: 1.12 },
              { scale: 1, ease: "none" },
              0
            );

          const syncVideo = () => {
            if (
              !video.duration ||
              !Number.isFinite(video.duration) ||
              video.readyState < 2
            ) {
              return;
            }

            const targetTime =
              scrollAnimation.progress() * video.duration;

            if (Math.abs(video.currentTime - targetTime) > 0.06) {
              try {
                video.currentTime = targetTime;
              } catch {
                // The browser may still be seeking.
              }
            }
          };

          scrollAnimation.eventCallback("onUpdate", syncVideo);

          const onMetadata = () => {
            syncVideo();
            ScrollTrigger.refresh();
          };

          video.addEventListener("loadedmetadata", onMetadata);

          return () => {
            video.removeEventListener("loadedmetadata", onMetadata);
          };
        }
      );

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden bg-paper pt-28 pb-10 sm:pt-36 sm:pb-16 lg:pt-40"
    >
      {/* Soft, layered editorial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-[780px] bg-[radial-gradient(ellipse_at_12%_18%,rgba(231,173,238,0.48),transparent_42%),radial-gradient(ellipse_at_88%_16%,rgba(160,208,241,0.48),transparent_43%),radial-gradient(ellipse_at_50%_65%,rgba(255,224,139,0.42),transparent_48%)]" />
        <div className="absolute inset-x-0 top-0 h-[780px] bg-gradient-to-b from-white/10 via-white/15 to-paper" />
        <div className="absolute -top-36 left-[38%] size-[28rem] rounded-full bg-white/40 blur-[100px] sm:size-[42rem]" />
        <div className="absolute inset-x-0 top-[29rem] h-px bg-ink/[0.045]" />
      </div>

      <Container className="relative">
        {/* Intro */}
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div data-hero-badge className="opacity-0">
            <a
              href="#system"
              className="group inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-2 text-xs font-medium text-ink/75 shadow-[0_3px_18px_rgba(20,20,20,0.035)] backdrop-blur-md transition-all hover:border-ink/20 hover:bg-white sm:text-sm"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-50 motion-reduce:animate-none" />
                <span className="relative size-2 rounded-full bg-brand" />
              </span>
              {site.heroBadge.label}
              <Icon
                name="chevronRight"
                className="size-3.5 text-ink/40 transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <Title />

          <p
            data-hero-subtitle
            className="mt-6 max-w-2xl text-base leading-7 text-ink/65 opacity-0 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl"
          >
            {heroSub}
          </p>

          <div
            data-hero-actions
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 opacity-0 sm:w-auto sm:flex-row sm:items-center sm:gap-3"
          >
            <AuditButton size="lg">{site.cta.audit}</AuditButton>

            <Button
              href={whatsappLink(
                site.phone.primary.number,
                site.whatsapp.ctaText
              )}
              variant="outline"
              size="lg"
            >
              {site.cta.whatsapp}
            </Button>
          </div>

          <div
            data-hero-trust
            className="mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-3 opacity-0 sm:gap-x-7"
          >
            {heroTrust.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-xs font-medium text-ink/65 sm:text-sm"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/65">
                  <Icon
                    name={item.icon}
                    className="size-3.5 text-brand-deep"
                  />
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic showreel */}
        <div
          data-hero-card
          className="relative mx-auto mt-12 w-full max-w-[1360px] opacity-0 sm:mt-16 lg:mt-[4.5rem]"
        >
          <div className="relative">
            {/* Small editorial label above the video */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-ink/45 sm:text-xs">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-deep" />
                FreeKit Media / Showreel
              </span>
              <span>Strategy · Creative · Growth</span>
            </div>

            <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-ink shadow-[0_35px_100px_-35px_rgba(45,35,12,0.38)] sm:rounded-[1.75rem]">
              <div
                ref={videoFrameRef}
                className="relative aspect-[4/3] overflow-hidden bg-[#171510] sm:aspect-[16/9] lg:aspect-[2.05/1]"
              >
                <video
                  ref={videoRef}
                  src="/videos/hero.mp4"
                  poster="/videos/hero-poster.jpg"
                  muted
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute inset-0 size-full object-cover will-change-transform"
                />

                {/* Filmic overlays */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-5 p-5 text-white sm:p-8 lg:p-10">
                  <div className="max-w-xl">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65 sm:text-[10px]">
                      Built to make brands move
                    </p>
                    <p className="font-display mt-2 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                      Attention is earned.
                      <br />
                      <span className="text-white/65">Growth is engineered.</span>
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:text-sm"
                  >
                    Let’s talk
                    <Icon name="arrowRight" className="size-4" />
                  </a>
                </div>

                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md sm:left-6 sm:top-6 sm:text-[10px]">
                  <span className="size-1.5 rounded-full bg-brand" />
                  Brand film / 001
                </div>
              </div>
            </div>

            {/* Understated footer below the showreel */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 text-[10px] uppercase tracking-[0.13em] text-ink/45 sm:text-xs">
              <span>Made with intent in Chhattisgarh</span>
              <a
                href="#proof"
                className="group inline-flex items-center gap-2 font-semibold text-ink/65 transition-colors hover:text-ink"
              >
                Explore our work
                <Icon
                  name="arrowRight"
                  className="size-3.5 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
