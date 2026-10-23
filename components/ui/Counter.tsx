"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type CounterProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  className?: string;
};

export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  className,
}: CounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = numberRef.current;
      if (!el) return;
      const format = (n: number) =>
        prefix +
        n.toLocaleString("en-IN", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) +
        suffix;
      if (prefersReducedMotion()) {
        el.textContent = format(value);
        return;
      }
      const obj = { v: 0 };
      const tween = gsap.to(obj, {
        v: value,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(obj.v);
        },
      });
      tween.pause();
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => tween.play(),
      });
      return () => {
        tween.kill();
        trigger.kill();
      };
    },
    { scope: numberRef },
  );

  return (
    <span className={className}>
      <span className="sr-only">{`${label}: ${prefix}${value.toLocaleString("en-IN")}${suffix}`}</span>
      <span aria-hidden="true" ref={numberRef} className="tabular-nums">
        {`${prefix}0${suffix}`}
      </span>
    </span>
  );
}
