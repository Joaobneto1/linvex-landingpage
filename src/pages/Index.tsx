import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Cases } from "@/components/Cases";
import { Services } from "@/components/Services";
import { Technologies } from "@/components/Technologies";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { QuoteModal } from "@/components/QuoteModal";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      
      <main>
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <About />
        <Cases />
        <Services />
        <Technologies />
        <Testimonials />
        <Process />
        <FinalCTA onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      </main>

      <Footer />
      <WhatsAppButton />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
};

export default Index;
