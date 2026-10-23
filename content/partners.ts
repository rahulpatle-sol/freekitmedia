import type { Block } from "@/lib/content/types";

export type Partner = {
  slug: string;
  name: string;
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
    industry: "Jewellery",
    city: "Bilaspur",
    oneLine: "Franchise ke liye festive campaigns aur store visibility.",
    whatWeDid:
      "Festive collections ke ads, store ke reels, offer creatives aur local awareness ki campaigns.",
    featured: true,
    blocks: [
      { type: "heading", text: "Tanishq — Bilaspur", level: 2 },
      {
        type: "text",
        text: "Tanishq ka Bilaspur franchise hamara partner brand hai. Franchise marketing ka sawaal simple hota hai — brand toh sab jante hain, shehar mein store tak pahunchana hota hai. Hamaara kaam wahi hai: awareness toh local sale tak.",
      },
      {
        type: "stats",
        items: [
          { value: "Festive", label: "campaign deal hota hai har saal" },
          { value: "Reels", label: "store ki collections ke" },
          { value: "Local", label: "awareness ki campaigns" },
        ],
      },
      {
        type: "callout",
        title: "Jo humne kiya",
        text: "Festive season campaigns, new collection reels, offer creatives aur local targeted ads — sab store ki walk-in ki support ke liye.",
      },
    ],
  },
  {
    slug: "kisna",
    name: "Kisna",
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
        text: "Kisna ki daily-wear aur silver collections ke liye regular content aur festive offers. Store ki walk-in ke support ke liye local campaigns bhi chalai.",
      },
      {
        type: "quote",
        text: "Sona bikta hai bharose se — bharosa dikh se banta hai.",
        by: "FreeKit Media — Jewellery playbook",
      },
    ],
  },
  {
    slug: "pathsure",
    name: "Pathsure",
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
        text: "Education brand ke saath students aur parents tak pahunchne kar content aur campaigns.",
      },
    ],
  },
  {
    slug: "next-world",
    name: "Next World",
    industry: "Business Services",
    city: "Chhattisgarh",
    oneLine: "Brand ki digital visibility aur creative support.",
    whatWeDid: "Social media presence aur brand creatives.",
    featured: false,
    blocks: [
      { type: "heading", text: "Next World", level: 2 },
      {
        type: "text",
        text: "Brand visibility aur creative support ke liye digital campaigns.",
      },
    ],
  },
  {
    slug: "mixxit",
    name: "Mixxit",
    industry: "Retail",
    city: "Chhattisgarh",
    oneLine: "Retail offers aur store promotions ka digital push.",
    whatWeDid: "Offer creatives aur store promotion campaigns.",
    featured: false,
    blocks: [
      { type: "heading", text: "Mixxit", level: 2 },
      {
        type: "text",
        text: "Retail offers aur store promotions ke liye digital creatives aur campaigns.",
      },
    ],
  },
];

export function featuredPartners(partnersList: Partner[]) {
  return partnersList.filter((p) => p.featured);
}
