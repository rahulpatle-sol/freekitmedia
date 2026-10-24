
"use client";

import Link from "next/link";
import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { proof } from "@/content/page-sections";
import { partners } from "@/content/partners";
import { site } from "@/content/site";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

type ReviewVideo = {
  id: string;
  client: string;
  role: string;
  description: string;
  video: string;
  poster: string;
  duration: string;
};

// Replace these paths with your real client review videos and thumbnails.
const reviewVideos: ReviewVideo[] = [
  {
    id: "01",
    client: "Client review",
    role: "Customer testimonial",
    description: "Watch the client share their experience.",
    video: "/videos/client-review-01.mp4",
    poster: "/images/reviews/client-review-01.webp",
    duration: "Video review",
  },
  {
    id: "02",
    client: "Project story",
    role: "Project walkthrough",
    description: "A closer look at the work and the outcome.",
    video: "/videos/client-review-02.mp4",
    poster: "/images/reviews/client-review-02.webp",
    duration: "Project story",
  },
  {
    id: "03",
    client: "Behind the results",
    role: "Client experience",
    description: "Hear the story behind the collaboration.",
    video: "/videos/client-review-03.mp4",
    poster: "/images/reviews/client-review-03.webp",
    duration: "Client story",
  },
];

export function ProofSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const caseStudySlug = "/case-studies/jewellery-6-lakh-one-day";

  return (
    <section
      id="proof"
      ref={ref}
      className="relative overflow-hidden bg-[#090909] py-20 text-[#F4F1EA] sm:py-28 lg:py-36"
    >
      <Container>
        {/* Editorial heading */}
        <div
          data-reveal
          className="grid gap-8 border-t border-white/15 pt-5 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#C4F06B]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:text-xs">
                Proof, not promises
              </p>
            </div>

            <h2 className="font-display mt-7 max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.075em]">
              {proof.headline}
              <span className="text-[#C4F06B]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/55 lg:col-span-4 lg:justify-self-end lg:pb-2">
            {proof.sub}
          </p>
        </div>

        {/* Result + testimonial */}
        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">
          <article
            data-reveal
            className="relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-7 sm:min-h-[400px] sm:p-10 lg:col-span-7"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-[#C4F06B]/[0.07] blur-3xl"
            />

            <div className="relative flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">
                <span className="size-1.5 rounded-full bg-[#C4F06B]" />
                {proof.result.tag}
              </span>
              <span className="font-mono text-xs text-white/35">01 / RESULT</span>
            </div>

            <div className="relative mt-16">
              <p className="font-display text-[clamp(3.5rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.075em] text-[#C4F06B]">
                {proof.result.value}
              </p>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                {proof.result.line}
              </p>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <p className="max-w-xs text-xs leading-relaxed text-white/40">
                Real results. Transparent reporting. No inflated claims.
              </p>

              <Link
                href={caseStudySlug}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#C4F06B]"
              >
                Read case study
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>

          <figure
            data-reveal
            className="flex min-h-[330px] flex-col justify-between rounded-2xl border border-white/10 bg-[#111111] p-7 sm:min-h-[400px] sm:p-10 lg:col-span-5"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Client words
              </p>
              <span className="font-mono text-xs text-white/30">02 / VOICE</span>
            </div>

            <blockquote className="mt-12">
              <span
                aria-hidden="true"
                className="font-display block text-7xl leading-[0.8] text-[#C4F06B]"
              >
                &ldquo;
              </span>

              <p className="font-display mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                {proof.testimonial.quote}
              </p>
            </blockquote>

            <figcaption className="mt-10 border-t border-white/10 pt-5">
              <p className="text-sm font-semibold text-white">
                {proof.testimonial.by}
              </p>
              <p className="mt-1 text-xs text-white/45">
                {proof.testimonial.role}
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Video-first review gallery */}
        <div className="mt-20 sm:mt-28">
          <div
            data-reveal
            className="mb-7 flex flex-wrap items-end justify-between gap-5"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C4F06B]">
                Real people. Real stories.
              </p>
              <h3 className="font-display mt-3 text-3xl font-bold tracking-[-0.05em] sm:text-5xl">
                Hear it from them<span className="text-[#C4F06B]">.</span>
              </h3>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-white/45">
              Hover to discover each story. Tap to play the video.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviewVideos.map((review) => (
              <article
                key={review.id}
                data-reveal
                className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-[#151515]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <video
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    poster={review.poster}
                    preload="none"
                    playsInline
                    muted
                    aria-label={`${review.client} video preview`}
                  >
                    <source src={review.video} type="video/mp4" />
                  </video>

                  {/* Dark gradient keeps overlay text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/15 transition-colors duration-500 group-hover:from-black/90 group-hover:via-black/45" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                      {review.duration}
                    </span>

                    <span className="font-mono text-xs text-white/60">
                      {review.id}
                    </span>
                  </div>

                  {/* Play link is an affordance; actual playback is handled below */}
                  <div className="absolute inset-0 grid place-items-center">
                    <button
                      type="button"
                      aria-label={`Play ${review.client}`}
                      onClick={(event) => {
                        const card = event.currentTarget.closest("article");
                        const video = card?.querySelector("video");
                        if (!video) return;

                        if (video.paused) {
                          void video.play().catch(() => {
                            // Playback may be blocked by browser settings.
                          });
                        } else {
                          video.pause();
                        }
                      }}
                      className="grid size-14 place-items-center rounded-full border border-white/60 bg-white/15 text-white shadow-xl backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-[#C4F06B] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4F06B] sm:size-16"
                    >
                      <Icon name="play" className="ml-0.5 size-5" />
                    </button>
                  </div>

                  {/* Text appears on hover; stays visible on touch devices */}
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 p-5 sm:p-6",
                      "translate-y-2 opacity-100 transition-all duration-500",
                      "sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100",
                      "sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100",
                    )}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C4F06B]">
                      {review.role}
                    </p>

                    <h4 className="font-display mt-2 text-2xl font-bold tracking-[-0.04em] text-white">
                      {review.client}
                    </h4>

                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/65">
                      {review.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Instagram CTA */}
        <div
          data-reveal
          className="mt-6 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#131313] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              See the work in action.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/45">
              Client interviews and project updates belong to real stories,
              not stock footage.
            </p>
          </div>

          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-[#C4F06B] px-5 text-sm font-bold text-[#111111] transition-transform hover:-translate-y-0.5 sm:self-auto"
          >
            <Icon name="instagram" className="size-4" />
            Explore Instagram
            <Icon name="arrowRight" className="size-4" />
          </a>
        </div>

        {/* Partner brands */}
        <div id="partners" className="mt-24 sm:mt-32">
          <div
            data-reveal
            className="flex flex-wrap items-end justify-between gap-5 border-t border-white/15 pt-5"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                The people behind the work
              </p>
              <h3 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.06em] sm:text-6xl">
                Partner brands<span className="text-[#C4F06B]">.</span>
              </h3>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-white/45">
              Every partnership has its own story.
            </p>
          </div>

          <ul className="mt-8">
            {partners.map((partner, index) => (
              <li key={partner.slug} data-reveal>
                <Link
                  href={`/partners/${partner.slug}`}
                  className="group grid gap-3 border-t border-white/10 py-6 transition-colors hover:bg-white/[0.025] sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-6 sm:py-8"
                >
                  <span className="font-mono text-xs text-[#C4F06B]/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <span className="font-display inline-flex items-center gap-3 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                      {partner.name}
                      <span className="text-base text-[#C4F06B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </span>

                    <p className="mt-2 text-xs text-white/40">
                      {partner.industry} · {partner.city}
                    </p>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">
                      {partner.oneLine}
                    </p>
                  </div>

                  <span className="hidden text-xs uppercase tracking-[0.15em] text-white/35 transition-colors group-hover:text-[#C4F06B] sm:block">
                    Explore partner
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p data-reveal className="mt-6 text-xs leading-relaxed text-white/35">
            Industries served:{" "}
            {proof.industriesNote.replace("Industries: ", "")}
          </p>
        </div>
      </Container>
    </section>
  );
}
