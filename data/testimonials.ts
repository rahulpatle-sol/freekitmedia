export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  business: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pehle teen alag vendor the — website wale, ads wale, posts wale. FreeKit ke aane ke baad ek WhatsApp group mein sab lag gaya, aur 4 mahine mein walk-ins double ho gaye.",
    name: "Ritesh Ahuja",
    role: "Owner",
    business: "ChaiThela, Lucknow",
    image: "/images/person-3.jpg",
  },
  {
    quote:
      "Meta ads pe pehle ₹60k jalta tha useless. Meri team ne pehle ad account saaf kiya, phir creative test kiya — ROAS 1.8 se 3.4 ho gaya, wahi budget mein.",
    name: "Ananya Verma",
    role: "Founder",
    business: "Satva Skincare, Jaipur",
    image: "/images/person-2.jpg",
  },
  {
    quote:
      "March admissions ke liye Google ads chalaye the. 140 enquiry aayi, 21 admission hui. Report itna saaf tha ki partner trust ho gaya — ab wahi roll-over hai.",
    name: "Pranav Deshmukh",
    role: "Director",
    business: "StudySprint, Indore",
    image: "/images/person-4.jpg",
  },
  {
    quote:
      "Content camera ki tension khatam. Monthly shoot day plan, editing, thumnails, posting — mujhe sirf face karna hota hai. 3 mahine mein 12k se 58k followers.",
    name: "Simran Gill",
    role: "Creator",
    business: "Fitness content",
    image: "/images/person-1.jpg",
  },
];
