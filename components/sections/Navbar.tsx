
"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";

import { useLenis } from "@/components/providers/LenisProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { prefersReducedMotion } from "@/lib/gsap";
import { cn, whatsappLink } from "@/lib/utils";
import { site } from "@/content/site";
import type Lenis from "lenis";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-6"
    >
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M3 7H21"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M8 12H21"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M3 17H16"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-5", className)}
    >
      <path
        d="M5 12H19M12 5L19 12L12 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getNavHref(href: string) {
  if (
    href.startsWith("/") ||
    href.startsWith("#") ||
    href.startsWith("http")
  ) {
    return href;
  }

  return `/${href}`;
}

function scrollToHash(hash: string, lenis: Lenis | null) {
  const target = document.querySelector<HTMLElement>(hash);

  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: 16 });
  } else {
    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  window.history.replaceState(null, "", hash);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenisRef = useLenis();

  const waHref = whatsappLink(
    site.phone.primary.number,
    site.whatsapp.ctaText,
  );

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const onHashClick =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);

      if (
        !href.startsWith("/#") ||
        window.location.pathname !== "/"
      ) {
        return;
      }

      const hash = href.slice(1);

      if (!document.querySelector(hash)) return;

      event.preventDefault();
      scrollToHash(hash, lenisRef?.current ?? null);
    };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Main navigation bar */}
      <div
        className={cn(
          "relative z-20 w-full border-b",
          "transition-[background-color,border-color,box-shadow] duration-300",
          "motion-reduce:transition-none",
          scrolled || open
            ? "border-ink/10 bg-paper/95 shadow-[0_8px_35px_-24px_rgba(23,23,23,0.3)] backdrop-blur-xl"
            : "border-transparent bg-paper/90 backdrop-blur-md",
        )}
      >
        <Container className="max-w-[1600px]">
          <div className="flex h-[76px] items-center justify-between gap-5 sm:h-[84px]">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-label={`${site.name} home`}
              className="relative z-30 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Logo />
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden md:block"
            >
              <ul className="flex items-center gap-1 lg:gap-2">
                {site.navLinks.map((link) => {
                  const href = getNavHref(link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={href}
                        onClick={onHashClick(href)}
                        className={cn(
                          "group relative flex min-h-11 items-center",
                          "rounded-xl px-3 lg:px-4",
                          "text-[13px] font-medium lg:text-sm",
                          "text-ink/65",
                          "transition-all duration-300 ease-out",
                          "hover:-translate-y-0.5",
                          "hover:bg-[#8A6C05]/[0.07]",
                          "hover:text-[#8A6C05]",
                          "focus-visible:outline-none",
                          "focus-visible:ring-2 focus-visible:ring-[#8A6C05]/40",
                          "motion-reduce:transform-none motion-reduce:transition-none",
                        )}
                      >
                        <span className="relative z-10">
                          {link.label}
                        </span>

                        {/* Animated yellow underline */}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute bottom-1.5 left-3 right-3",
                            "h-[2px] origin-center scale-x-0",
                            "rounded-full bg-[#8A6C05]",
                            "transition-transform duration-300 ease-out",
                            "group-hover:scale-x-100",
                            "group-focus-visible:scale-x-100",
                            "lg:left-4 lg:right-4",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA and mobile menu button */}
            <div className="relative z-30 flex shrink-0 items-center gap-3">
              <Button
                href="/contact"
                size="md"
                className="!hidden sm:!inline-flex"
              >
                {site.cta.audit}
              </Button>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="fullscreen-navigation"
                aria-label={
                  open ? "Close navigation" : "Open navigation"
                }
                className={cn(
                  "grid size-11 place-items-center rounded-xl border",
                  "transition-all duration-300 ease-out md:hidden",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05]/50",
                  open
                    ? "rotate-90 border-ink bg-ink text-paper"
                    : "border-ink/15 bg-paper text-ink hover:border-[#8A6C05]/50 hover:bg-[#8A6C05]/[0.06] hover:text-[#8A6C05]",
                  "motion-reduce:transform-none motion-reduce:transition-none",
                )}
              >
                <MenuIcon open={open} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Full-screen mobile navigation */}
      <div
        id="fullscreen-navigation"
        aria-label="Full-screen navigation"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-0 z-10 overflow-y-auto bg-paper",
          "transition-[opacity,visibility] duration-300 ease-out",
          "motion-reduce:transition-none md:hidden",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <div className="flex min-h-full flex-col px-5 pb-8 pt-28 sm:px-10 sm:pt-32">
          {/* Menu heading */}
          <div className="mb-8 flex items-center justify-between border-b border-ink/15 pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/50">
              Explore FreeKit
            </p>

            <p className="font-mono text-[10px] text-ink/40">
              {String(site.navLinks.length).padStart(2, "0")} PAGES
            </p>
          </div>

          {/* Animated mobile links */}
          <nav aria-label="Full-screen mobile menu">
            <ul>
              {site.navLinks.map((link, index) => {
                const href = getNavHref(link.href);

                return (
                  <li
                    key={link.href}
                    className="border-b border-ink/10"
                  >
                    <Link
                      href={href}
                      onClick={onHashClick(href)}
                      className={cn(
                        "group relative flex min-h-[76px]",
                        "items-center justify-between gap-4 py-4 sm:min-h-[94px]",
                        "transition-colors duration-300",
                        "hover:bg-[#8A6C05]/[0.04]",
                        "motion-reduce:transition-none",
                      )}
                    >
                      <span className="flex items-start gap-4 sm:gap-6">
                        <span className="pt-2 font-mono text-[10px] text-[#8A6C05] sm:text-xs">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={cn(
                            "font-display font-bold",
                            "text-[clamp(2rem,8vw,4.25rem)]",
                            "leading-[0.95] tracking-[-0.065em]",
                            "text-ink",
                            "transition-all duration-300 ease-out",
                            "group-hover:translate-x-2",
                            "group-hover:text-[#8A6C05]",
                            "motion-reduce:transform-none motion-reduce:transition-none",
                          )}
                        >
                          {link.label}
                        </span>
                      </span>

                      <ArrowIcon
                        className={cn(
                          "shrink-0 text-ink/35",
                          "transition-all duration-300 ease-out",
                          "group-hover:translate-x-1",
                          "group-hover:text-[#8A6C05]",
                          "motion-reduce:transition-none",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile CTA buttons */}
          <div className="mt-auto grid gap-3 pt-10 sm:grid-cols-2">
            <Button
              href={waHref}
              variant="outline"
              size="lg"
              onClick={() => setOpen(false)}
            >
              {site.cta.whatsapp}
            </Button>

            <Button
              href="/contact"
              size="lg"
              onClick={() => setOpen(false)}
            >
              {site.cta.audit}
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-ink/10 pt-5">
            <p className="max-w-xs text-xs leading-relaxed text-ink/55">
              Thoughtful work. Honest growth.
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-ink/40">
              Chhattisgarh, India
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
