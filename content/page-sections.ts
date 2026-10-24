export const systemPillars = [
  {
    num: "01",
    name: "Visibility",
    desc: "Consistent content, strong local recall aur regular presence — ruk khichbe se silsile tootta hai, aur log bhool jaate hain.",
    outcome: "Log aapko dekhte hain.",
  },
  {
    num: "02",
    name: "Trust",
    desc: "Real customers, real reviews, real stories. Dikhawa nahi — proof hi bikta hai.",
    outcome: "Log aap par bharosa karte hain.",
  },
  {
    num: "03",
    name: "Conversion",
    desc: "Sahi message, sahi log, sahi waqt — enquiry se seedha sale tak.",
    outcome: "Log aapse kharidte hain.",
  },
] as const;

export const problem = {
  headline: "Customer aapke paas aane se pehle online decide kar leta hai.",
  text: "Aaj ka customer pehle Google aur Instagram par dekhta hai: reviews, videos, offers — aur phir call ya visit karta hai. Zyadatar businesses ke paas product ki kami nahi hoti; kami hoti hai dikhne, bharose aur pehchaan ki.",
  line: "Achhe business ko achhi presentation chahiye, tabhi wo ek brand banta hai.",
} as const;

export const losses = [
  {
    title: "Low visibility",
    text: "Log aapko dekhte hi nahi — ya dekhte hain, par yaad nahi rakhte.",
  },
  {
    title: "Weak trust signals",
    text: "Reviews, testimonials aur real customer stories online kahin nahi dikhte.",
  },
  {
    title: "Offer sirf dukaan tak",
    text: "Naye customers tak offer pahunchta hi nahi, kyunki online presence nahi hai.",
  },
  {
    title: "Local search mein nazar nahi",
    text: "Inactive Google & Instagram profile = kam calls, kam bharosa.",
  },
] as const;

export const noShortcuts = {
  title: "No shortcuts. No vanity.",
  items: [
    {
      title: "Random post nahi",
      text: "Bina objective ke random post ya reel hum nahi banate. Har content piece ke peeche ek kaam hai.",
    },
    {
      title: "Fake vanity nahi",
      text: "Fake followers ya sirf likes ka game nahi. Likes bikte nahi, enquiries bikti hain.",
    },
    {
      title: "Jhoota vaada nahi",
      text: "Ek raat mein result ka jhootha vaada nahi. Jo kehte hain, report mein dikhaate hain.",
    },
  ],
  line: "Har campaign track hota hai, test hota hai, aur behtar banaya jaata hai.",
} as const;

export const process = {
  headline: "Pehle aapka business samajhte hain. Phir build karte hain.",
  sub: "Ek clear 6-step process, jo har mahine numbers mein report hota hai.",
  steps: [
    {
      num: "1",
      title: "Business samajhna",
      text: "Product, customer, competition aur aapki current online position.",
    },
    {
      num: "2",
      title: "Strategy banana",
      text: "Aapke business aur sheher ke hisaab se — kabhi template nahi.",
    },
    {
      num: "3",
      title: "Shoot & content",
      text: "Monthly content calendar, ad creatives — sab in-house.",
    },
    {
      num: "4",
      title: "Execution",
      text: "Posting, ads, Google profile aur print support — sab live.",
    },
    {
      num: "5",
      title: "Track & optimise",
      text: "Har campaign data deta hai; jo chal raha hai, use scale karte hain.",
    },
    {
      num: "6",
      title: "Monthly review",
      text: "Ek clear report aur agle mahine ka poora plan.",
    },
  ],
  grows: [
    {
      name: "Visibility",
      text: "Reach, views, local searches",
      icon: "eye",
    },
    {
      name: "Branding",
      text: "Pehchaan aur customer ka bharosa",
      icon: "heart",
    },
    {
      name: "Leads & Sales",
      text: "Quality enquiries, calls aur footfall",
      icon: "trendingUp",
    },
  ],
  report: {
    title: "Monthly report mein kya dikhta hai",
    items: [
      "Reach aur views",
      "Enquiries aur calls",
      "Cost per enquiry",
      "Campaign-wise performance",
    ],
    note: "Sab transparent — numbers chhupe nahi hote.",
  },
  honesty: {
    title: "Marketing jaadu nahi hai.",
    text: "Enquiries jaldi aa sakti hain, lekin asli farak strategy aur consistency ke saath 3 mahine mein dikhta hai.",
    line: "Timeline par honest. Progress par relentless.",
  },
} as const;

export const proof = {
  headline: "100+ brands ne bharosa kiya",
  sub: "Healthcare se Jewellery, Real Estate se Fashion tak — sabse pehle visibility, phir bharosa, aur tabhi sale.",
  testimonial: {
    quote: "Professional enough and know their job. Best agency across Chhattisgarh.",
    by: "Dr Anurag Sharma",
    role: "Healthcare, Bilaspur",
  },
  result: {
    tag: "Result highlight",
    value: "₹6,00,000+",
    line: "ka order, ek hi din mein, sirf Instagram ads se.",
  },
  videoTestimonials: [
    {
      src: "/videos/testimonial-1.mp4",
      poster: "/videos/testimonial-1-poster.jpg",
      name: "Dummy video testimonial 1",
      role: "Yahan real client video aayegi",
      city: "Bilaspur",
    },
    {
      src: "/videos/testimonial-2.mp4",
      poster: "/videos/testimonial-2-poster.jpg",
      name: "Dummy video testimonial 2",
      role: "Yahan real client video aayegi",
      city: "Ambikapur",
    },
  ],
  industriesNote:
    "Industries: Healthcare, Jewellery, Automobile, Real Estate, Fashion, Retail, Hotel, Education, Personal Branding.",
} as const;

export const comparison = {
  headline: "Hum vs typical agency",
  sub: "Fark bol ke nahi, system se aata hai. Honest comparison:",
  rows: [
    {
      label: "Services",
      us: "Sab ek jagah — content, ads, web, print",
      them: "Har kaam ke alag vendors",
    },
    {
      label: "Reporting",
      us: "Monthly numbers, transparent",
      them: "Vague updates, screenshots",
    },
    {
      label: "Strategy",
      us: "City & business ke hisaab se, never template",
      them: "Copy-paste plan",
    },
    {
      label: "Focus",
      us: "Enquiries & sales",
      them: "Likes & followers",
    },
    {
      label: "Team",
      us: "In-house shoot + ads + web",
      them: "Outsourced zerre",
    },
    {
      label: "Accountability",
      us: "Ek team, ek jawab",
      them: "Blame game",
    },
  ] as const,
};

export const pitchItems = [
  {
    slug: "jewellery-retail",
    who: "Jewellery & Retail",
    problem:
      "Showroom festive ke daura hi chalta hai; baaki mahino customers online kahin dikhte nahi.",
    weDo: "Festive + off-season campaigns, purity/trust content aur collection reels — taaki jab customer sona soche, aapka naam pehle aaye.",
    cta: "Apna festive plan discuss karo",
  },
  {
    slug: "healthcare-doctors",
    who: "Healthcare & Doctors",
    problem:
      "Achhe doctor ka naam sirf muh-bol ke pahunchta hai; online reviews aur profile weak hote hain.",
    weDo: "Doctor personal branding, patient stories, aur Google My Business optimisation — bharosa pehle, appointment baad mein.",
    cta: "Explore the healthcare example",
  },
  {
    slug: "real-estate-automobile",
    who: "Real Estate & Automobile",
    problem:
      "Big-ticket purchase hai — customer site pe aane se pehle 10 baar online check kar chuka hota hai.",
    weDo: "Walkthrough videos, test-drive stories aur offer campaigns jo seedha walk-in karwate hain.",
    cta: "Walk-in badaane ki strategy chuno",
  },
  {
    slug: "education-hotel",
    who: "Education & Hotel",
    problem:
      "Admission aur booking ka faisla content aur reviews se hota hai — jo abhi online dikh nahi raha.",
    weDo: "Campus/property tours, result aur reviews ki storytelling, seasonal offer campaigns.",
    cta: "Explore the admissions and booking plan",
  },
  {
    slug: "founders-personal-brand",
    who: "Founders & Personal Brands",
    problem:
      "Founder khud brand ka best influencer hai, par camera ke peeche chhota ho gaya hai.",
    weDo: "Face-of-the-brand content, founder story, interview snippets aur LinkedIn/Instagram presence.",
    cta: "Explore the founder branding roadmap",
  },
] as const;

export const faqs = [
  {
    q: "Kitne din mein result dikhega?",
    a: "Enquiries jaldi aa sakti hain — lekin asli farak strategy aur consistency ke saath 3 mahine mein hota hai. Timeline par hum pehle hi honest hote hain, jhootha vaada nahi karte.",
  },
  {
    q: "Pricing kitni hoti hai?",
    a: "Business, sheher aur pace ke hisaab se package banta hai. Free audit ke baad aapko WhatsApp par ek clear quotation milti hai — koi hidden charge nahi.",
  },
  {
    q: "Kya sirf ek service le sakte hain?",
    a: "Haan — koi sirf ads le leta hai, koi sirf reels. Par asli leverage tab milti hai jab visibility aur trust dono saath chalein.",
  },
  {
    q: "Offline print bhi karte ho?",
    a: "Haan. Hoarding, banner, brochure, festive print design aur marketing consultation — sab online strategy ke saath hi chalta hai. One partner, online & offline.",
  },
  {
    q: "Shehar ke bahar kaam karte ho?",
    a: "Core hamara Chhattisgarh hai — Bilaspur, Ambikapur, Korba. CG ke bahar bhi selective online clients lete hain.",
  },
  {
    q: "Report kaisi milti hai?",
    a: "Har mahine ek clear report: reach, enquiries aur calls, cost per enquiry aur campaign-wise performance. Numbers chhupe nahi hote.",
  },
  {
    q: "Free audit mein exactly kya hota hai?",
    a: "30 minute — aapke office par ya online. Hum aapki online presence (Google, Instagram, website) check karte hain: customer aapko kahan miss kar raha hai, aur sabse pehle kya theek karna hai. Aapka business samajh wahi main kaam hai.",
  },
] as const;
