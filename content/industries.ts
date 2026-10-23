export type Industry = {
  slug: string;
  name: string;
  problemLine: string;
  weDo: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    problemLine:
      "Achhe doctor ka naam sirf muh-bol ke pahunchta hai; online reviews aur profile weak hote hain.",
    weDo: [
      "Doctor personal branding — face of the practice",
      "Patient stories aur expertise reels",
      "Google My Business aur reviews ka management",
    ],
  },
  {
    slug: "jewellery",
    name: "Jewellery",
    problemLine:
      "Showroom sirf festive tak zinda dikhta hai; baaki mahino online presence zero hoti hai.",
    weDo: [
      "Festive + off-season campaigns",
      "Collection reels aur purity/trust content",
      "Instagram ads se walk-in aur order",
    ],
  },
  {
    slug: "automobile",
    name: "Automobile",
    problemLine:
      "Big-ticket purchase — customer showroom aane se pehle 10 baar online check kar chuka hota hai.",
    weDo: [
      "Walkthrough + test-drive reels",
      "Offer creatives aur price-band campaigns",
      "Lead campaigns (call/WhatsApp click ads)",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    problemLine:
      "Site visit se pehle customer ka pehla impression online content se hi banta hai.",
    weDo: [
      "Property walkthrough videos",
      "Investment aur lifestyle storytelling",
      "Location-targeted lead campaigns",
    ],
  },
  {
    slug: "fashion",
    name: "Fashion",
    problemLine:
      "Trend fast hai, par content calendar nahi — isliye feed thakhi lagti hai.",
    weDo: [
      "Monthly lookbook shoots",
      "Trend content aur UGC collabs",
      "Offers ka Instagram flow",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    problemLine:
      "Offer sirf dukaan tak simeet hoti hai; poore shehar tak pahunchti hi nahi.",
    weDo: [
      "Offer creatives aur boosted store campaigns",
      "New arrivals ka regular content",
      "GMB + local search optimisation",
    ],
  },
  {
    slug: "hotel",
    name: "Hotel",
    problemLine:
      "Rooms acche hain, par online presentation ke peeche hi bookings lagte hain.",
    weDo: [
      "Property tours aur amenity reels",
      "Seasonal offers aur festival packages",
      "Review strategy aur online presence",
    ],
  },
  {
    slug: "education",
    name: "Education",
    problemLine:
      "Admission ka faisla parents content aur results dekh kar karte hain — jo abhi dikhta hi nahi.",
    weDo: [
      "Campus tours aur result storytelling",
      "Admission season campaigns",
      "Parent-trust videos aur alumni stories",
    ],
  },
  {
    slug: "personal-branding",
    name: "Personal Branding",
    problemLine:
      "Founder khud brand ka best face hai, par camera se peeche hai.",
    weDo: [
      "Face-of-the-brand content series",
      "Founder story aur interview snippets",
      "LinkedIn + Instagram ki positioning",
    ],
  },
];
