
"use client";
import { FaWhatsapp } from "react-icons/fa";
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
  className={cn(
    "relative isolate overflow-hidden",
    "bg-[#F8F7FC]",
    "pb-12 pt-28",
    "sm:pb-16 sm:pt-36",
    "lg:pb-20 lg:pt-40",
  )}
>
  {/* Premium lavender background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <div
      className={cn(
        "absolute inset-x-0 top-0 h-[760px]",
        "bg-[radial-gradient(ellipse_at_12%_18%,rgba(196,181,253,0.36),transparent_42%),radial-gradient(ellipse_at_88%_16%,rgba(150,115,216,0.20),transparent_43%),radial-gradient(ellipse_at_50%_65%,rgba(237,229,250,0.78),transparent_48%)]",
      )}
    />

    <div className="absolute inset-x-0 top-0 h-[760px] bg-gradient-to-b from-white/20 via-[#F8F7FC]/35 to-[#F8F7FC]" />

    <div className="absolute -top-36 left-[35%] size-[28rem] rounded-full bg-[#C4B5FD]/20 blur-[100px] sm:size-[42rem]" />

    <div className="absolute -right-32 top-24 size-80 rounded-full bg-[#9673D8]/10 blur-[100px]" />

    <div className="absolute inset-x-0 top-[29rem] h-px bg-[#302644]/[0.06]" />
  </div>

  <Container className="relative">
    {/* Hero intro */}
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
      {/* Badge */}
   <div
  data-hero-badge
  className="opacity-0"
>
  <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8060BB] sm:text-sm">
    <span className="size-1.5 rounded-full bg-[#9673D8]" />
    {site.heroBadge.label}
  </p>
</div>

      {/* Main heading */}
      <Title />

      {/* Subtitle */}
      <p
        data-hero-subtitle
        className={cn(
          "mt-6 max-w-2xl opacity-0",
          "text-base leading-7 text-[#716A80]",
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
          "opacity-0",
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
            "group border-[#9673D8]/25",
            "bg-white/75 text-[#302644]",
            "shadow-[0_5px_20px_-12px_rgba(48,38,68,0.25)]",
            "transition-all duration-300",
            "hover:border-[#9673D8]/50 hover:bg-[#EDE5FA]",
          )}
        >
          <FaWhatsapp
            className="mr-2 size-5 shrink-0 text-[#8060BB] transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          {site.cta.whatsapp}
        </Button>
      </div>

      {/* Trust indicators */}
      <div
        data-hero-trust
        className={cn(
          "mt-8 flex max-w-3xl flex-wrap items-center justify-center",
          "gap-x-3 gap-y-3 opacity-0",
          "sm:mt-9 sm:gap-x-4 sm:gap-y-4",
        )}
      >
        {heroTrust.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-2.5",
              "rounded-full border border-[#9673D8]/10",
              "bg-white/55 py-2 pl-2 pr-3",
              "text-xs font-medium text-[#716A80]",
              "transition-colors duration-300",
              "hover:border-[#9673D8]/25 hover:bg-white/90",
              "sm:text-sm",
            )}
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#9673D8]/15 bg-[#EDE5FA]">
              <Icon
                name={item.icon}
                className="size-3.5 text-[#8060BB]"
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
        "relative mx-auto mt-12 w-full max-w-[1360px] opacity-0",
        "sm:mt-16 lg:mt-[4.5rem]",
      )}
    >
      <div
        className={cn(
          "overflow-hidden rounded-[1.4rem]",
          "border border-white/80 bg-[#302644] p-1.5",
          "shadow-[0_35px_100px_-35px_rgba(48,38,68,0.30)]",
          "sm:rounded-[1.9rem] sm:p-2",
        )}
      >
        <div
          ref={videoFrameRef}
          className={cn(
            "relative aspect-[4/3] overflow-hidden rounded-[1rem]",
            "bg-[#211B2E]",
            "sm:aspect-[16/9] sm:rounded-[1.5rem]",
            "lg:aspect-[2.05/1]",
          )}
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

          {/* Video overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171321]/90 via-[#171321]/15 to-[#171321]/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(196,181,253,0.14),transparent_50%)]"
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
                <span className="size-1.5 rounded-full bg-[#C4B5FD]" />
                Built to make brands move
              </p>

              <p className="font-display mt-3 text-2xl font-semibold leading-[1.08] tracking-[-0.045em] sm:mt-4 sm:text-4xl lg:text-5xl">
                Attention is earned.
                <br />
                <span className="text-[#D8CCF5]">
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
                "hover:border-[#C4B5FD]/60 hover:bg-[#9673D8]/25",
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
          "text-[#8C849C] sm:text-xs",
        )}
      >
        <span>Made with intent in Chhattisgarh</span>

        <a
          href="#proof"
          className={cn(
            "group inline-flex items-center gap-2",
            "font-semibold text-[#716A80]",
            "transition-colors duration-300 hover:text-[#8060BB]",
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
