import { HeroSection } from "@/components/home/HeroSection";
import { ParaQuemSection } from "@/components/home/ParaQuemSection";
import { ParaQuemNaoSection } from "@/components/home/ParaQuemNaoSection";
import { ProblemaSection } from "@/components/home/ProblemaSection";
import { SolucaoSection } from "@/components/home/SolucaoSection";
import { ComoFuncionaSection } from "@/components/home/ComoFuncionaSection";
import { DiferenciaisSection } from "@/components/home/DiferenciaisSection";
import { TimeSection } from "@/components/home/TimeSection";
import { ProvaSocialSection } from "@/components/home/ProvaSocialSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ChamadaFinalSection } from "@/components/home/ChamadaFinalSection";
import { FormularioSection } from "@/components/home/FormularioSection";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Header />

      <main>
        <HeroSection />
        <ParaQuemSection />
        <ParaQuemNaoSection />
        <ProblemaSection />
        <SolucaoSection />
        <ComoFuncionaSection />
        <DiferenciaisSection />
        <TimeSection />
        <ProvaSocialSection />
        <FAQSection />
        <ChamadaFinalSection />
        <FormularioSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
