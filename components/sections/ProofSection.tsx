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
      className="overflow-hidden bg-[#F7F6F2] py-16 text-[#171717] sm:py-20 lg:py-28"
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#EAE7DF] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6C05]">
            Results &amp; client stories
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
            {proof.headline}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#55524C] sm:mt-5 sm:text-base sm:leading-8">
            {proof.sub}
          </p>
        </div>

        {/* Results and testimonial: swipe on mobile, grid on desktop */}
        <div
          aria-label="Results and client testimonial"
          className="mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14 sm:mx-0 sm:gap-5 sm:px-0 lg:mt-16 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0"
        >
          {/* Result card */}
          <article className="flex min-h-[320px] w-[88%] shrink-0 snap-start flex-col rounded-2xl border border-[#EAE7DF] bg-white p-6 sm:min-h-[340px] sm:p-8 lg:min-h-[360px] lg:w-auto lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6C05]">
                <span aria-hidden="true" className="size-2 rounded-full bg-[#F7C928]" />
                {proof.result.tag}
              </span>

              <h3 className="mt-8 break-words font-display text-[clamp(2.75rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-0.065em] text-[#171717]">
                {proof.result.value}
              </h3>

              <p className="mt-5 max-w-md text-base leading-7 text-[#55524C] sm:text-lg sm:leading-8">
                {proof.result.line}
              </p>
            </div>

            <div className="mt-auto border-t border-[#EAE7DF] pt-5">
              <p className="text-xs font-medium text-[#77766D]">Result for</p>
              <p className="mt-1 font-semibold text-[#8A6C05]">
                {proof.result.by}
              </p>
            </div>
          </article>

          {/* Client testimonial */}
          <article className="flex min-h-[320px] w-[88%] shrink-0 snap-start flex-col rounded-2xl border border-[#EAE7DF] bg-[#FFF9E5] p-6 sm:min-h-[340px] sm:p-8 lg:min-h-[360px] lg:w-auto lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6C05]">
                <span aria-hidden="true" className="size-2 rounded-full bg-[#F7C928]" />
                Client story
              </span>

              <blockquote className="mt-8 max-w-xl font-display text-xl font-semibold leading-relaxed tracking-[-0.025em] text-[#171717] sm:text-2xl sm:leading-relaxed lg:text-[1.7rem]">
                “{proof.testimonial.quote}”
              </blockquote>
            </div>

            <div className="mt-auto border-t border-[#EAE7DF] pt-5">
              <p className="font-semibold text-[#171717]">
                {proof.testimonial.by}
              </p>

              <p className="mt-1 text-sm leading-6 text-[#55524C]">
                {proof.testimonial.role}
              </p>
            </div>
          </article>
        </div>

        <p className="mt-2 text-xs text-[#77766D] lg:hidden">
          Swipe to see more <span aria-hidden="true">→</span>
        </p>

        {/* Video testimonials */}
        <div className="mt-14 sm:mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6C05]">
              Client experiences
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Real stories. Real experiences.
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#55524C] sm:text-base">
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
                className="w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#EAE7DF] bg-white sm:w-auto"
              >
                <div className="overflow-hidden bg-[#EAE7DF]">
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
                  <h4 className="font-semibold text-[#171717]">
                    {video.name}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#55524C]">
                    {video.role}
                  </p>

                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#8A6C05]">
                    {video.city}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {proof.videoTestimonials.length > 0 && (
            <p className="mt-2 text-xs text-[#77766D] sm:hidden">
              Swipe to explore videos <span aria-hidden="true">→</span>
            </p>
          )}
        </div>

        {/* Industries served */}
        <div className="mt-14 border-t border-[#EAE7DF] pt-7 sm:mt-20 sm:pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6C05]">
            Industries we serve
          </p>

          <p className="mt-4 text-sm leading-7 text-[#55524C] sm:text-base sm:leading-8">
            {proof.industriesNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
