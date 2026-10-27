
import type { Block } from "@/lib/content/types";

export type Partner = {
  slug: string;
  name: string;
  logo?: string;
  franchise?: boolean;
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
    franchise: true,
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
    franchise: true,
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
    slug: "balaji-jewellers",
    name: "Balaji Jewellers",
    logo: "/images/partners/Balaji_Jewellers_Logo.avif",
    industry: "Jewellery",
    city: "Chhattisgarh",
    oneLine: "Store offers aur festive collections ki digital reach.",
    whatWeDid: "Offer creatives, store reels aur local awareness campaigns.",
    featured: false,
    blocks: [
      { type: "heading", text: "Balaji Jewellers", level: 2 },
      {
        type: "text",
        text: "Balaji Jewellers ke liye store offers, festive collections aur local customers tak pahunchne wale campaigns par kaam kiya.",
      },
    ],
  },
  {
    slug: "royal-enfield",
    name: "Royal Enfield",
    logo: "/images/partners/royal-enfield.png",
    franchise: true,
    industry: "Automotive",
    city: "Chhattisgarh",
    oneLine: "Ride events aur community campaigns ki digital presence.",
    whatWeDid: "Event creatives, reels aur community engagement campaigns.",
    featured: false,
    blocks: [
      { type: "heading", text: "Royal Enfield", level: 2 },
      {
        type: "text",
        text: "Royal Enfield ke ride events aur showrooms ke liye creatives, reels aur community-first digital campaigns par kaam kiya.",
      },
    ],
  },


{
slug: "Suzuki",
name: "Suzuki ",
logo: "/images/partners/suzuki.png",
franchise: true,
industry: "Automotive",
city: "Chhattisgarh",
oneLine: "Motorcycle franchise aur local brand visibility.",
whatWeDid: "Digital brand visibility and local marketing support.",
featured: false,
blocks: [{ type: "heading", text: "Suzuki Motorcycles Franchise", level: 2 }],
}

,
  {
    slug: "pathosure",
    name: "Pathosure",
    logo: "/images/partners/Pathosure Lab Post (1).png",
    industry: "Education",
    city: "Chhattisgarh",
    oneLine: "Students aur parents ke liye digital awareness.",
    whatWeDid:
      "Learning content aur admission campaigns ki digital presentation.",
    featured: false,
    blocks: [
      { type: "heading", text: "Pathosure", level: 2 },
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
    logo: "/images/partners/Mixit.png",
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
  {
    slug: "gd-goenka",
    name: "GD Goenka ",
    logo: "/images/partners/gdgoenka.png",
    franchise: true,
    industry: "Education",
    city: "Chhattisgarh",
    oneLine: "Education franchise and local brand visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "GD Goenka Franchise", level: 2 }],
  },
  {
    slug: "sankalp-hospital",
    name: "Sankalp Hospital",
    logo: "/images/partners/sankalp hospital logo.png",
    industry: "Healthcare",
    city: "Chhattisgarh",
    oneLine: "Healthcare brand and local community visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "Sankalp Hospital", level: 2 }],
  },
  {
    slug: "mrm-hospital",
    name: "MRM Hospital",
        logo: "/images/partners/MRM H Logo.png",
    industry: "Healthcare",
    city: "Chhattisgarh",
    oneLine: "Healthcare brand and local community visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "MRM Hospital", level: 2 }],
  },
  {
    slug: "vasundhara-builders",
    name: "Vasundhara Builders",
    logo: "/images/partners/vasundhara logo.png",
    industry: "Real Estate",
    city: "Chhattisgarh",
    oneLine: "Real estate brand and local market visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "Vasundhara Builders", level: 2 }],
  },

  {
    slug: "renault",
    name: "Renault",
    franchise: true,
    logo: "/images/partners/renault1.png",
    industry: "Automotive",
    city: "Chhattisgarh",
    oneLine: "Automotive franchise and local brand visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "Renault Franchise", level: 2 }],
  },
];

export function featuredPartners(partnersList: Partner[]) {
  return partnersList.filter((partner) => partner.featured);
}



//  partners with franchise property set to true
//  if any  updates thsi file is fine
 // 2 missing lofo  : sankal  ,vasundhara