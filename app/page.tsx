import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceHoverPreview } from "@/components/sections/ServicesSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PitchSection } from "@/components/sections/PitchSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Cursor } from "@/components/sections/Cursor";
import { FloatingWhatsApp, StickyMobileBar } from "@/components/sections/ReachBars";
import { Footer } from "@/components/sections/Footer";
import { Testimonials } from "@/components/sections/Testimonials";
// import { SystemSection } from "@/components/sections/SystemSection";
import { faqs } from "@/content/page-sections";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Chhattisgarh — Content, Ads, Website, Branding",
  description:
    "FreeKit Media is Chhattisgarh ka full-service digital marketing agency. Content, Meta & Google ads, website aur social media management — bilkul ek in-house team se. Bilaspur, Ambikapur, Korba.",
  keywords: [
    "digital marketing agency Bilaspur",
    "digital marketing agency Chhattisgarh",
    "social media management Korba",
    "Instagram ads Ambikapur",
    "content creation agency",
  ],
  openGraph: {
    title: "FreeKit Media — Digital Marketing Agency in Chhattisgarh",
    description:
      "Poora marketing department, ek hi chhat ke neeche. Content, ads, website aur branding — sab ek team se.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <main id="main" className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <PartnerMarquee />
        {/* <SystemSection /> */}
        <Testimonials />

        {/* <ProblemSection /> */}
         <ProcessSection />
        <ServiceHoverPreview />
        {/* <NoShortcuts /> */}
       
        <ProofSection />
        <ComparisonSection />
        <PitchSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileBar />
      <FloatingWhatsApp />
      <Cursor />
    </>
  );
}
