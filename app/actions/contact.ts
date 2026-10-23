"use server";

import type { ContactState } from "@/lib/content/contact-state";
import { contactBusinessTypes } from "@/content/site";

export type { ContactState };

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("company") ?? "");
  if (honeypot !== "") {
    return { ok: true, errors: null };
  }

  const name = String(formData.get("name") ?? "").trim();
  const rawPhone = String(formData.get("phone") ?? "").trim();
  const businessType = String(formData.get("businessType") ?? "");

  const phoneDigits = rawPhone.replace(/\D/g, "");
  const localPhone =
    phoneDigits.length === 12 && phoneDigits.startsWith("91")
      ? phoneDigits.slice(2)
      : phoneDigits;

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Naam thoda batao.";
  if (!/^[6-9]\d{9}$/.test(localPhone)) {
    errors.phone = "10-digit mobile number daalo (91/98/...).";
  }
  if (!(contactBusinessTypes as readonly string[]).includes(businessType)) {
    errors.businessType = "Business type chuno.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  console.info("[contact-lead]", {
    name,
    phone: localPhone,
    businessType,
    at: new Date().toISOString(),
  });

  return { ok: true, errors: null };
}
