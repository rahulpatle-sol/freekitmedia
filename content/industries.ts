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
      "Aapki expertise top-class hai, par online patients ko woh dikhti nahi — aur trust kisi aur ke paas chala jaata hai.",
    weDo: [
      "Doctor-led personal branding jo practice ka face bane",
      "Patient stories aur expertise reels jo trust build karein",
      "Google Business Profile aur review engine jo appointments laaye",
    ],
  },
  {
    slug: "jewellery",
    name: "Jewellery",
    problemLine:
      "Showroom premium hai, par online presence sirf festive season tak simat jaati hai — baaki saal growth ruki rehti hai.",
    weDo: [
      "Festive aur off-season campaigns ka year-round calendar",
      "Collection reels aur purity-trust content jo brand ko premium banaye",
      "Instagram ads jo walk-ins aur orders dono laaye",
    ],
  },
  {
    slug: "automobile",
    name: "Automobile",
    problemLine:
      "Showroom aane se pehle customer 10 baar online research kar chuka hota hai — deal wahin jeeti ya haari jaati hai.",
    weDo: [
      "Walkthrough aur test-drive reels jo showroom visit trigger karein",
      "Offer creatives aur price-band campaigns",
      "Lead campaigns — call aur WhatsApp click ads se seedha enquiry",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    problemLine:
      "Site visit se pehle buyer ka mann ban chuka hota hai — aur woh decision aapke online content se hi banta hai.",
    weDo: [
      "Cinematic property walkthroughs jo pehli nazar mein impress karein",
      "Investment aur lifestyle storytelling jo serious buyers ko khinche",
      "Location-targeted lead campaigns jo sahi audience tak pahunchein",
    ],
  },
  {
    slug: "fashion",
    name: "Fashion",
    problemLine:
      "Trends tez chalte hain, par consistent content calendar ke bina brand feed mein peeche reh jaata hai.",
    weDo: [
      "Monthly lookbook shoots jo brand ki identity set karein",
      "Trend-led content aur UGC collabs jo reach badhayein",
      "Instagram offer flow jo views ko sales mein badle",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    problemLine:
      "Offer kitna bhi strong ho, agar woh sirf dukaan tak seemit hai to poora shehar uska fayda nahi uthata.",
    weDo: [
      "Offer creatives aur boosted store campaigns",
      "New arrivals ka regular content jo customers ko wapas laaye",
      "Google Business aur local search optimisation — 'near me' mein sabse upar",
    ],
  },
  {
    slug: "hotel",
    name: "Hotel",
    problemLine:
      "Property shandaar hai, par online presentation weak ho to bookings seedha competitor ke paas chali jaati hain.",
    weDo: [
      "Property tours aur amenity reels jo stay ka experience bechein",
      "Seasonal offers aur festival packages jo occupancy badhayein",
      "Review strategy aur online reputation jo direct bookings laaye",
    ],
  },
  {
    slug: "education",
    name: "Education",
    problemLine:
      "Parents decision content aur results dekh kar lete hain — institute ki asli strength unhe dikhni chahiye.",
    weDo: [
      "Campus tours aur result storytelling jo credibility build karein",
      "Admission season campaigns jo enquiries ko admissions banayein",
      "Parent-trust videos aur alumni stories",
    ],
  },
  {
    slug: "personal-branding",
    name: "Personal Branding",
    problemLine:
      "Founder hi brand ka sabse powerful face hai — jab tak woh camera ke saamne nahi, authority adhoori hai.",
    weDo: [
      "Face-of-the-brand content series jo aapko category ka naam banaye",
      "Founder story aur interview snippets jo connection build karein",
      "LinkedIn aur Instagram positioning jo opportunities khud laaye",
    ],
  },
];