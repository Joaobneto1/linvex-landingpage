import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappLink = getWhatsAppLink("hero");

  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradiente sutil de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001233] via-[#000920] to-[#000920] opacity-50 pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-[1.05] tracking-[-0.04em] text-white">
          Transformamos tecnologia em crescimento real para empresas que querem escalar
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          SaaS e soluções sob medida com foco em resultado, prazo e previsibilidade
        </p>

        <Button
          asChild
          size="lg"
          className="bg-[#0076CE] hover:bg-[#0099FF] hover:shadow-[0_0_20px_rgba(0,118,206,0.4)] text-white text-lg px-10 py-7 h-auto font-semibold transition-all duration-200 rounded-lg group"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com um especialista no WhatsApp">
            Falar com um especialista
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
}
