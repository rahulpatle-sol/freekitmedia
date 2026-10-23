"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Mark } from "@/components/ui/Mark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export function Faq() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Seedhe <Mark>sawal</Mark>, seedhe jawab
            </>
          }
          description="Jo sabse zyada pucha jaata hai, uske jawab yahan. Baki curiosity ho toh call pe lo."
        />
        <div data-reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
