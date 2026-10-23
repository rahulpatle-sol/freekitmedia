"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Icon } from "@/components/ui/Icon";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { contactBusinessTypes, site } from "@/content/site";
import { cn, whatsappLink } from "@/lib/utils";

const initialState: ContactState = { ok: false, errors: null };

const inputClasses =
  "h-12 w-full rounded-full border border-white/20 bg-paper/[0.04] px-5 text-paper placeholder:text-paper/35 transition-colors focus:border-brand focus:outline-none";

const errorText = "mt-1.5 pl-4 text-xs text-brand";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 font-semibold whitespace-nowrap text-ink transition-colors hover:bg-brand-bright disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Bhej rahe hain…" : site.cta.audit}
      <Icon name="arrowRight" className="size-4" />
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state]);

  if (state.ok) {
    return (
      <div className="rounded-3xl border border-brand/40 bg-brand/10 p-8 text-paper">
        <Icon name="badgeCheck" className="size-8 text-brand" />
        <p className="font-display mt-4 text-h3 font-bold tracking-tight">
          Mila, Thanks!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-paper/70">
          24 ghanton mein call karenge. Urgent ho toh WhatsApp par seedha
          detail chhod do — audit slot turant book ho jaayega.
        </p>
        <a
          href={whatsappLink(site.phone.primary.number, site.whatsapp.ctaText)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-ink"
        >
          <Icon name="whatsapp" className="size-4" />
          WhatsApp Karo
        </a>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="sr-only">
          Naam
        </label>
        <input
          id="contact-name"
          name="name"
          placeholder="Naam"
          autoComplete="name"
          className={cn(inputClasses, state.errors?.name && "border-brand")}
        />
        {state.errors?.name && <p className={errorText}>{state.errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-phone" className="sr-only">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          placeholder="Mobile number"
          autoComplete="tel"
          className={cn(inputClasses, state.errors?.phone && "border-brand")}
        />
        {state.errors?.phone && <p className={errorText}>{state.errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="contact-type" className="sr-only">
          Business type
        </label>
        <select
          id="contact-type"
          name="businessType"
          defaultValue=""
          className={cn(
            inputClasses,
            "appearance-none",
            state.errors?.businessType && "border-brand",
          )}
        >
          <option value="" disabled className="bg-ink">
            Business type chuno
          </option>
          {contactBusinessTypes.map((type) => (
            <option key={type} value={type} className="bg-ink text-paper">
              {type}
            </option>
          ))}
        </select>
        {state.errors?.businessType && (
          <p className={errorText}>{state.errors.businessType}</p>
        )}
      </div>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <SubmitButton />
      <p className="pl-4 text-xs text-paper/45">
        Number sirf aapko call karne ke liye — spam nahi.
      </p>
    </form>
  );
}
