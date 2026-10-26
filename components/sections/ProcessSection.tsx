
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
};

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  const [road, setRoad] = useState<RoadState>({
    path: "",
    width: 0,
    height: 0,
    progress: 0,
  });

  useReveal(sectionRef);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;
    let disposed = false;

    const measureRoad = () => {
      if (disposed || window.innerWidth < 640) return;

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

        return { ...previous, path: d, width, height };
      });
    };

    const updateProgress = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (disposed || window.innerWidth < 640) return;

        if (prefersReducedMotion()) {
          setRoad((previous) => ({ ...previous, progress: 1 }));
          return;
        }

        const rect = list.getBoundingClientRect();
        const start = window.innerHeight * 0.82;
        const finish = window.innerHeight * 0.28;
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
      className="relative overflow-clip bg-paper py-16 sm:py-24 lg:py-32"
    >
      <Container className="grid min-w-0 gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Section introduction */}
        <div data-reveal className="min-w-0 lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
              Process
            </p>

            <h2 className="font-display mt-4 text-h1 font-extrabold leading-[1.08] tracking-[-0.02em]">
              {processData.headline}
            </h2>

            <p className="mt-5 leading-relaxed text-grey-600">
              {processData.sub}
            </p>

            <div
              className="mt-6 flex flex-wrap gap-2 sm:mt-8"
              aria-label="Har mahine kya badhta hai"
            >
              {processData.grows.map((grow) => (
                <span
                  key={grow.name}
                  className="flex items-center gap-2 border border-ink/10 bg-mist px-3 py-2 text-sm font-semibold text-ink sm:px-3.5"
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

        {/* Mobile horizontal carousel; desktop vertical roadmap */}
        <div className="min-w-0 lg:col-span-8">
          <ol
            ref={listRef}
            aria-label="Our process"
            className={cn(
              "relative isolate flex w-full flex-nowrap items-stretch gap-3",
              "overflow-x-auto overflow-y-hidden overscroll-x-contain",
              "snap-x snap-mandatory scroll-smooth pb-4 pt-1",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "sm:block sm:overflow-visible sm:pb-0 sm:pt-0",
              "sm:snap-none sm:scroll-auto sm:space-y-0",
            )}
          >
            {/* Animated roadmap on desktop */}
            {road.path && road.width > 0 && road.height > 0 && (
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 hidden overflow-visible sm:block"
                width={road.width}
                height={road.height}
                viewBox={`0 0 ${road.width} ${road.height}`}
                preserveAspectRatio="none"
              >
                <path
                  d={road.path}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/15"
                />

                <path
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
                className={cn(
                  // Mobile cards: force a single horizontal row
                  "group relative z-10 flex w-[82%] min-w-[82%] shrink-0 snap-start flex-col",
                  "rounded-2xl border border-ink/10 bg-white p-5",
                  "shadow-[0_8px_28px_-24px_rgba(0,0,0,0.25)]",
                  // Desktop: restore vertical timeline rows
                  "sm:grid sm:min-h-48 sm:w-auto sm:min-w-0 sm:shrink sm:snap-none",
                  "sm:grid-cols-[100px_minmax(0,1fr)] sm:items-start",
                  "sm:gap-8 sm:rounded-none sm:border-0 sm:bg-transparent",
                  "sm:p-0 sm:py-7 sm:shadow-none",
                )}
              >
                {/* Road node */}
                <div
                  data-road-node
                  className={cn(
                    "relative z-10 grid size-16 shrink-0 place-items-center",
                    "rounded-[18px] border bg-paper",
                    "transition-[border-color,box-shadow,transform] duration-300",
                    "shadow-[0_8px_30px_-24px_rgba(0,0,0,0.3)]",
                    i === 0
                      ? "border-brand-deep"
                      : "border-ink/25 group-hover:border-brand-deep",
                    "group-hover:-translate-y-0.5",
                    "group-hover:shadow-[0_12px_35px_-22px_rgba(0,0,0,0.35)]",
                    "sm:size-full sm:aspect-square",
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
                <article className="relative mt-5 min-w-0 sm:mt-0 sm:border-b sm:border-ink/10 sm:pb-10 sm:pt-2">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-deep/70">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-grey-600">
                    {step.text}
                  </p>
                </article>
              </li>
            ))}
          </ol>

          {/* Mobile swipe hint */}
          <div className="mt-1 flex items-center justify-between sm:hidden">
            <p className="text-xs text-grey-600">Explore our process</p>
            <p className="flex items-center gap-1 text-xs font-semibold text-brand-deep">
              Swipe
              <Icon name="arrowRight" className="size-4" />
            </p>
          </div>
        </div>
      </Container>

      {/* Monthly report + transparency */}
      <Container className="mt-12 grid gap-6 sm:mt-16 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          data-reveal
          className="border border-ink/10 bg-mist p-6 sm:p-10"
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
                  className="mt-0.5 size-4 shrink-0 text-brand-deep"
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
