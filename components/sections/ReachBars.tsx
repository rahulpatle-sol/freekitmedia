"use client";

import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { whatsappLink, cn } from "@/lib/utils";

export function StickyMobileBar() {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] lg:hidden",
      )}
    >
      <a
        href={`tel:${site.phone.primary.number}`}
        aria-label={`Call karo ${site.phone.primary.display} par`}
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-paper shadow-[0_10px_30px_-10px_rgba(11,11,11,0.6)]"
        tabIndex={-1}
      >
        <Icon name="phone" className="size-4" />
        Call Karo
      </a>
      <a
        href={whatsappLink(site.phone.primary.number, site.whatsapp.ctaText)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp par message karo"
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(232,176,32,0.6)]"
        tabIndex={-1}
      >
        <Icon name="whatsapp" className="size-4" />
        {site.cta.whatsapp}
      </a>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(site.phone.primary.number, site.whatsapp.ctaText)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp par message karo"
      className="fixed bottom-6 right-6 z-40 hidden size-13 place-items-center rounded-full bg-ink text-brand shadow-[0_16px_40px_-12px_rgba(11,11,11,0.5)] transition-transform hover:-translate-y-1 lg:grid"
    >
      <Icon name="whatsapp" className="size-6" />
      <span className="absolute -top-1 -right-1 size-3 rounded-full bg-brand" />
    </a>
  );
}
