export type ComparisonRow = {
  label: string;
  us: string;
  them: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Work distribution",
    us: "Ek team: website, ads, social, content",
    them: "Har service ke liye alag-chhota vendor",
  },
  {
    label: "Pricing clarity",
    us: "Likhit plan + fixed monthly fee",
    them: "Rate baad mein aata hai, phir surprise",
  },
  {
    label: "Ad spend ownership",
    us: "Aapke ad account, aapka data",
    them: "Agency ka account — exit pe data gaya",
  },
  {
    label: "Reporting",
    us: "Ek-page monthly report, easy language",
    them: "Confusing screenshots, proper nahi",
  },
  {
    label: "Point of contact",
    us: "Ek senior point, WhatsApp pe reply",
    them: "3 managers, ek jawab nahi",
  },
  {
    label: "Growth mindset",
    us: "Targets pe kaam, report mein proof",
    them: "Post-post-post, results kahin nahi",
  },
];

export const comparisonFootnote =
  "Feedback 40+ active FreeKit clients se — Oct 2025 survey.";
