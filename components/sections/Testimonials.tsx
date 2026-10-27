"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";


const stories = [
  {
    id: 1,
    title: "Dr.  Sharma's  story",
    name: "Partner story 01",
    video: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/sharma%20dental%20feedback.mp4",
  },
  {
    id: 2,
    title: "Tyre Center's story",
    name: "Partner story 02",
    video: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/tyre%20centre%20feedback.mp4",
  },
  {
    id: 3,
    title: "Balaji  & Balaji  Jawellers story",
    name: "Partner story 03",
    video: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/Balaji%20&%20Balaji%20Feedback.mov",
  },
  {
    id: 4,
    title: "The URS  story",
    name: "Partner story 04",
    video: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/URS%20Feedback.mp4",
  },
  // {
  //   id: 5,
  //   title: "Partner story",
  //   name: "Partner story 05",
  //   poster: "/videos/testimonial-1-poster.jpg",
  //   video: "/videos/testimonial-1.mp4",
  // },
  // {
  //   id: 6,
  //   title: "Partner story",
  //   name: "Partner story 06",
  //   poster: "/videos/testimonial-2-poster.jpg",
  //   video: "/videos/testimonial-2.mp4",
  // },
  // {
  //   id: 7,
  //   title: "Partner story",
  //   name: "Partner story 07",
  //   poster: "/videos/testimonial-1-poster.jpg",
  //   video: "/videos/testimonial-1.mp4",
  // },
  // {
  //   id: 8,
  //   title: "Partner story",
  //   name: "Partner story 08",
  //   poster: "/videos/testimonial-2-poster.jpg",
  //   video: "/videos/testimonial-2.mp4",
  // },
];


export function Testimonials() {
  const [activeStory, setActiveStory] =
    useState<(typeof stories)[number] | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeStory) return;

    carouselRef.current
      ?.querySelectorAll<HTMLVideoElement>("[data-story-preview]")
      .forEach((video) => video.pause());
  }, [activeStory]);

  const playPreview = (event: MouseEvent<HTMLButtonElement>) => {
    if (
      activeStory ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const carousel = carouselRef.current;
    const preview = event.currentTarget.querySelector<HTMLVideoElement>(
      "[data-story-preview]",
    );
    if (!carousel || !preview) return;

    carousel
      .querySelectorAll<HTMLVideoElement>("[data-story-preview]")
      .forEach((video) => {
        if (video !== preview) video.pause();
      });

    preview.play().catch((error: unknown) => {
      if (
        error instanceof DOMException &&
        (error.name === "AbortError" || error.name === "NotAllowedError")
      ) {
        return;
      }

      console.error("Unable to autoplay testimonial preview.", error);
    });
  };

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
                onMouseEnter={playPreview}
                onMouseLeave={(event) =>
                  event.currentTarget
                    .querySelector<HTMLVideoElement>("[data-story-preview]")
                    ?.pause()
                }
                onClick={() => setActiveStory(story)}
                aria-label={`Play ${story.name} video`}
                className="group relative aspect-[3/4] w-[76vw] max-w-[300px] flex-none snap-start overflow-hidden rounded-2xl bg-neutral-900 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-400 motion-reduce:transition-none sm:w-[42vw] sm:max-w-[320px] lg:w-[calc((100%-60px)/4)] lg:max-w-none"
              >
                <video
                  data-story-preview
                  src={story.video}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  tabIndex={-1}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
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
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-[#171717]/10 bg-[#F7C928] sm:mt-16 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="px-6 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#171717]">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 bg-[#171717]"
              />
              Let’s work together
            </p>

            <h3 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#171717] sm:text-5xl lg:text-6xl">
              Your story could be next.
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#171717]/80 sm:text-base">
              Let’s talk about your goals and find the right way to grow your
              brand together.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 border-t border-[#171717]/15 px-6 py-8 sm:px-10 sm:py-9 lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
            <p className="text-lg font-semibold tracking-tight text-[#171717]">
              Have a project in mind?
            </p>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7C928]"
            >
              Talk to our team
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M4.167 10h11.666m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/services"
              className="link-underline text-sm font-semibold text-[#171717]"
            >
              Explore our services
            </Link>

            <p className="text-xs leading-5 text-[#171717]/75">
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
              controls
              autoPlay
              muted
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