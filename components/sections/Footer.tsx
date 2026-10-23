import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { navLinks } from "@/data/site";

const socials = [
  { icon: "instagram", href: site.socials.instagram, label: "Instagram" },
  { icon: "youtube", href: site.socials.youtube, label: "YouTube" },
  { icon: "linkedin", href: site.socials.linkedin, label: "LinkedIn" },
] as const;

const contactItems = [
  { icon: "phone", href: `tel:+${site.whatsapp.number}`, label: site.whatsapp.display },
  { icon: "mail", href: `mailto:${site.email}`, label: site.email },
  { icon: "mapPin", href: "#top", label: "Mumbai · Pune · Jaipur", plain: true },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.15fr] lg:gap-8">
        <div>
          <Link href="/" className="inline-block" aria-label={site.name}>
            <Logo variant="light" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            All-in-one digital marketing agency — website se ad spend tak. Ek
            team, ek contract, ek report.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon name={social.icon} className="size-[1.1rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Services">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
            Services
          </p>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href="/#services"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Discover">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
            Discover
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
            Connect
          </p>
          <ul className="mt-5 space-y-3.5">
            {contactItems.map((item) => {
              const content = (
                <>
                  <Icon name={item.icon} className="size-4 text-white/40" />
                  {item.label}
                </>
              );
              return (
                <li key={item.label}>
                  {"plain" in item ? (
                    <span className="flex items-center gap-3 text-sm text-white/60">
                      {content}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
            <Icon name="shield" className="size-3.5 text-brand" />
            {site.legalLine}
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6 text-xs text-white/40">
          <p>{`© ${site.years} ${site.name}. All rights reserved.`}</p>
          <p>Made in India, for Indian businesses.</p>
        </Container>
      </div>
    </footer>
  );
}
