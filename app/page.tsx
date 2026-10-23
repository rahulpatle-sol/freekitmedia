import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { SystemSection } from "@/components/sections/SystemSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { NoShortcuts } from "@/components/sections/NoShortcuts";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PitchSection } from "@/components/sections/PitchSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Cursor } from "@/components/sections/Cursor";
import { FloatingWhatsApp, StickyMobileBar } from "@/components/sections/ReachBars";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <PartnerMarquee />
        <SystemSection />
        <ProblemSection />
        <ServicesSection />
        <NoShortcuts />
        <ProcessSection />
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
