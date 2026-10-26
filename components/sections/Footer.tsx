
"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/utils";

const contactItems = [
  {
    icon: "phone",
    href: `tel:${site.phone.primary.number}`,
    label: site.phone.primary.display,
  },
  {
    icon: "whatsapp",
    href: whatsappLink(
      site.phone.secondary.number,
      site.whatsapp.ctaText,
    ),
    label: site.phone.secondary.display,
  },
  {
    icon: "mail",
    href: `mailto:${site.email}`,
    label: site.email,
  },
  {
    icon: "instagram",
    href: site.instagram.url,
    label: site.instagram.handle,
  },
  {
    icon: "mapPin",
    href: "#top",
    label: "Cities: Bilaspur, Ambikapur, Korba",
    plain: true,
  },
] as const;

const glassPanel =
  "rounded-2xl border border-white/[0.10] bg-white/[0.045] backdrop-blur-2xl";

const footerLink =
  "inline-flex text-sm leading-6 text-white/55 transition-colors duration-300 hover:text-[#D0BDFB] focus-visible:text-[#D0BDFB] focus-visible:outline-none";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden bg-[#171321] text-[#FDFCFF]"
    >
      {/* Liquid-glass ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-64 left-1/2 -z-10 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-[#9673D8]/20 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 -z-10 size-[28rem] rounded-full bg-[#8060BB]/15 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[45%] -z-10 size-[30rem] rounded-full bg-[#C4B5FD]/[0.07] blur-[120px]"
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Glass CTA */}
        <div
          className={`${glassPanel} relative mb-6 overflow-hidden p-6 sm:p-9 lg:p-12`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C4B5FD]/[0.12] via-transparent to-[#9673D8]/[0.06]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full border border-[#C4B5FD]/10 sm:-right-8 sm:size-80"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 size-48 rounded-full border border-white/[0.06] sm:right-8 sm:size-64"
          />

          <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-end sm:gap-8">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D0BDFB] sm:text-xs">
                <span className="size-1.5 rounded-full bg-[#C4B5FD]" />
                Have a project in mind?
              </p>

              <h2 className="font-display mt-5 text-[clamp(2.7rem,6vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.075em]">
                Let&apos;s make
                <br />
                <span className="bg-gradient-to-r from-[#D9CBFF] via-[#BFA6F5] to-[#9673D8] bg-clip-text text-transparent">
                  something matter.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                {site.tagline}
              </p>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-full border border-[#C4B5FD]/25 bg-[#C4B5FD]/10 px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-[#C4B5FD]/50 hover:bg-[#9673D8]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD] sm:w-auto"
            >
              {site.cta.audit}
              <Icon
                name="arrowRight"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Main liquid-glass surface */}
        <div className={`${glassPanel} overflow-hidden`}>
          <div className="grid min-w-0 gap-9 p-5 sm:gap-10 sm:p-8 lg:grid-cols-12 lg:gap-8 lg:p-10 xl:p-12">
            {/* Brand */}
            <div className="min-w-0 lg:col-span-4">
              <Link
                href="/"
                className="inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]"
                aria-label={site.name}
              >
                <Logo variant="light" />
              </Link>

              <p className="font-display mt-5 max-w-sm text-lg font-semibold leading-snug text-white/90 sm:text-xl">
                {site.tagline}
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                {site.headlineEn} — {site.cities.join(", ")}.
              </p>

              {/* Social links */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C4B5FD]/40 hover:bg-[#9673D8]/15 hover:text-[#D0BDFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]"
                    >
                      <Icon
                        name={social.icon}
                        className="size-[1.1rem]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <nav aria-label="Services" className="min-w-0 lg:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D0BDFB]/80">
                Services
              </p>

              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={footerLink}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Discover */}
            <nav aria-label="Discover" className="min-w-0 lg:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D0BDFB]/80">
                Discover
              </p>

              <ul className="mt-4 space-y-3">
                {site.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={`/${link.href}`} className={footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link href="/services" className={footerLink}>
                    All services
                  </Link>
                </li>

                <li>
                  <Link href="/case-studies" className={footerLink}>
                    Case studies
                  </Link>
                </li>

                <li>
                  <Link href="/partners" className={footerLink}>
                    Partners
                  </Link>
                </li>

                <li>
                  <Link href="/industries" className={footerLink}>
                    Industries
                  </Link>
                </li>

                <li>
                  <Link href="/blog" className={footerLink}>
                    Blog
                  </Link>
                </li>

                <li>
                  <Link href="/#contact" className={footerLink}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact */}
            <div className="min-w-0 lg:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D0BDFB]/80">
                Get in touch
              </p>

              <ul className="mt-4 space-y-1">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <Icon
                        name={item.icon}
                        className="mt-0.5 size-4 shrink-0 text-[#C4B5FD]"
                      />
                      <span className="min-w-0 break-words">
                        {item.label}
                      </span>
                    </>
                  );

                  return (
                    <li key={`${item.icon}-${item.label}`}>
                      {"plain" in item ? (
                        <span className="flex items-start gap-3 rounded-lg px-2 py-3 text-sm leading-6 text-white/50">
                          {content}
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          target={
                            item.icon === "instagram" ||
                            item.icon === "whatsapp"
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.icon === "instagram" ||
                            item.icon === "whatsapp"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start gap-3 rounded-lg px-2 py-3 text-sm leading-6 text-white/55 transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]"
                        >
                          {content}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Footer metadata */}
          <div className="flex flex-col justify-between gap-3 border-t border-white/[0.09] px-5 py-5 text-[10px] leading-5 text-white/40 sm:flex-row sm:items-center sm:px-8 lg:px-10">
            <p>
              © 2025–2026 {site.name}. All rights reserved.
            </p>

            <p className="uppercase tracking-[0.12em]">
              Made in Chhattisgarh, for Chhattisgarh.
            </p>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="flex flex-col gap-3 px-1 pt-5 text-[9px] uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span>Independent thinking. Honest work.</span>

          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-2 transition-colors hover:text-[#D0BDFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]"
          >
            Back to top
            <Icon
              name="arrowRight"
              className="size-3 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
