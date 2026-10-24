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
    href: whatsappLink(site.phone.secondary.number, site.whatsapp.ctaText),
    label: site.phone.secondary.display,
  },
  { icon: "mail", href: `mailto:${site.email}`, label: site.email },
  {
    icon: "instagram",
    href: site.instagram.url,
    label: site.instagram.handle,
  },
  { icon: "mapPin", href: "#top", label: "Cities: Bilaspur, Ambikapur, Korba", plain: true },
] as const;

const socials = site.socials;

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.15fr] lg:gap-8">
        <div>
          <Link href="/" className="inline-block" aria-label={site.name}>
            <Logo variant="light" />
          </Link>
          <p className="font-display mt-5 text-base font-medium text-paper/90">
            {site.tagline}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/55">
            {site.headlineEn} — {site.cities.join(", ")}.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon name={social.icon} className="size-[1.1rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Services">
          <p className="text-xs font-semibold tracking-[0.16em] text-paper/45 uppercase">
            Services
          </p>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="link-underline text-sm text-paper/60 hover:text-paper"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Discover">
          <p className="text-xs font-semibold tracking-[0.16em] text-paper/45 uppercase">
            Discover
          </p>
          <ul className="mt-5 space-y-3">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={`/${link.href}`}
                  className="link-underline text-sm text-paper/60 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="link-underline text-sm text-paper/60 hover:text-paper"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="link-underline text-sm text-paper/60 hover:text-paper"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-paper/45 uppercase">
            Connect
          </p>
          <ul className="mt-5 space-y-3.5">
            {contactItems.map((item) => {
              const content = (
                <>
                  <Icon name={item.icon} className="size-4 text-paper/40" />
                  {item.label}
                </>
              );
              return (
                <li key={item.icon + item.label}>
                  {"plain" in item ? (
                    <span className="flex items-start gap-3 text-sm text-paper/60">
                      {content}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="link-underline flex items-center gap-3 text-sm text-paper/60 hover:text-paper"
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <div className="border-t border-paper/10">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6 text-xs text-paper/40">
          <p>{`© 2025–2026 ${site.name}. All rights reserved.`}</p>
          <p>Made in Chhattisgarh, for Chhattisgarh.</p>
        </Container>
      </div>
    </footer>
  );
}
