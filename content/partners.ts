
import type { Block } from "@/lib/content/types";

export type Partner = {
  slug: string;
  name: string;
  logo: string;
  industry: string;
  city: string;
  oneLine: string;
  whatWeDid: string;
  featured: boolean;
  blocks: Block[];
};

export const partners: Partner[] = [
  {
    slug: "tanishq",
    name: "Tanishq",
    logo: "/images/partners/tanishq.svg",
    industry: "Jewellery",
    city: "Bilaspur",
    oneLine: "Festive campaigns aur store visibility.",
    whatWeDid:
      "Festive collections ke ads, store reels, offer creatives aur local awareness campaigns.",
    featured: true,
    blocks: [
      { type: "heading", text: "Tanishq — Bilaspur", level: 2 },
      {
        type: "text",
        text: "Tanishq ka Bilaspur franchise hamara partner brand hai. Franchise marketing ka focus local customers tak pahunchna aur store visibility badhana hai.",
      },
      {
        type: "stats",
        items: [
          { value: "Festive", label: "campaigns" },
          { value: "Reels", label: "store collections ke liye" },
          { value: "Local", label: "awareness campaigns" },
        ],
      },
      {
        type: "callout",
        title: "Jo humne kiya",
        text: "Festive campaigns, collection reels, offer creatives aur local targeted ads.",
      },
    ],
  },
  {
    slug: "kisna",
    name: "Kisna",
    logo: "/images/partners/kisna.png",
    industry: "Jewellery",
    city: "Bilaspur",
    oneLine: "Franchise aur daily-wear collection ki digital presentation.",
    whatWeDid:
      "Daily-wear collections ke content creatives, offer campaigns aur store reels.",
    featured: true,
    blocks: [
      { type: "heading", text: "Kisna — Bilaspur", level: 2 },
      {
        type: "text",
        text: "Kisna ki daily-wear aur silver collections ke liye regular content, festive offers aur local store campaigns par kaam kiya.",
      },
      {
        type: "quote",
        text: "Sona bikta hai bharose se — bharosa dikhne se banta hai.",
        by: "FreeKit Media — Jewellery playbook",
      },
    ],
  },
  {
    slug: "pathsure",
    name: "Pathsure",
    logo: "/images/partners/pathsure.svg",
    industry: "Education",
    city: "Chhattisgarh",
    oneLine: "Students aur parents ke liye digital awareness.",
    whatWeDid:
      "Learning content aur admission campaigns ki digital presentation.",
    featured: false,
    blocks: [
      { type: "heading", text: "Pathsure", level: 2 },
      {
        type: "text",
        text: "Education brand ke liye students aur parents tak pahunchne ke liye content aur awareness campaigns par kaam kiya.",
      },
    ],
  },
  {
    slug: "next-world",
    name: "Next World",
    logo: "/images/partners/next-world.jpg",
    industry: "Business Services",
    city: "Chhattisgarh",
    oneLine: "Brand ki digital visibility aur creative support.",
    whatWeDid: "Social media presence aur brand creatives.",
    featured: false,
    blocks: [
      { type: "heading", text: "Next World", level: 2 },
      {
        type: "text",
        text: "Brand visibility aur creative support ke liye digital campaigns aur creatives par kaam kiya.",
      },
    ],
  },
  {
    slug: "mixxit",
    name: "Mixxit",
    logo: "/images/partners/mixxit.svg",
    industry: "Retail",
    city: "Chhattisgarh",
    oneLine: "Retail offers aur store promotions ka digital push.",
    whatWeDid: "Offer creatives aur store promotion campaigns.",
    featured: false,
    blocks: [
      { type: "heading", text: "Mixxit", level: 2 },
      {
        type: "text",
        text: "Retail offers aur store promotions ke liye digital creatives aur campaigns par kaam kiya.",
      },
    ],
  },
];

export function featuredPartners(partnersList: Partner[]) {
  return partnersList.filter((partner) => partner.featured);
}
