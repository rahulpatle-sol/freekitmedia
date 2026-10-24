"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Icon } from "@/components/ui/Icon";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { contactBusinessTypes, site } from "@/content/site";
import { cn, whatsappLink } from "@/lib/utils";

const initialState: ContactState = { ok: false, errors: null, failure: false };

const inputClasses =
  "h-12 w-full border border-ink/15 bg-white px-4 text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:outline-none";

const errorText = "mt-1.5 pl-1 text-xs text-brand-deep";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 w-full items-center justify-center gap-2 bg-brand px-7 font-semibold whitespace-nowrap text-ink transition-colors hover:bg-brand-soft disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Bhej rahe hain..." : site.cta.audit}
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
      <div className="border border-olive/30 bg-mist p-8 text-ink">
        <Icon name="badgeCheck" className="size-8 text-olive" />
        <p className="font-display mt-4 text-h3 font-extrabold tracking-tight">
          Mila, Thanks!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-grey-600">
          24 ghanton mein call karenge. Urgent ho toh WhatsApp par seedha
          detail chhod do — audit slot turant book ho jaayega.
        </p>
        <a
          href={whatsappLink(site.phone.primary.number, site.whatsapp.ctaText)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border border-ink/30 px-5 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-brand/20"
        >
          <Icon name="whatsapp" className="size-4" />
          WhatsApp Karo
        </a>
      </div>
    );
  }

  return (
    <div>
      {state.failure && (
        <div
          role="alert"
          className="mb-5 border border-brand bg-brand/15 p-5 text-ink"
        >
          <p className="font-display text-base font-extrabold tracking-tight">
            Request fail ho gayi.
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-grey-600">
            Kuch galat ho gaya server par. Dusri baar try karo — ya seedha
            WhatsApp par message chhod do.
          </p>
          <a
            href={whatsappLink(
              site.phone.primary.number,
              site.whatsapp.ctaText,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <Icon name="whatsapp" className="size-4" />
            WhatsApp Karo
          </a>
        </div>
      )}
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
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={
              state.errors?.name ? "contact-name-error" : undefined
            }
            className={cn(
              inputClasses,
              state.errors?.name && "border-brand-deep",
            )}
          />
          {state.errors?.name && (
            <p id="contact-name-error" className={errorText}>
              {state.errors.name}
            </p>
          )}
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
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={
              state.errors?.phone ? "contact-phone-error" : undefined
            }
            className={cn(
              inputClasses,
              state.errors?.phone && "border-brand-deep",
            )}
          />
          {state.errors?.phone && (
            <p id="contact-phone-error" className={errorText}>
              {state.errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-type" className="sr-only">
            Business type
          </label>
          <div className="relative">
            <select
              id="contact-type"
              name="businessType"
              defaultValue=""
              aria-invalid={Boolean(state.errors?.businessType)}
              aria-describedby={
                state.errors?.businessType ? "contact-type-error" : undefined
              }
              className={cn(
                inputClasses,
                "appearance-none pr-10",
                state.errors?.businessType && "border-brand-deep",
              )}
            >
              <option value="" disabled>
                Business type chuno
              </option>
              {contactBusinessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <Icon
              name="chevronDown"
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink/50"
            />
          </div>
          {state.errors?.businessType && (
            <p id="contact-type-error" className={errorText}>
              {state.errors.businessType}
            </p>
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
        <p className="pl-1 text-xs text-grey-600">
          Number sirf aapko call karne ke liye — spam nahi.
        </p>
      </form>
    </div>
  );
}
