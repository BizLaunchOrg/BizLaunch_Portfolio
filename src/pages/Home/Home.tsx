/**
 * Home page: all sections in order.
 * Each section is a separate component for clean, maintainable code.
 */
import { HeroSection } from "../../Components/HeroSection/HeroSection";
// import { TrustedBySection } from "../../Components/TrustedBySection/TrustedBySection";
import { WhySection } from "../../Components/WhySection/WhySection";
import { FeaturesSection } from "../../Components/FeaturesSection/FeaturesSection";
import { PricingSection } from "../../Components/PricingSection/PricingSection";
import { HowItWorksSection } from "../../Components/HowItWorksSection/HowItWorksSection";
// import { StatsSection } from "../../Components/StatsSection/StatsSection";
import { WorkSection } from "../../Components/WorkSection/WorkSection";
import { FAQSection } from "../../Components/FAQSection/FAQSection";
import { FinalCTASection } from "../../Components/FinalCTASection/FinalCTASection";
import { ContactSection } from "../../Components/ContactSection/ContactSection";

export function Home() {
  return (
    <>
      <HeroSection />
      {/* <TrustedBySection /> */}
      <WhySection />
      <FeaturesSection />
      <PricingSection />
      <HowItWorksSection />
      {/* <StatsSection /> */}
      <WorkSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
    </>
  );
}
