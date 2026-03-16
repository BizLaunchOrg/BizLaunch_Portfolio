/**
 * Home page: all sections in order.
 * Each section is a separate component for clean, maintainable code.
 */
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { TrustedBySection } from "../../components/TrustedBySection/TrustedBySection";
import { WhySection } from "../../components/WhySection/WhySection";
import { FeaturesSection } from "../../components/FeaturesSection/FeaturesSection";
import { PricingSection } from "../../components/PricingSection/PricingSection";
import { HowItWorksSection } from "../../components/HowItWorksSection/HowItWorksSection";
import { StatsSection } from "../../components/StatsSection/StatsSection";
import { WorkSection } from "../../components/WorkSection/WorkSection";
import { FAQSection } from "../../components/FAQSection/FAQSection";
import { FinalCTASection } from "../../components/FinalCTASection/FinalCTASection";
import { ContactSection } from "../../components/ContactSection/ContactSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <WhySection />
      <FeaturesSection />
      <PricingSection />
      <HowItWorksSection />
      <StatsSection />
      <WorkSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
    </>
  );
}
