
"use client";

import { useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { faqs } from "@/content/page-sections";
import { site } from "@/content/site";
import { useReveal } from "@/lib/use-reveal";
import { cn, whatsappLink } from "@/lib/utils";

export function FaqSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useReveal(ref);

  return (
    <section
      id="faq"
      ref={ref}
      className="relative overflow-hidden bg-[#F7F6F0] py-24 text-[#25271F] sm:py-32 lg:py-40"
    >
      <Container>
        {/* Editorial section header */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-[#25271F]/20 pt-5"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#74766A] sm:text-xs">
            Frequently asked questions
          </span>

          <span className="font-mono text-[10px] text-[#74766A] sm:text-xs">
            FAQ / 001—{String(faqs.length).padStart(3, "0")}
          </span>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20">
          {/* Left editorial column */}
          <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#737D43]">
              <span className="size-2 rounded-full bg-[#737D43]" />
              Clear answers. No confusion.
            </p>

            <h2 className="font-display mt-7 text-[clamp(3.5rem,7vw,7rem)] font-extrabold leading-[0.85] tracking-[-0.075em]">
              Got
              <br />
              questions<span className="text-[#737D43]">?</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-relaxed text-[#68695F] sm:text-base">
              Sawal chhota ho ya bada, decision lene se pehle clarity milni
              chahiye. Yahan se shuru karo.
            </p>

            <div className="mt-9 border-t border-[#25271F]/15 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#74766A]">
                Still curious?
              </p>

              <a
                href={whatsappLink(
                  site.phone.primary.number,
                  site.whatsapp.ctaText,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#737D43]"
              >
                {site.cta.whatsapp}
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#77786F]">
                Share a question and we’ll be happy to help.
              </p>
            </div>
          </div>

          {/* Right accordion */}
          <div data-reveal className="min-w-0">
            <div className="border-t border-[#25271F]/20">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <article
                    key={faq.q}
                    className={cn(
                      "border-b border-[#25271F]/20 transition-colors duration-300",
                      isOpen && "bg-white/65",
                    )}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() =>
                        setActiveIndex(isOpen ? null : index)
                      }
                      className="group flex w-full items-start gap-4 px-3 py-6 text-left sm:gap-6 sm:px-5 sm:py-8"
                    >
                      <span
                        className={cn(
                          "pt-1 font-mono text-xs tabular-nums transition-colors duration-300",
                          isOpen ? "text-[#737D43]" : "text-[#99998F]",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "font-display block text-lg font-bold leading-snug tracking-[-0.035em] transition-colors duration-300 sm:text-xl lg:text-2xl",
                            isOpen
                              ? "text-[#737D43]"
                              : "text-[#25271F] group-hover:text-[#737D43]",
                          )}
                        >
                          {faq.q}
                        </span>
                      </span>

                      <span
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 sm:size-10",
                          isOpen
                            ? "rotate-45 border-[#737D43] bg-[#737D43] text-white"
                            : "border-[#25271F]/20 text-[#25271F] group-hover:border-[#737D43]",
                        )}
                      >
                        <Icon name="plus" className="size-4" />
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      aria-hidden={!isOpen}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-7 pl-10 pr-5 text-sm leading-7 text-[#68695F] sm:pb-9 sm:pl-[4.5rem] sm:pr-8 sm:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.14em] text-[#77786F]">
              <span>Honest answers, always</span>
              <span>{faqs.length} questions</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
