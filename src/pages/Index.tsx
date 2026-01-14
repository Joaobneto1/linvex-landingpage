import { HeroSection } from "@/components/redesign/HeroSection";
import { SolutionsSection } from "@/components/redesign/SolutionsSection";
import { CTAGridSection } from "@/components/redesign/CTAGridSection";
import { PricingSection } from "@/components/redesign/PricingSection";
import { AboutSection } from "@/components/redesign/AboutSection";
import { TestimonialsSection } from "@/components/redesign/TestimonialsSection";
import { FAQSection } from "@/components/redesign/FAQSection";
import { FooterSection } from "@/components/redesign/FooterSection";
import { HeaderDark } from "@/components/redesign/HeaderDark";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <HeaderDark />
      
      <main>
        <HeroSection />
        <SolutionsSection />
        <CTAGridSection />
        <PricingSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
