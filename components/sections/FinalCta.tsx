"use client";

import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="contact" ref={ref} className="bg-ink py-24 text-paper sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div data-reveal className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Agle step
          </p>
          <h2 className="font-display mt-4 text-h1 leading-[1.05] font-extrabold tracking-[-0.02em]">
            Aapke business ka{" "}
            <span className="text-brand">Free Digital Audit</span>
          </h2>
          <p className="mt-5 max-w-md text-lead leading-relaxed text-paper/65">
            Customer aapko kahan miss kar raha hai, aur sabse pehle kya theek
            karna hai — 30 minute mein clear answer. {site.cta.auditNote}
          </p>

          <div className="mt-10">
            <ContactChannels />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-paper/50">
            Chhattisgarh bhar ke businesses ke saath kaam karte hain —{" "}
            {site.address.line}
          </p>
        </div>
        <div data-reveal className="lg:col-span-7">
          <div className="bg-paper p-7 text-ink shadow-[0_48px_90px_-48px_rgba(0,0,0,0.55)] sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
