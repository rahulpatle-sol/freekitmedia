"use client";

import { useState } from "react";
import { useSound } from "@/components/providers/SoundProvider";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export type AccordionItem = { question: string; answer: string };

export function Accordion({
  items,
  idPrefix = "faq",
}: {
  items: AccordionItem[];
  idPrefix?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const { play } = useSound();

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${idPrefix}-btn-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  setOpen(isOpen ? null : index);
                  play("click");
                }}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-start transition-colors hover:text-brand-deep sm:py-6"
              >
                <span className="text-base font-semibold text-ink sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full transition-transform duration-300",
                    isOpen
                      ? "rotate-45 bg-brand text-ink"
                      : "bg-ink/[0.06] text-ink/70",
                  )}
                >
                  <Icon name="plus" className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 leading-relaxed text-ink/70">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
