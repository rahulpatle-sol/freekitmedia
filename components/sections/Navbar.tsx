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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHashClick = (href: string) => (event: MouseEvent) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    setOpen(false);
    scrollToHash(href, lenisRef?.current ?? null);
  };

  const waHref = whatsappLink(site.phone.primary.number, site.whatsapp.ctaText);
  const onAuditClick = (event: MouseEvent) => {
    const hash = "#contact";
    const target = document.querySelector<HTMLElement>(hash);
    if (!target) return;
    event.preventDefault();
    scrollToHash(hash, lenisRef?.current ?? null);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container className="relative">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-full border border-ink/10 bg-white/85 pl-3 pr-2.5 backdrop-blur-md transition-shadow duration-300 sm:h-16 sm:pl-4 sm:pr-3",
            scrolled && "shadow-[0_10px_40px_-12px_rgba(29,23,0,0.18)]",
          )}
        >
          <Link href="/" className="rounded-full" aria-label={site.name}>
            <Logo />
          </Link>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {site.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onHashClick(link.href)}
                    className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <SoundToggle />
            <Button href="#contact" size="sm" onClick={onAuditClick} className="hidden sm:inline-flex">
              {site.cta.audit}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Menu band karo" : "Menu kholo"}
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-ink/15 text-ink md:hidden"
            >
              <Icon name={open ? "x" : "menu"} className="size-5" />
            </button>
          </div>
        </div>
        <div
          id="mobile-nav"
          className={cn(
            "absolute inset-x-3 top-[4.4rem] rounded-3xl border border-ink/10 bg-white p-3 shadow-xl transition-all duration-200 md:hidden",
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0",
          )}
        >
          <ul className="flex flex-col">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onHashClick(link.href)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-mist"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={waHref} variant="outline" size="md" className="mt-3 w-full">
            {site.cta.whatsapp}
          </Button>
          <Button href="#contact" size="md" className="mt-2 w-full" onClick={onAuditClick}>
            {site.cta.audit}
          </Button>
        </div>
      </Container>
    </header>
  );
}
