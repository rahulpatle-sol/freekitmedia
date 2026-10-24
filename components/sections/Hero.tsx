
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
        "font-display mt-9 max-w-4xl text-[2.65rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
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
              "inline-block rounded-lg box-decoration-clone px-2.5",
              part.highlight && "bg-brand text-ink"
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
          if (context.conditions?.reduce) {
            video?.pause();

            gsap.set(
              Object.values(heroSelectors).join(","),
              { autoAlpha: 1, y: 0, scale: 1 }
            );

            return;
          }

          // INTRO: staggered text and smooth entrance
          const intro = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          intro
            .fromTo(
              heroSelectors.badge,
              { y: -14, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.6 },
              0
            )
            .fromTo(
              `${heroSelectors.title} span`,
              { y: 35, autoAlpha: 0, rotateX: -12 },
              {
                y: 0,
                autoAlpha: 1,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.1,
                clearProps: "transform",
              },
              0.15
            )
            .fromTo(
              heroSelectors.subtitle,
              { y: 24, autoAlpha: 0, filter: "blur(5px)" },
              {
                y: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 0.75,
              },
              0.45
            )
            .fromTo(
              heroSelectors.actions,
              { y: 20, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.65 },
              0.65
            )
            .fromTo(
              heroSelectors.trust,
              { y: 16, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.6 },
              0.8
            )
            .fromTo(
              heroSelectors.card,
              { y: 45, autoAlpha: 0, scale: 0.96 },
              { y: 0, autoAlpha: 1, scale: 1, duration: 1 },
              0.65
            );

          if (!video || !videoFrame) return;

          // VIDEO: cinematic zoom + scroll-controlled playback
          video.pause();

          gsap.set(video, {
            scale: 1,
            transformOrigin: "center center",
          });

          const scrollAnimation = gsap.timeline({
            scrollTrigger: {
              trigger: videoFrame,
              start: "top 85%",
              end: "bottom 15%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          scrollAnimation
            .to(
              videoFrame,
              {
                scale: 1.1,
                borderRadius: "0.5rem",
                ease: "none",
              },
              0
            )
            .to(
              video,
              {
                scale: 1.2,
                ease: "none",
              },
              0
            );

          // Scrub the actual MP4 timeline with page scrolling.
          const syncVideo = () => {
            if (
              !video.duration ||
              !Number.isFinite(video.duration) ||
              video.readyState < 2
            ) {
              return;
            }

            const progress = scrollAnimation.progress();
            const targetTime = progress * video.duration;

            if (Math.abs(video.currentTime - targetTime) > 0.04) {
              video.currentTime = targetTime;
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
      className="relative overflow-hidden bg-paper pt-32 pb-16 sm:pt-36 sm:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] [background:radial-gradient(48%_60%_at_50%_0%,rgba(250,245,230,0.9),transparent_72%)]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <div data-hero-badge className="opacity-0">
          <a
            href="#system"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-mist px-4 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-ink/25 hover:text-ink sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand"
            />
            <span>{site.heroBadge.label}</span>
            <Icon
              name="chevronRight"
              className="size-3.5 text-ink/40 transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <Title />

        <p
          data-hero-subtitle
          className="mt-7 max-w-2xl text-base leading-relaxed text-ink/70 opacity-0 sm:text-lg md:text-xl"
        >
          {heroSub}
        </p>

        <div
          data-hero-actions
          className="mt-10 flex flex-wrap items-center justify-center gap-3 opacity-0"
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
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-0"
        >
          {heroTrust.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs font-medium text-ink/70 sm:text-sm"
            >
              <Icon
                name={item.icon}
                className="size-4 text-brand-deep"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div
          data-hero-card
          className="relative mt-14 w-full max-w-6xl opacity-0 sm:mt-16"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink shadow-[0_40px_90px_-30px_rgba(29,23,0,0.4)]">
            <div
              ref={videoFrameRef}
              className="relative aspect-[4/3] overflow-hidden sm:aspect-[2/1] lg:aspect-[21/9]"
            >
              <video
                ref={videoRef}
                src="/videos/hero.mp4"
                poster="/videos/hero-poster.jpg"
                muted
                loop={false}
                playsInline
                preload="auto"
                disablePictureInPicture
                tabIndex={-1}
                aria-label="FreeKit Media client advertising reel"
                className="absolute inset-0 size-full object-cover will-change-transform"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
