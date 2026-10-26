"use client";

import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { proof } from "@/content/page-sections";
import { useReveal } from "@/lib/use-reveal";

export function ProofSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="overflow-hidden bg-[#F8F7FC] py-16 text-[#29243A] sm:py-20 lg:py-28"
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#E9E2F3] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9673D8]">
            Results &amp; client stories
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
            {proof.headline}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#746C83] sm:mt-5 sm:text-base sm:leading-8">
            {proof.sub}
          </p>
        </div>

        {/* Results and testimonial: swipe on mobile, grid on desktop */}
        <div
          aria-label="Results and client testimonial"
          className="mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14 sm:mx-0 sm:px-0 lg:mt-20 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0"
        >
          {/* Result card */}
          <article className="flex min-h-[300px] w-[88%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-[#E9E2F3] bg-white p-6 sm:min-h-[350px] sm:p-8 lg:w-auto lg:p-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9673D8]">
                {proof.result.tag}
              </span>

              <h3 className="mt-6 break-words text-3xl font-semibold tracking-tight text-[#29243A] sm:text-4xl lg:text-5xl">
                {proof.result.value}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#746C83] sm:text-base sm:leading-8">
                {proof.result.line}
              </p>
            </div>

            <div className="mt-8 border-t border-[#EEE9F5] pt-5">
              <p className="text-sm font-medium text-[#9673D8]">
                Focused on real business outcomes
              </p>
            </div>
          </article>

          {/* Client testimonial */}
          <article className="flex min-h-[300px] w-[88%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-[#E9E2F3] bg-[#F1ECF9] p-6 sm:min-h-[350px] sm:p-8 lg:w-auto lg:p-10">
            <div>
              <div
                className="flex gap-1 text-lg text-[#9673D8]"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="mt-6 text-xl font-medium leading-relaxed tracking-tight sm:mt-8 sm:text-2xl">
                “{proof.testimonial.quote}”
              </blockquote>
            </div>

            <div className="mt-8 border-t border-[#DDD2EE] pt-5">
              <p className="font-semibold text-[#29243A]">
                {proof.testimonial.by}
              </p>

              <p className="mt-1 text-sm text-[#746C83]">
                {proof.testimonial.role}
              </p>
            </div>
          </article>
        </div>

        <p className="mt-2 text-xs text-[#91899F] lg:hidden">
          Swipe to see more <span aria-hidden="true">→</span>
        </p>

        {/* Video testimonials */}
        <div className="mt-14 sm:mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9673D8]">
              Client experiences
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Real stories. Real experiences.
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#746C83] sm:text-base">
              Hear directly from the people we work with.
            </p>
          </div>

          <div
            aria-label="Video testimonials"
            className="mt-6 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {proof.videoTestimonials.map((video) => (
              <article
                key={video.src}
                className="w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#E9E2F3] bg-white sm:w-auto"
              >
                <div className="overflow-hidden bg-[#EEE9F5]">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    aria-label={`${video.name} video`}
                    className="aspect-video w-full object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>

                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-[#29243A]">
                    {video.name}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#746C83]">
                    {video.role}
                  </p>

                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#9673D8]">
                    {video.city}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {proof.videoTestimonials.length > 0 && (
            <p className="mt-2 text-xs text-[#91899F] sm:hidden">
              Swipe to explore videos <span aria-hidden="true">→</span>
            </p>
          )}
        </div>

        {/* Industries served */}
        <div className="mt-14 border-t border-[#E9E2F3] pt-7 sm:mt-20 sm:pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9673D8]">
            Industries we serve
          </p>

          <p className="mt-4 text-sm leading-7 text-[#746C83] sm:text-base sm:leading-8">
            {proof.industriesNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
