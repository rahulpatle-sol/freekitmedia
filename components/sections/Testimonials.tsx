
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
];

export function Testimonials() {
  const [activeStory, setActiveStory] =
    useState<(typeof stories)[number] | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
          "button, video[controls]",
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
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
      className="relative overflow-hidden bg-white px-5 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 sm:text-sm">
            Customer Stories
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight tracking-[-0.045em] text-neutral-900 sm:text-5xl lg:text-7xl">
            Don’t take{" "}
            <span className="font-serif font-normal italic">
              our word
            </span>{" "}
            for it.
          </h2>
        </div>

        {/* Video cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <button
              key={story.id}
              type="button"
              onClick={() => setActiveStory(story)}
              aria-label={`Play ${story.name} video`}
              className="group relative aspect-[3/4.7] w-full overflow-hidden rounded-[1.65rem] bg-neutral-900 text-left shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-400 motion-reduce:transition-none"
            >
              {/* Poster image */}
              <Image
                src={story.poster}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/30" />

              {/* Customer story badge */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
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
              <span className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-neutral-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M7 4.8v14.4L19 12 7 4.8Z" />
                </svg>
              </span>

              {/* Bottom caption */}
              <span className="absolute inset-x-0 bottom-0 p-6 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Watch story <span aria-hidden="true">↗</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md motion-reduce:backdrop-blur-none sm:p-8"
          onClick={() => setActiveStory(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeStory.name}
            ref={dialogRef}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              ref={closeButtonRef}
              onClick={() => setActiveStory(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-black motion-reduce:transition-none"
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
              className="max-h-[85vh] w-full bg-black object-contain"
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
