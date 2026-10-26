"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const stories = [
  {
    id: 1,
    title: "Partner story",
    name: "Partner story 01",
    poster: "/videos/testimonial-1-poster.jpg",
    video: "/videos/testimonial-1.mp4",
  },
  {
    id: 2,
    title: "Partner story",
    name: "Partner story 02",
    poster: "/videos/testimonial-2-poster.jpg",
    video: "/videos/testimonial-2.mp4",
  },
  {
    id: 3,
    title: "Partner story",
    name: "Partner story 03",
    poster: "/videos/testimonial-1-poster.jpg",
    video: "/videos/testimonial-1.mp4",
  },
  {
    id: 4,
    title: "Partner story",
    name: "Partner story 04",
    poster: "/videos/testimonial-2-poster.jpg",
    video: "/videos/testimonial-2.mp4",
  },
  {
    id: 5,
    title: "Partner story",
    name: "Partner story 05",
    poster: "/videos/testimonial-1-poster.jpg",
    video: "/videos/testimonial-1.mp4",
  },
  {
    id: 6,
    title: "Partner story",
    name: "Partner story 06",
    poster: "/videos/testimonial-2-poster.jpg",
    video: "/videos/testimonial-2.mp4",
  },
  {
    id: 7,
    title: "Partner story",
    name: "Partner story 07",
    poster: "/videos/testimonial-1-poster.jpg",
    video: "/videos/testimonial-1.mp4",
  },
  {
    id: 8,
    title: "Partner story",
    name: "Partner story 08",
    poster: "/videos/testimonial-2-poster.jpg",
    video: "/videos/testimonial-2.mp4",
  },
];


export function Testimonials() {
  const [activeStory, setActiveStory] =
    useState<(typeof stories)[number] | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-story-card]");
    if (!card) return;

    const styles = window.getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!activeStory) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveStory(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), video[controls]',
        ),
      ).filter((element) => element.getClientRects().length > 0);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (
        event.shiftKey &&
        (document.activeElement === first ||
          !dialogRef.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last ||
          !dialogRef.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);

      if (
        previouslyFocused instanceof HTMLElement &&
        document.body.contains(previouslyFocused)
      ) {
        previouslyFocused.focus();
      }
    };
  }, [activeStory]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white px-5 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-9 text-center sm:mb-12 lg:mb-16">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 sm:mb-5 sm:text-sm">
            Customer Stories
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight tracking-[-0.045em] text-neutral-900 sm:text-5xl lg:text-7xl">
            Don’t take{" "}
            <span className="font-serif font-normal italic">
              our word
            </span>{" "}
            for it.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-neutral-600 sm:mt-5 sm:text-base sm:leading-7">
            Hear directly from our partners about the work we do together.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-7xl">
          {/* Previous button */}
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Previous partner stories"
            className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-lg transition hover:scale-105 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 md:flex lg:-left-5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            aria-label="Customer video stories"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 lg:gap-5"
          >
            {stories.map((story) => (
              <button
                key={story.id}
                data-story-card
                type="button"
                onClick={() => setActiveStory(story)}
                aria-label={`Play ${story.name} video`}
                className="group relative aspect-[3/4] w-[76vw] max-w-[300px] flex-none snap-start overflow-hidden rounded-2xl bg-neutral-900 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-400 motion-reduce:transition-none sm:w-[42vw] sm:max-w-[320px] lg:w-[calc((100%-60px)/4)] lg:max-w-none"
              >
                <Image
                  src={story.poster}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 76vw, (max-width: 1023px) 42vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/45" />

                {/* Story badge */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-md sm:left-4 sm:top-4 sm:text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r=".8"
                      fill="currentColor"
                    />
                  </svg>
                  {story.title}
                </div>

                {/* Play button */}
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-neutral-100 sm:h-16 sm:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                  >
                    <path d="M7 4.8v14.4L19 12 7 4.8Z" />
                  </svg>
                </span>

                <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white opacity-100 sm:p-5 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                  Watch story <span aria-hidden="true">↗</span>
                </span>
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Next partner stories"
            className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-lg transition hover:scale-105 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 md:flex lg:-right-5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <p className="mt-1 text-center text-xs text-neutral-500 sm:hidden">
            Swipe to explore <span aria-hidden="true">→</span>
          </p>
        </div>

        {/* Call to Action */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-neutral-950 px-6 py-10 text-center sm:mt-16 sm:px-10 sm:py-14 lg:mt-20">
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/[0.06] blur-3xl"
          />

          <div className="relative z-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-sm">
              Let’s Work Together
            </p>

            <h3 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to create something{" "}
              <span className="font-serif font-normal italic text-neutral-300">
                amazing?
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
              Your story could be next. Let’s talk about your goals and find
              the right way to grow your brand together.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:w-auto"
              >
                Let’s Talk About Your Project
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
              >
                Explore Our Services
              </a>
            </div>

            <p className="mt-5 text-xs text-neutral-500">
              No pressure. Just a conversation about your next big idea.
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md motion-reduce:backdrop-blur-none sm:p-6"
          onClick={() => setActiveStory(null)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={activeStory.name}
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveStory(null)}
              aria-label="Close video"
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none sm:right-3 sm:top-3"
            >
              ×
            </button>

            <video
              key={activeStory.id}
              src={activeStory.video}
              poster={activeStory.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={activeStory.name}
              className="block max-h-[85dvh] min-h-[200px] w-full bg-black object-contain sm:min-h-[300px]"
            >
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;