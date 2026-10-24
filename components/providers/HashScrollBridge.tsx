"use client";

import { useEffect } from "react";
import { useLenis } from "@/components/providers/LenisProvider";
import { prefersReducedMotion } from "@/lib/gsap";

export function HashScrollBridge() {
  const lenisRef = useLenis();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#") return;

    let cancelled = false;
    let frame = 0;
    let timeout = 0;

    const run = () => {
      if (cancelled) return;
      let target: Element | null = null;
      try {
        target = document.querySelector(hash);
      } catch {
        return;
      }
      if (!target) return;
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(target as HTMLElement, { offset: -88 });
      } else {
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      }
    };

    frame = requestAnimationFrame(() => {
      timeout = window.setTimeout(run, 200);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [lenisRef]);

  return null;
}
