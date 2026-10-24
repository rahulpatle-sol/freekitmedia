
"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { process as processData } from "@/content/page-sections";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/gsap";

type RoadState = {
  path: string;
  width: number;
  height: number;
  progress: number;
  length: number;
};

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [road, setRoad] = useState<RoadState>({
    path: "",
    width: 0,
    height: 0,
    progress: 0,
    length: 0,
  });

  useReveal(sectionRef);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;
    let disposed = false;

    const measureRoad = () => {
      if (disposed) return;

      const nodes = Array.from(
        list.querySelectorAll<HTMLElement>("[data-road-node]"),
      );

      if (!nodes.length) return;

      const listRect = list.getBoundingClientRect();
      const width = list.clientWidth;
      const height = list.scrollHeight;

      if (!width || !height) return;

      const points = nodes.map((node) => {
        const rect = node.getBoundingClientRect();

        return {
          x: rect.left - listRect.left + rect.width / 2,
          y: rect.top - listRect.top + rect.height / 2,
        };
      });

      let d = `M ${points[0].x} ${points[0].y}`;

      for (let i = 1; i < points.length; i++) {
        const previous = points[i - 1];
        const current = points[i];
        const middleY = (previous.y + current.y) / 2;

        // A gentle alternating curve, like a hand-drawn road.
        const bend = Math.min(28, width * 0.055) * (i % 2 ? 1 : -1);

        d += ` C ${previous.x + bend} ${middleY - 18},
                  ${current.x + bend} ${middleY + 18},
                  ${current.x} ${current.y}`;
      }

      setRoad((previous) => {
        if (
          previous.path === d &&
          previous.width === width &&
          previous.height === height
        ) {
          return previous;
        }

        return {
          ...previous,
          path: d,
          width,
          height,
        };
      });
    };

    const updateProgress = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (disposed) return;

        if (prefersReducedMotion()) {
          setRoad((previous) => ({ ...previous, progress: 1 }));
          return;
        }

        const rect = list.getBoundingClientRect();
        const viewport = window.innerHeight;

        // The line draws while this list moves through the viewport.
        const start = viewport * 0.82;
        const finish = viewport * 0.28;
        const distance = rect.height + start - finish;

        const progress = Math.max(
          0,
          Math.min(1, (start - rect.top) / distance),
        );

        setRoad((previous) =>
          previous.progress === progress
            ? previous
            : { ...previous, progress },
        );
      });
    };

    const refresh = () => {
      measureRoad();
      updateProgress();
    };

    // Measure after the initial DOM layout.
    refresh();

    const resizeObserver = new ResizeObserver(refresh);
    resizeObserver.observe(list);

    list.querySelectorAll<HTMLElement>("[data-road-node]").forEach((node) => {
      resizeObserver.observe(node);
    });

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", refresh);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-clip bg-paper py-24 sm:py-32"
    >
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Section introduction */}
        <div data-reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
              Process
            </p>

            <h2 className="font-display mt-4 text-h1 leading-[1.08] font-extrabold tracking-[-0.02em]">
              {processData.headline}
            </h2>

            <p className="mt-5 text-lead leading-relaxed text-grey-600">
              {processData.sub}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Har mahine kya badhta hai"
            >
              {processData.grows.map((grow) => (
                <span
                  key={grow.name}
                  className="flex items-center gap-2 border border-ink/10 bg-mist px-3.5 py-2 text-sm font-semibold text-ink"
                >
                  <Icon
                    name={grow.icon as IconName}
                    className="size-4 text-brand-deep"
                  />
                  {grow.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Connected roadmap */}
        <div className="min-w-0 lg:col-span-8">
          <ol
            ref={listRef}
            className="relative isolate space-y-5 sm:space-y-0"
          >
            {/* SVG stays inside this list, never the whole page */}
            {road.path && road.width > 0 && road.height > 0 && (
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 hidden overflow-visible sm:block"
                width={road.width}
                height={road.height}
                viewBox={`0 0 ${road.width} ${road.height}`}
                preserveAspectRatio="none"
              >
                {/* Subtle road track */}
                <path
                  d={road.path}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/15"
                />

                {/* Animated line follows scroll progress */}
                <path
                  ref={pathRef}
                  d={road.path}
                  pathLength={1}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={1}
                  strokeDashoffset={1 - road.progress}
                  className="text-brand-deep"
                />

                {/* Moving marker follows the same road */}
                {!prefersReducedMotion() && (
                  <circle
                    r="4"
                    fill="currentColor"
                    className="text-brand-deep"
                  >
                    <animateMotion
                      dur="6s"
                      repeatCount="indefinite"
                      path={road.path}
                    />
                  </circle>
                )}
              </svg>
            )}

            {processData.steps.map((step, i) => (
              <li
                key={step.num}
                data-reveal
                className="group relative z-10 grid grid-cols-[76px_minmax(0,1fr)] items-start gap-5 sm:min-h-48 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-8 sm:py-7"
              >
                {/* Road node */}
                <div
                  data-road-node
                  className={cn(
                    "relative z-10 grid aspect-square place-items-center rounded-[18px] border bg-paper",
                    "transition-[border-color,box-shadow,transform] duration-300",
                    "shadow-[0_8px_30px_-24px_rgba(0,0,0,0.3)]",
                    i === 0
                      ? "border-brand-deep"
                      : "border-ink/25 group-hover:border-brand-deep",
                    "group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_35px_-22px_rgba(0,0,0,0.35)]",
                  )}
                >
                  <span className="font-display text-2xl font-extrabold tracking-tight text-brand-deep sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute -right-1 -top-1 size-2.5 rounded-full border border-brand-deep bg-paper"
                  />
                </div>

                {/* Step content */}
                <article className="relative border-b border-ink/10 pb-7 pt-2 sm:pb-10">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-deep/70">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-grey-600">
                    {step.text}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      {/* Monthly report + transparency */}
      <Container className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          data-reveal
          className="border border-ink/10 bg-mist p-8 sm:p-10"
        >
          <p className="font-display text-h3 font-extrabold tracking-tight">
            {processData.report.title}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {processData.report.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80"
              >
                <Icon
                  name="check"
                  className="mt-0.5 size-4 text-brand-deep"
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-grey-600">
            {processData.report.note}
          </p>
        </div>

        <div data-reveal className="flex flex-col justify-between">
          <div>
            <p className="font-display text-h3 font-extrabold tracking-tight">
              {processData.honesty.title}
            </p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-grey-600 sm:text-base">
              {processData.honesty.text}
            </p>
          </div>

          <p className="font-display mt-8 max-w-sm border-l-4 border-brand pl-5 text-sm font-extrabold leading-relaxed text-brand-deep">
            {processData.honesty.line}
          </p>
        </div>
      </Container>
    </section>
  );
}
