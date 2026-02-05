import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemaSection } from "@/components/home/ProblemaSection";
import { ComoFuncionaSection } from "@/components/home/ComoFuncionaSection";
import { DiferenciaisSection } from "@/components/home/DiferenciaisSection";
import { TimeSection } from "@/components/home/TimeSection";
import { ProvaSocialSection } from "@/components/home/ProvaSocialSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ChamadaFinalSection } from "@/components/home/ChamadaFinalSection";
import { FormularioSection } from "@/components/home/FormularioSection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  useEffect(() => {
    // Garante que a página sempre comece no topo quando carregar
    // A menos que haja um hash específico na URL (para permitir links diretos)
    const handleLoad = () => {
      if (!window.location.hash || window.location.hash === '#') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    // Executa imediatamente e também após o carregamento completo
    handleLoad();
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#030014]">
      <Header />
      <main>
        <HeroSection />
        <ProblemaSection />
        <ComoFuncionaSection />
        <DiferenciaisSection />
        <TimeSection />
        <ProvaSocialSection />
        <FAQSection />
        <ChamadaFinalSection />
        <FormularioSection />
      </main>

      <Footer />
    </div>
  );
}
