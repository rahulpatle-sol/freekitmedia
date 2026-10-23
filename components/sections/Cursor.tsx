"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const cursorBase =
  "pointer-events-none fixed left-0 top-0 z-[90] motion-reduce:hidden";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.32, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.32, ease: "power3.out" });

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    let visible = false;
    let grow = false;

    const onMove = (event: PointerEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3 });
      }
    };

    const shouldGrow = (clientX: number, clientY: number) =>
      Boolean(
        document
          .elementFromPoint(clientX, clientY)
          ?.closest("a, button, summary, [data-cursor-grow]"),
      );

    const applyGrow = (clientX: number, clientY: number) => {
      const nextGrow = shouldGrow(clientX, clientY);
      if (nextGrow !== grow) {
        grow = nextGrow;
        gsap.to(ring, {
          scale: grow ? 1.9 : 1,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      onMove(event);
      applyGrow(event.clientX, event.clientY);
    };

    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div
        ref={dotRef}
        className={cn(
          cursorBase,
          "hidden size-1.5 rounded-full bg-brand lg:block",
        )}
      />
      <div
        ref={ringRef}
        className={cn(
          cursorBase,
          "hidden size-9 rounded-full border border-brand/60 lg:block",
        )}
      />
    </div>
  );
}
