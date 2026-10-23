export const site = {
  name: "FreeKit Media",
  url: "https://www.freekitmedia.com",
  description:
    "FreeKit Media — all-in-one digital marketing agency. Website, social media, Meta ads, Google ads, content aur Google My Business, ek hi jagah se sambhale.",
  legalLine: "Govt. registered digital marketing company (Udyam)",
  years: "2026",
  whatsapp: {
    number: "919000000000",
    display: "+91 90000 00000",
    ctaText: "Hi FreeKit Media! Mujhe business badhane ke liye strategy call chahiye.",
  },
  email: "hello@freekitmedia.com",
  socials: {
    instagram: "https://instagram.com/freekitmedia",
    youtube: "https://youtube.com/@freekitmedia",
    linkedin: "https://www.linkedin.com/company/freekitmedia",
  },
  heroTrust: [
    { icon: "shield", label: "Govt. registered agency" },
    { icon: "users", label: "200+ businesses handled" },
    { icon: "star", label: "4.9/5 client rating" },
  ] as const satisfies ReadonlyArray<
    { icon: "shield" | "users" | "star"; label: string }
  >,
  heroBadge: {
    label: "All-in-one digital growth partner",
    href: "#services",
  },
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
] as const;

export const heroHeading: ReadonlyArray<
  { text: string; highlight?: boolean } | "\n"
> = [
  { text: "Business badhana hai?" },
  "\n",
  { text: "Ek hi jagah se", highlight: true },
  { text: "sab sambhalo." },
];
