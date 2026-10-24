"use server";

import { headers } from "next/headers";

import type { ContactState } from "@/lib/content/contact-state";
import type { ContactFieldErrors } from "@/lib/content/contact-state";
import { contactBusinessTypes } from "@/content/site";

export type { ContactState };

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_PER_MINUTE = 5;
const RATE_MAX_PER_HOUR = 20;
const RATE_TTL_MS = 3_600_000;

const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < RATE_TTL_MS);
  const lastMinute = recent.filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 1_000) {
    const cutoff = now - RATE_TTL_MS;
    for (const [hitKey, times] of hits) {
      if (times.every((time) => time < cutoff)) hits.delete(hitKey);
    }
  }

  return (
    lastMinute.length >= RATE_MAX_PER_MINUTE || recent.length > RATE_MAX_PER_HOUR
  );
}

async function resolveClientKey(): Promise<string> {
  try {
    const headerList = await headers();
    const forwarded = headerList.get("x-forwarded-for");
    if (forwarded) {
      const firstHop = forwarded.split(",")[0]?.trim();
      if (firstHop) return firstHop;
    }
    return headerList.get("x-real-ip") ?? "unknown";
  } catch {
    return "unknown";
  }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  try {
    if (isRateLimited(await resolveClientKey())) {
      return { ok: false, errors: null, failure: true };
    }

    const honeypot = String(formData.get("company") ?? "");
    if (honeypot !== "") {
      return { ok: true, errors: null, failure: false };
    }

    const name = String(formData.get("name") ?? "")
      .trim()
      .slice(0, 80);
    const rawPhone = String(formData.get("phone") ?? "").trim();
    const businessType = String(formData.get("businessType") ?? "");

    const phoneDigits = rawPhone.replace(/\D/g, "");
    const localPhone =
      phoneDigits.length === 12 && phoneDigits.startsWith("91")
        ? phoneDigits.slice(2)
        : phoneDigits;

    const errors: ContactFieldErrors = {};
    if (name.length < 2) errors.name = "Naam thoda batao.";
    if (!/^[6-9]\d{9}$/.test(localPhone)) {
      errors.phone = "10-digit mobile number daalo (91/98/...).";
    }
    if (!(contactBusinessTypes as readonly string[]).includes(businessType)) {
      errors.businessType = "Business type chuno.";
    }

    if (Object.keys(errors).length > 0) {
      return { ok: false, errors, failure: false };
    }

    console.info("[contact-lead]", {
      name,
      phone: localPhone,
      businessType,
      at: new Date().toISOString(),
    });

    return { ok: true, errors: null, failure: false };
  } catch (error) {
    console.error("[contact-lead-error]", error);
    return { ok: false, errors: null, failure: true };
  }
}
