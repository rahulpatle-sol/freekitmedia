export type Plan = {
  slug: string;
  name: string;
  audience: string;
  pitch: string;
  features: [string, string, string, string];
  priceFrom: string;
  priceNote: string;
  cta: string;
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    slug: "local-shop",
    name: "Shop Lite",
    audience: "Kirana, salon, clinic, boutique",
    pitch: "Mohalla customer aapki dukaan pe, Google Maps pe.",
    features: [
      "Google My Business setup + management",
      "8 social posts per month",
      "WhatsApp campaign blasts",
      "Monthly poster designs",
    ],
    priceFrom: "₹5,999",
    priceNote: "per month, no setup fee",
    cta: "Apni dukaan online lo",
  },
  {
    slug: "d2c-brand",
    name: "Brand Engine",
    audience: "D2C brands, retail stores",
    pitch: "Ads + content + website — poora growth team, aapke hinge.",
    features: [
      "Website ya landing pages ready",
      "Meta + Google ads management",
      "16 reels/posts per month",
      "Weekly performance call",
    ],
    priceFrom: "₹14,999",
    priceNote: "per month + ad spend (aapke account se)",
    cta: "Growth engine chalu karo",
    popular: true,
  },
  {
    slug: "coaching",
    name: "Growth Sprint",
    audience: "Coaching, consultants, clinics",
    pitch: "Enquiry aaye aisa system — follow-up tak humara kaam.",
    features: [
      "Google search ads + landing page",
      "WhatsApp lead flow setup",
      "GMB listing + reviews",
      "Admission/enquiry tracking sheet",
    ],
    priceFrom: "₹9,999",
    priceNote: "per month + ad spend (aapke account se)",
    cta: "Enquiries laa do",
  },
  {
    slug: "creator",
    name: "Creator Kit",
    audience: "Creators, personal brands",
    pitch: "Aap face, hum back-stage — sab edit-post manage.",
    features: [
      "16 reels edits per month",
      "Thumbnails + covers design",
      "Hooks aur scripts support",
      "Posting + profile audit",
    ],
    priceFrom: "₹7,999",
    priceNote: "per month, month-to-month",
    cta: "Creator mode on karo",
  },
];
