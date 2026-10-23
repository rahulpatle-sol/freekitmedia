"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { ContactForm } from "@/components/sections/ContactForm";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

const channels = [
  { icon: "whatsapp", label: site.cta.whatsapp, href: site.instagram.url },
  { icon: "phone", label: site.phone.primary.display, href: `tel:${site.phone.primary.number}` },
  { icon: "phone", label: site.phone.secondary.display, href: `tel:${site.phone.secondary.number}` },
  { icon: "instagram", label: site.instagram.handle, href: site.instagram.url },
  { icon: "mail", label: site.email, href: `mailto:${site.email}` },
] as const;

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="contact" ref={ref} className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Agle step
          </p>
          <h2 className="font-display mt-4 text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
            Aapke business ka <span className="text-brand">Free Digital Audit</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lead leading-relaxed text-paper/65">
            Customer aapko kahan miss kar raha hai, aur sabse pehle kya theek
            karna hai — 30 minute mein clear answer. {site.cta.auditNote}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div data-reveal className="rounded-3xl border border-paper/10 bg-paper/[0.03] p-8 sm:p-10">
            <p className="font-display text-h3 font-bold tracking-tight">
              Ya direct reach karo
            </p>
            <ul className="mt-6 space-y-3">
              {channels.map((channel) => (
                <li key={`${channel.icon}-${channel.label}`}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-paper/75 transition-colors hover:bg-paper/5 hover:text-paper"
                  >
                    <Icon name={channel.icon} className="size-4.5 text-brand" />
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-paper/10 pt-6 text-xs leading-relaxed text-paper/50">
              Chhattisgarh bhar ke businesses ke saath kaam karte hain —{" "}
              {site.address.line}
            </p>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
