import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Cases } from "@/components/Cases";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Cases />
        <Services />
        <Testimonials />
        <Process />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
