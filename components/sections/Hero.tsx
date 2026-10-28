
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button, AuditButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { whatsappLink, cn } from "@/lib/utils";
import {
  heroHeading,
  heroSub,
  heroTrust,
  site,
} from "@/content/site";

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
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const videoFrame = videoFrameRef.current;
    if (
      !video ||
      !videoFrame ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cancelled = false;
    let cleanup = () => {};

    const initializeMotion = async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap");
      if (cancelled) return;
      let getProgress = () => 0;

      const onMetadata = () => {
        syncVideo();
        ScrollTrigger.refresh();
      };

      const syncVideo = () => {
        if (
          !video.duration ||
          !Number.isFinite(video.duration) ||
          video.readyState < 2
        ) {
          return;
        }

        const targetTime = getProgress() * video.duration;
        if (!video.seeking && Math.abs(video.currentTime - targetTime) > 0.06) {
          video.currentTime = targetTime;
        }
      };

      video.pause();
      const context = gsap.context(() => {
        const scrollAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: videoFrame,
            start: "top 90%",
            end: "bottom 15%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        getProgress = () => scrollAnimation.progress();

        scrollAnimation.fromTo(
          videoFrame,
          { borderRadius: "1.5rem" },
          {
            borderRadius: "0.7rem",
            ease: "none",
          },
          0
        );
        scrollAnimation.eventCallback("onUpdate", syncVideo);
        video.addEventListener("loadedmetadata", onMetadata);
        video.preload = "metadata";
        video.load();
      }, ref);

      cleanup = () => {
        video.removeEventListener("loadedmetadata", onMetadata);
        context.revert();
      };
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        void initializeMotion().catch((error: unknown) => {
          console.error("Unable to load hero motion", error);
        });
      },
      { rootMargin: "0px 0px -30% 0px" }
    );

    observer.observe(videoFrame);
    return () => {
      cancelled = true;
      observer.disconnect();
      cleanup();
    };
  }, []);

  return (

<section
  id="top"
  ref={ref}
  className={cn(
    "relative isolate overflow-hidden",
    "bg-[#F7F6F2]",
    "pb-12 pt-28",
    "sm:pb-16 sm:pt-36",
    "lg:pb-20 lg:pt-40",
  )}
>
  {/* Premium yellow background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <div
      className={cn(
        "absolute inset-x-0 top-0 h-[760px]",
        "bg-[radial-gradient(ellipse_at_12%_18%,rgba(247,201,40,0.24),transparent_42%),radial-gradient(ellipse_at_88%_16%,rgba(247,201,40,0.16),transparent_43%),radial-gradient(ellipse_at_50%_65%,rgba(255,249,229,0.78),transparent_48%)]",
      )}
    />

    <div className="absolute inset-x-0 top-0 h-[760px] bg-gradient-to-b from-white/20 via-[#F7F6F2]/35 to-[#F7F6F2]" />

    <div className="absolute -top-36 left-[35%] size-[28rem] rounded-full bg-[#F7C928]/20 blur-[100px] sm:size-[42rem]" />

    <div className="absolute -right-32 top-24 size-80 rounded-full bg-[#8A6C05]/10 blur-[100px]" />

    <div className="absolute inset-x-0 top-[29rem] h-px bg-[#171717]/[0.06]" />
  </div>

  <Container className="relative">
    {/* Hero intro */}
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
      {/* Badge */}
   <div
  data-hero-badge
>
  <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-sm">
    <span className="size-1.5 rounded-full bg-[#8A6C05]" />
    {site.heroBadge.label}
  </p>
</div>

      {/* Main heading */}
      <Title />

      {/* Subtitle */}
      <p
        data-hero-subtitle
        className={cn(
          "mt-6 max-w-2xl",
          "text-base leading-7 text-[#55524C]",
          "sm:mt-7 sm:text-lg sm:leading-8",
          "lg:text-xl lg:leading-9",
        )}
      >
        {heroSub}
      </p>

      {/* Primary actions */}
      <div
        data-hero-actions
        className={cn(
          "mt-8 flex w-full flex-col items-stretch justify-center gap-3",
          "sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:gap-4",
        )}
      >
        <AuditButton size="lg">
          {site.cta.audit}
        </AuditButton>

        <Button
          href={whatsappLink(
            site.phone.primary.number,
            site.whatsapp.ctaText,
          )}
          variant="outline"
          size="lg"
          className={cn(
            "group border-[#8A6C05]/25",
            "bg-white/75 text-[#171717]",
            "shadow-[0_5px_20px_-12px_rgba(23,23,23,0.25)]",
            "transition-all duration-300",
            "hover:border-[#8A6C05]/50 hover:bg-[#FFF9E5]",
          )}
        >
          <Icon
            name="whatsapp"
            className="mr-2 size-5 text-[#8A6C05] transition-transform duration-300 group-hover:scale-110"
          />
          {site.cta.whatsapp}
        </Button>
      </div>

      {/* Trust indicators */}
      <div
        data-hero-trust
        className={cn(
          "mt-8 flex max-w-3xl flex-wrap items-center justify-center",
          "gap-x-3 gap-y-3",
          "sm:mt-9 sm:gap-x-4 sm:gap-y-4",
        )}
      >
        {heroTrust.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-2.5",
              "rounded-full border border-[#8A6C05]/10",
              "bg-white/55 py-2 pl-2 pr-3",
              "text-xs font-medium text-[#55524C]",
              "transition-colors duration-300",
              "hover:border-[#8A6C05]/25 hover:bg-white/90",
              "sm:text-sm",
            )}
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#8A6C05]/15 bg-[#FFF9E5]">
              <Icon
                name={item.icon}
                className="size-3.5 text-[#8A6C05]"
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
      className={cn(
        "relative mx-auto mt-12 w-full max-w-[1360px]",
        "sm:mt-16 lg:mt-[4.5rem]",
      )}
    >
      <div
        className={cn(
          "overflow-hidden rounded-[1.4rem]",
          "border border-white/80 bg-[#171717] p-1.5",
          "shadow-[0_35px_100px_-35px_rgba(23,23,23,0.30)]",
          "sm:rounded-[1.9rem] sm:p-2",
        )}
      >
        <div
          ref={videoFrameRef}
          className={cn(
            "relative aspect-[4/3] overflow-hidden rounded-[1rem]",
            "bg-[#171717]",
            "sm:aspect-[16/9] sm:rounded-[1.5rem]",
            "lg:aspect-[2.05/1]",
          )}
        >
          <Image
            src="/videos/hero-poster.jpg"
            alt=""
            fill
            preload
            unoptimized
            sizes="(max-width: 640px) 100vw, 95vw"
            className="object-cover"
          />
          <video
          ref={videoRef}
          src="https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/freekit%20media%20video.mp4"
            poster="/videos/hero-poster.jpg"
            muted
            playsInline
            preload="none"
            disablePictureInPicture
            tabIndex={-1}
            aria-hidden="true"
            onLoadedData={() => setVideoReady(true)}
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-500",
              videoReady ? "opacity-100" : "opacity-0",
            )}
            style={{ height: "100%" }}
          />

          {/* Video overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/15 to-[#171717]/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(247,201,40,0.12),transparent_50%)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
          />

          {/* Video content */}
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0",
              "flex flex-wrap items-end justify-between gap-5",
              "p-5 text-white sm:p-8 lg:p-10",
            )}
          >
            <div className="max-w-xl">
              <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65 sm:text-[10px]">
                <span className="size-1.5 rounded-full bg-[#F7C928]" />
                Built to make brands move
              </p>

              <p className="font-display mt-3 text-2xl font-semibold leading-[1.08] tracking-[-0.045em] sm:mt-4 sm:text-4xl lg:text-5xl">
                Attention is earned.
                <br />
                <span className="text-[#FBE17D]">
                  Growth is engineered.
                </span>
              </p>
            </div>

            <a
              href="#contact"
              className={cn(
                "pointer-events-auto inline-flex items-center gap-2.5",
                "rounded-full border border-white/20",
                "bg-white/10 px-4 py-3",
                "text-xs font-semibold text-white",
                "backdrop-blur-xl transition-all duration-300",
                "hover:border-[#F7C928]/60 hover:bg-[#8A6C05]/25",
                "sm:text-sm",
              )}
            >
              Let’s talk
              <Icon name="arrowRight" className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Showreel footer */}
      <div
        className={cn(
          "mt-4 flex flex-wrap items-center justify-between",
          "gap-3 px-1 sm:mt-5",
          "text-[10px] uppercase tracking-[0.13em]",
          "text-[#77766D] sm:text-xs",
        )}
      >
        <span>Made with intent in Chhattisgarh</span>

        <a
          href="#proof"
          className={cn(
            "group inline-flex items-center gap-2",
            "font-semibold text-[#55524C]",
            "transition-colors duration-300 hover:text-[#8A6C05]",
          )}
        >
          Explore our work
          <Icon
            name="arrowRight"
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  </Container>
</section>

  );
}
