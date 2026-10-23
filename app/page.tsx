import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandDeals } from "@/components/sections/BrandDeals";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatWeProvide } from "@/components/sections/WhatWeProvide";
import { Comparison } from "@/components/sections/Comparison";
import { Pitch } from "@/components/sections/Pitch";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <BrandDeals />
        <Testimonials />
        <HowItWorks />
        <WhatWeProvide />
        <Comparison />
        <Pitch />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
