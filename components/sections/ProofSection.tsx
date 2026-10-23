"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { proof } from "@/content/page-sections";
import { proofStats } from "@/content/site";
import { featuredPartners, partners } from "@/content/partners";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";
import type { IconName } from "@/components/ui/Icon";

type VideoTestimonial = (typeof proof.videoTestimonials)[number];

function VideoTestimonialCard({ video }: { video: VideoTestimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    videoRef.current?.play().catch(() => {});
  };
  const rewind = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <figure
      tabIndex={0}
      aria-label={video.name}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-grey-200 bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      onMouseEnter={start}
      onMouseLeave={rewind}
      onFocus={start}
      onBlur={rewind}
      onClick={() => {
        if (videoRef.current?.paused) start();
        else rewind();
      }}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={cn(
          "size-full aspect-video object-cover transition-transform duration-700 ease-out",
          playing && "scale-105",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-6 transition-opacity duration-500",
          playing && "opacity-0",
        )}
      >
        <span className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-ink uppercase">
          Dummy
        </span>
      <span className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-brand text-ink shadow-[0_8px_24px_-8px_rgba(232,176,32,0.7)] transition-transform duration-500 group-hover:scale-110">
          <Icon name="play" className="ml-0.5 size-5" />
        </span>
        <p className="font-display text-lg font-semibold tracking-tight text-paper">
          {video.name}
        </p>
        <p className="mt-1 text-sm text-paper/70">
          {video.role} — {video.city}
        </p>
      </div>
    </figure>
  );
}

export function ProofSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const featured = featuredPartners(partners);
  return (
    <section id="proof" ref={ref} className="bg-mist py-24 sm:py-32">
      <Container>
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-grey-400 uppercase">
            Proof
          </p>
          <h2 className="font-display mt-4 text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
            {proof.headline}
          </h2>
          <p className="mt-5 text-lead leading-relaxed text-grey-600">
            {proof.sub}
          </p>
        </div>

        <div data-reveal-stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-grey-200 bg-white p-6"
            >
              <Icon name={stat.icon as IconName} className="size-5 text-brand-deep" />
              <p className="font-display mt-4 text-4xl font-bold tracking-tight text-ink">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-grey-600">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <figure className="rounded-3xl border border-grey-200 bg-white p-8 sm:p-10">
            <Icon name="star" className="size-6 text-brand" />
            <blockquote className="font-display mt-6 text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              “{proof.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-grey-600">
              — <span className="font-semibold text-ink">{proof.testimonial.by}</span>,{" "}
              {proof.testimonial.role}
            </figcaption>
          </figure>
          <div className="flex flex-col justify-between rounded-3xl bg-ink p-8 text-paper sm:p-10">
            <div>
              <span className="inline-flex items-center rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">
                {proof.result.tag}
              </span>
              <p className="font-display mt-5 text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                {proof.result.value}
              </p>
              <p className="mt-2 max-w-md text-lead leading-relaxed text-paper/80">
                {proof.result.line}
              </p>
            </div>
            <p className="mt-6 text-xs text-paper/50">
              Real result. Numbers monthly report mein hote hain — jhoot nahi
              karte.
            </p>
          </div>
        </div>

        <div data-reveal-stagger className="mt-4 grid gap-4 sm:grid-cols-2">
          {proof.videoTestimonials.map((video) => (
            <VideoTestimonialCard key={video.src} video={video} />
          ))}
        </div>

        <div data-reveal className="mt-4 flex flex-wrap items-center gap-3 rounded-3xl border border-grey-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-grey-400 uppercase">
            Industries
          </p>
          <p className="text-sm leading-relaxed text-grey-600">
            {proof.industriesNote.replace("Industries: ", "")}
          </p>
        </div>
        <div data-reveal className="mt-4 flex flex-wrap gap-2">
          {featured.map((partner) => (
            <Link
              key={partner.slug}
              href={`/partners/${partner.slug}`}
              className="rounded-full border border-grey-200 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-mist"
            >
              {partner.name}
              <span className="ml-2 text-xs font-normal text-grey-400">
                {partner.city}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
