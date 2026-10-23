"use client";

import { useEffect, useRef } from "react";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { gsap, useGSAP } from "@/lib/gsap";
import { heroHeading, site } from "@/data/site";
import { cn } from "@/lib/utils";

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
        "font-display mt-9 max-w-4xl text-[2.65rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink opacity-0 sm:text-6xl lg:text-7xl xl:text-[5.4rem]",
      )}
    >
      {heroHeading.map((part, i) => {
        if (typeof part === "string") return <br key={i} />;
        return (
          <span
            key={i}
            className={cn(
              "inline-block rounded-lg box-decoration-clone px-2.5",
              part.highlight && "bg-brand text-ink",
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

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motionOK: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            videoRef.current?.pause();
            gsap.set(Object.values(heroSelectors).join(","), {
              autoAlpha: 1,
              scale: 1,
              y: 0,
            });
            return;
          }
          const tl = gsap.timeline();

          tl.fromTo(
            heroSelectors.badge,
            { y: -12, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.6 },
            0.1,
          )
            .fromTo(
              heroSelectors.title,
              { y: 24, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8 },
              0.2,
            )
            .fromTo(
              heroSelectors.subtitle,
              { y: 20, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.7 },
              0.35,
            )
            .fromTo(
              heroSelectors.actions,
              { y: 16, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.6 },
              0.45,
            )
            .fromTo(
              heroSelectors.trust,
              { y: 12, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.6 },
              0.55,
            )
            .fromTo(
              heroSelectors.card,
              { y: 48, scale: 0.985, autoAlpha: 0 },
              { y: 0, scale: 1, autoAlpha: 1, duration: 1, ease: "power2.out" },
              0.45,
            );
        },
      );
      return () => mm.revert();
    },
    { scope: ref },
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onCanPlay = () => {
      video.play().catch(() => {});
    };
    if (video.readyState >= 3) onCanPlay();
    video.addEventListener("canplay", onCanPlay);
    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

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
            href={site.heroBadge.href}
            className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-ink/25 hover:text-ink sm:text-sm"
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
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
          Website, ads, social media, content — sab ek hi team se sambhalta hai.
          Aap dhande pe focus karo; growth har mahine report mein dikhegi.
        </p>
        <div
          data-hero-actions
          className="mt-10 flex flex-wrap items-center justify-center gap-3 opacity-0"
        >
          <WhatsAppButton text={site.whatsapp.ctaText} size="lg">
            Free strategy call book karo
          </WhatsAppButton>
          <Button href="#plans" variant="outline" size="lg">
            Pehle plans dekho
          </Button>
        </div>
        <div
          data-hero-trust
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-0"
        >
          {site.heroTrust.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs font-medium text-ink/70 sm:text-sm"
            >
              <Icon name={item.icon} className="size-4 text-brand-deep" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div
          data-hero-card
          className="relative mt-14 w-full max-w-6xl opacity-0 sm:mt-16"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink shadow-[0_40px_90px_-30px_rgba(29,23,0,0.4)]">
            <div className="relative aspect-[4/3] sm:aspect-[2/1] lg:aspect-[21/9]">
              <video
                ref={videoRef}
                data-hero-video
                src="/videos/hero.mp4"
                poster="/videos/hero-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                tabIndex={-1}
                className="absolute inset-0 size-full object-cover"
                aria-label="FreeKit Media ke clients ke ads ka reel, background mein warm orange glow ke saath"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
