
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
      className="relative overflow-hidden bg-[#F8F7FC] py-20 text-[#29243A] sm:py-28 lg:py-36"
    >
      <Container>
        {/* Section heading */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-[#302644]/15 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8069A9] sm:text-xs">
            Frequently asked questions
          </p>

          <p className="font-mono text-[10px] text-[#8C849C] sm:text-xs">
            {String(faqs.length).padStart(2, "0")} QUESTIONS
          </p>
        </div>

        <div className="mt-10 grid min-w-0 gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
          {/* Left: heading and contact */}
          <div data-reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-2 text-xs font-semibold text-[#8060BB]">
              <span className="size-2 rounded-full bg-[#9673D8]" />
              Clear answers. No confusion.
            </p>

            <h2 className="font-display mt-5 text-[clamp(3.25rem,6.5vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.075em]">
              Got
              <br />
              questions<span className="text-[#9673D8]">?</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#716A80] sm:text-base">
              Find answers about our services, process, and how we help your
              business grow.
            </p>

            <div className="mt-7 border-t border-[#302644]/15 pt-5 sm:mt-9">
              <p className="text-xs font-medium text-[#716A80]">
                Still have questions?
              </p>

              <a
                href={whatsappLink(
                  site.phone.primary.number,
                  site.whatsapp.ctaText,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#302644] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8060BB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9673D8] focus-visible:ring-offset-2"
              >
                {site.cta.whatsapp}
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div data-reveal className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-[#302644]/10 bg-white/75">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const answerId = `faq-answer-${index}`;
                const buttonId = `faq-question-${index}`;

                return (
                  <article
                    key={faq.q}
                    className={cn(
                      "border-b border-[#302644]/10 last:border-b-0",
                      isOpen && "bg-[#F1ECF9]",
                    )}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() =>
                          setActiveIndex(isOpen ? null : index)
                        }
                        className="group flex min-h-[76px] w-full items-center gap-3 px-4 py-5 text-left outline-none transition-colors hover:bg-[#F8F5FD] focus-visible:bg-[#F1ECF9] sm:gap-5 sm:px-6 sm:py-6"
                      >
                        <span
                          className={cn(
                            "hidden shrink-0 font-mono text-xs tabular-nums sm:block",
                            isOpen ? "text-[#8060BB]" : "text-[#A7A0B2]",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={cn(
                            "min-w-0 flex-1 font-display text-base font-bold leading-snug tracking-[-0.025em] transition-colors sm:text-lg lg:text-xl",
                            isOpen
                              ? "text-[#8060BB]"
                              : "text-[#302644] group-hover:text-[#8060BB]",
                          )}
                        >
                          {faq.q}
                        </span>

                        <span
                          className={cn(
                            "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 sm:size-10",
                            isOpen
                              ? "rotate-45 border-[#8060BB] bg-[#8060BB] text-white"
                              : "border-[#302644]/15 text-[#716A80] group-hover:border-[#9673D8] group-hover:text-[#8060BB]",
                          )}
                        >
                          <Icon name="plus" className="size-4" />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      inert={!isOpen}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pl-4 pr-5 text-sm leading-7 text-[#716A80] sm:pb-7 sm:pl-[4.25rem] sm:pr-7 sm:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-4 text-xs leading-5 text-[#8C849C]">
              Can’t find your answer? Reach out to our team.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
