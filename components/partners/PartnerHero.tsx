"use client";

import Image from "next/image";
import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { useReveal } from "@/lib/use-reveal";
import type { Partner, PartnerTheme } from "@/content/partners";

const defaultTheme: PartnerTheme = {
  mode: "dark",
  accent: "#F7C928",
  accentSoft: "#FBE17D",
  background: "#171717",
  foreground: "#FFFFFF",
  muted: "rgba(255, 255, 255, 0.66)",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function PartnerHero({ partner }: { partner: Partner }) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const theme = partner.theme ?? defaultTheme;
  const isDark = theme.mode !== "light";
  const background = theme.background ?? (isDark ? "#171717" : "#F7F6F2");
  const foreground = theme.foreground ?? (isDark ? "#FFFFFF" : "#171717");
  const muted = theme.muted ?? (isDark ? "rgba(255, 255, 255, 0.66)" : "#55524C");
  const accent = theme.accent ?? "#F7C928";
  const accentSoft = theme.accentSoft ?? "#FBE17D";

  const chips: string[] = [
    partner.industry,
    ...(partner.city ? [partner.city] : []),
    ...(partner.franchise ? ["Franchise"] : []),
  ].filter((chip): chip is string => Boolean(chip));

  return (
    <section ref={ref} data-reveal className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: background }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 size-[34rem] -translate-x-1/2 rounded-full opacity-70 blur-[110px]"
        style={{ backgroundColor: accent }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-44 -right-28 size-[30rem] rounded-full opacity-60 blur-[100px]"
        style={{ backgroundColor: accentSoft }}
      />

      <Container className="relative">
        <div className="grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: accent }}
            >
              Partner - {partner.industry}
            </p>
            <h1
              className="font-display mt-5 text-[clamp(2.8rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-balance"
              style={{ color: foreground }}
            >
              {partner.headline ?? partner.name}
            </h1>
            {partner.intro ? (
              <p
                className="mt-6 max-w-xl text-base leading-8 text-pretty sm:text-lg sm:leading-9"
                style={{ color: muted }}
              >
                {partner.intro}
              </p>
            ) : null}
            {chips.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border px-3 py-1 text-xs font-medium"
                    style={{ color: muted, borderColor: `${foreground}26` }}
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border sm:aspect-[4/3]">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundColor: `${foreground}10` }}
              />
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-10 sm:p-14"
                />
              ) : (
                <span
                  className="absolute inset-0 grid place-items-center font-display text-6xl font-bold tracking-tight"
                  style={{ color: accent }}
                >
                  {initials(partner.name)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}