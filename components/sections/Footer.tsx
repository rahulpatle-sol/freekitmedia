
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

const socials = site.socials;

const glassPanel =
  "rounded-2xl border border-white/[0.12] bg-white/[0.035] backdrop-blur-xl";

const footerLink =
  "inline-flex text-sm text-white/55 transition-colors duration-300 hover:text-[#D6DAB7]";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden bg-[#090A09] text-[#F4F3ED]"
    >
      {/* Ambient liquid-glass lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 -z-10 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#737D43]/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 -z-10 size-[30rem] rounded-full bg-[#8C82D9]/10 blur-[120px]"
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Glass CTA panel */}
        <div
          className={`${glassPanel} relative mb-10 overflow-hidden p-7 sm:p-10 lg:p-12`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-[#C5C9A7]/[0.05]"
          />

          <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C5C9A7]">
                Have a project in mind?
              </p>

              <h2 className="font-display mt-4 text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.07em]">
                Let&apos;s make
                <br />
                <span className="text-[#C5C9A7]">
                  something matter.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
                {site.tagline}
              </p>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full border border-white/20 bg-white/[0.07] px-5 text-sm font-semibold backdrop-blur-lg transition-all duration-300 hover:border-[#C5C9A7]/60 hover:bg-[#C5C9A7]/10 sm:self-auto"
            >
              {site.cta.audit}
              <Icon
                name="arrowRight"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Main glass surface */}
        <div className={`${glassPanel} overflow-hidden`}>
          <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-12 lg:gap-8 lg:p-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#C5C9A7]"
                aria-label={site.name}
              >
                <Logo variant="light" />
              </Link>

              <p className="font-display mt-5 max-w-sm text-lg font-semibold leading-snug text-white/85">
                {site.tagline}
              </p>

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
                {site.headlineEn} — {site.cities.join(", ")}.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/55 transition-all duration-300 hover:border-[#C5C9A7]/50 hover:bg-[#C5C9A7]/10 hover:text-[#D6DAB7]"
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
            <nav aria-label="Services" className="lg:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Services
              </p>

              <ul className="mt-5 space-y-4">
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
            <nav aria-label="Discover" className="lg:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Discover
              </p>

              <ul className="mt-5 space-y-4">
                {site.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      className={footerLink}
                    >
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
            <div className="lg:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Find us / Say hello
              </p>

              <ul className="mt-5 space-y-1">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <Icon
                        name={item.icon}
                        className="mt-0.5 size-4 shrink-0 text-[#C5C9A7]/75"
                      />
                      <span className="min-w-0 break-words">
                        {item.label}
                      </span>
                    </>
                  );

                  return (
                    <li key={`${item.icon}-${item.label}`}>
                      {"plain" in item ? (
                        <span className="flex items-start gap-3 rounded-lg px-2 py-3 text-sm leading-relaxed text-white/50">
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
                          className="flex items-start gap-3 rounded-lg px-2 py-3 text-sm leading-relaxed text-white/50 transition-colors hover:bg-white/[0.035] hover:text-white"
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

          {/* Bottom metadata */}
          <div className="flex flex-col justify-between gap-3 border-t border-white/[0.09] px-6 py-5 text-[10px] text-white/35 sm:flex-row sm:items-center sm:px-9 lg:px-10">
            <p>
              © 2025–2026 {site.name}. All rights reserved.
            </p>

            <p className="uppercase tracking-[0.15em]">
              Made in Chhattisgarh, for Chhattisgarh.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-1 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/25">
          <span>Independent thinking. Honest work.</span>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#C5C9A7]"
          >
            Back to top
            <Icon name="arrowRight" className="-rotate-45 size-3" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
