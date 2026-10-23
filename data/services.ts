import type { IconName } from "@/components/ui/Icon";

export type Service = {
  slug: string;
  icon: IconName;
  short: string;
  title: string;
  description: string;
  points: [string, string, string];
};

export const services: Service[] = [
  {
    slug: "website-development",
    icon: "globe",
    short: "Website",
    title: "Website & Landing Pages",
    description: "Fast, mobile-first website jo Google pe dhoonde aur customer ko customer bana de.",
    points: [
      "2 hafte mein launch",
      "SEO-ready structure",
      "WhatsApp lead button",
    ],
  },
  {
    slug: "social-media",
    icon: "users",
    short: "Social Media",
    title: "Social Media Handling",
    description: "Posts, reels, replies — aapki insta aur facebook ka daily dose, branding ke saath.",
    points: [
      "Content calendar",
      "Reels + posts editing",
      "DM aur comment handling",
    ],
  },
  {
    slug: "meta-ads",
    icon: "megaphone",
    short: "Meta Ads",
    title: "Meta Ads (FB + Insta)",
    description: "Sahi customer tak ads, kachra spend nahin. Aapke apne ad account pe, full control.",
    points: [
      "Audience research",
      "Creative + copy testing",
      "Budget: aapke haath",
    ],
  },
  {
    slug: "google-ads",
    icon: "search",
    short: "Google Ads",
    title: "Google Ads",
    description: "Jab customer search kare, aapka naam sabse pehle dikhe. Search, Shopping, YouTube.",
    points: [
      "Keyword strategy",
      "Conversion tracking",
      "Negative keywords raksha",
    ],
  },
  {
    slug: "content-creation",
    icon: "pencil",
    short: "Content",
    title: "Content Creation",
    description: "Reels, posters, product shots, scripts — camera se customer tak poora journey.",
    points: [
      "Monthly shoot plan",
      "Scripts aur hooks",
      "Brand-consistent design",
    ],
  },
  {
    slug: "google-my-business",
    icon: "mapPin",
    short: "GMB",
    title: "Google My Business",
    description: "Maps listing, reviews, local rank — jab aap dhoonde 'paas ke best', aap dikho.",
    points: [
      "Listing optimise",
      "Review management",
      "Local keywords update",
    ],
  },
];
