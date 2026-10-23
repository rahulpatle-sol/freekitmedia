import type { IconName } from "@/components/ui/Icon";

export type Service = {
  slug: string;
  num: string;
  icon: IconName;
  short: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "content-creation-branding",
    num: "01",
    icon: "camera",
    short: "Reels, shoots, brand identity",
    title: "Content Creation & Branding",
    description:
      "Reels, photo & video shoots, brand identity aur creatives. In-house team, in-house setup.",
    points: [
      "Monthly reels aur short video",
      "Product aur lifestyle photo shoots",
      "Logo, brand identity aur print creatives",
      "Brand guideline — jo bhi post karbaao, look same rahe",
      "In-house studio aur editors",
    ],
  },
  {
    slug: "meta-google-ads",
    num: "02",
    icon: "megaphone",
    short: "Targeted campaigns, real enquiries",
    title: "Meta Ads & Google Ads",
    description:
      "Instagram, Facebook aur Google par targeted campaigns — awareness, offer aur enquiry ke liye.",
    points: [
      "Instagram & Facebook ads (awareness, offer, enquiry)",
      "Google Search & Display campaigns",
      "Audience research aapke sheher ke hisaab se",
      "Ad creative in-house, data pe test hota",
      "Cost-per-enquiry track hota hai, sirf likes nahi",
    ],
  },
  {
    slug: "website-social-media",
    num: "03",
    icon: "smartphone",
    short: "Fast website + active profiles",
    title: "Website & Social Media Management",
    description:
      "Posting, captions, profile optimisation, Google My Business aur ek fast, enquiry-ready website.",
    points: [
      "Fast, mobile-first website (enquiry-ready)",
      "Instagram & Facebook ka monthly calendar",
      "Captions, hashtags aur profile optimisation",
      "Google My Business — posts, reviews, local search",
      "WhatsApp enquiry flow direct site se",
    ],
  },
  {
    slug: "personal-branding-influencer",
    num: "04",
    icon: "sparkles",
    short: "Founder face = brand face",
    title: "Personal Branding & Influencer Marketing",
    description:
      "Founder ya doctor ko brand ka chehra banana, plus influencer & UGC collaborations jo bharosa badhate hain.",
    points: [
      "Founder/doctor ki personal brand strategy",
      "Face-of-the-brand content shoots",
      "Influencer collabs (local reach, real audiences)",
      "UGC content jo ads mein bhi chalta hai",
      "Page par authority — interviews, tips, stories",
    ],
  },
];

export const offlineSupport = {
  title: "Offline branding bhi, wahi ek team se",
  text: "Hoarding, banner, brochure, festive print design aur marketing consultation — online strategy ke saath hi chalta hai, alag vendor nahi.",
  line: "One partner. Online & offline. Ek team. Ek strategy. Ek jagah puri accountability.",
};
