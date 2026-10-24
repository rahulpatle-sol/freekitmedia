"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { useLenis } from "@/components/providers/LenisProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { prefersReducedMotion } from "@/lib/gsap";
import { cn, whatsappLink } from "@/lib/utils";
import { site } from "@/content/site";
import type Lenis from "lenis";

function scrollToHash(hash: string, lenis: Lenis | null) {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: -88 });
  } else {
    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }
  history.replaceState(null, "", hash);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenisRef = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHashClick = (href: string) => (event: MouseEvent) => {
    if (!href.startsWith("/#") || window.location.pathname !== "/") {
      setOpen(false);
      return;
    }
    const hash = href.slice(1);
    if (!document.querySelector(hash)) {
      setOpen(false);
      return;
    }
    event.preventDefault();
    setOpen(false);
    scrollToHash(hash, lenisRef?.current ?? null);
  };

  const waHref = whatsappLink(site.phone.primary.number, site.whatsapp.ctaText);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="relative">
        <div
          className={cn(
            "flex h-16 items-center justify-between transition-colors duration-300",
            scrolled
              ? "bg-paper/90 shadow-[0_1px_0_0_rgba(23,23,23,0.08)] backdrop-blur-md"
              : "bg-transparent",
          )}
        >
          <Link href="/" className="py-2" aria-label={site.name}>
            <Logo />
          </Link>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {site.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    onClick={onHashClick(`/${link.href}`)}
                    className="px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <SoundToggle />
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              {site.cta.audit}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Menu band karo" : "Menu kholo"}
              className="grid size-10 cursor-pointer place-items-center border border-ink/15 text-ink md:hidden"
            >
              <Icon name={open ? "x" : "menu"} className="size-5" />
            </button>
          </div>
        </div>
        <div
          id="mobile-nav"
          className={cn(
            "absolute inset-x-0 top-16 border border-ink/10 bg-paper p-2 shadow-[0_32px_70px_-40px_rgba(23,23,23,0.45)] transition-all duration-200 md:hidden",
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0",
          )}
        >
          <ul className="divide-y divide-grey-200">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  onClick={onHashClick(`/${link.href}`)}
                  className="block px-3 py-3.5 text-base font-medium text-ink transition-colors hover:text-brand-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-2 pt-3">
            <Button href={waHref} variant="outline" size="md">
              {site.cta.whatsapp}
            </Button>
            <Button href="/contact" size="md" onClick={() => setOpen(false)}>
              {site.cta.audit}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
