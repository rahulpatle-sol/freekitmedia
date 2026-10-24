
"use client";

import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { whatsappLink, cn } from "@/lib/utils";

export function StickyMobileBar() {
  const whatsappHref = whatsappLink(
    site.phone.primary.number,
    site.whatsapp.ctaText,
  );

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        "px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        "pointer-events-none",
      )}
    >
      <div className="pointer-events-auto mx-auto grid max-w-lg grid-cols-2 gap-2 rounded-2xl border border-ink/10 bg-paper/90 p-2 shadow-[0_-8px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <a
          href={`tel:${site.phone.primary.number}`}
          aria-label={`Call ${site.phone.primary.display}`}
          className={cn(
            "group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl",
            "bg-ink text-sm font-semibold text-[#F7F6F2]",
            "transition-all duration-300 active:scale-[0.97]",
            "hover:bg-ink/90",
          )}
        >
          <Icon
            name="phone"
            className="size-4 transition-transform duration-300 group-hover:-rotate-12"
          />
          <span>Call us</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          className={cn(
            "group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl",
            "bg-brand text-sm font-bold text-ink",
            "transition-all duration-300 active:scale-[0.97]",
            "hover:brightness-105",
          )}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full"
          />
          <Icon
            name="whatsapp"
            className="relative size-[1.1rem] transition-transform duration-300 group-hover:scale-110"
          />
          <span className="relative">{site.cta.whatsapp}</span>
          <span
            aria-hidden="true"
            className="absolute right-2 top-2 size-1.5 rounded-full bg-ink/50"
          />
        </a>
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  const whatsappHref = whatsappLink(
    site.phone.primary.number,
    site.whatsapp.ctaText,
  );

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className={cn(
        "group fixed bottom-7 right-7 z-40 hidden lg:flex",
        "items-center gap-3 rounded-full",
        "border border-white/10 bg-ink py-3 pl-4 pr-3 text-paper",
        "shadow-[0_16px_50px_-18px_rgba(0,0,0,0.55)]",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_60px_-18px_rgba(0,0,0,0.65)]",
      )}
    >
      <span className="flex flex-col">
        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-paper/45">
          Have a project?
        </span>
        <span className="mt-0.5 text-sm font-semibold">
          Chat with us
        </span>
      </span>

      <span className="relative grid size-11 place-items-center rounded-full bg-brand text-ink transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
        <Icon name="whatsapp" className="size-5" />
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-ink bg-emerald-400"
        />
      </span>
    </a>
  );
}
