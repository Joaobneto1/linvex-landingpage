import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function ChamadaFinalSection() {
  const scrollToForm = () => {
    const form = document.getElementById("formulario");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink = getWhatsAppLink("chamada-final");

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a1628] relative overflow-hidden">
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0076CE]/10 border border-[#0076CE]/30 text-[#0076CE] text-sm font-semibold mb-8">
          <span>⚡ Pronto para começar?</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-white tracking-tight">
          Vamos entender se a LIMVEX{" "}
          <span className="text-[#0076CE]">
            faz sentido
          </span>{" "}
          para o seu projeto
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          Entre em contato agora e nossa equipe responderá em breve para uma análise personalizada e sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#0076CE] hover:bg-[#0099FF] hover:shadow-[0_0_30px_rgba(0,118,206,0.5)] text-white text-lg px-10 py-7 h-auto font-semibold transition-all duration-300 rounded-lg group"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar agora no WhatsApp">
              Falar agora no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            onClick={scrollToForm}
            size="lg"
            variant="secondary"
            className="bg-white/10 hover:bg-white/15 hover:border-[#0076CE]/50 hover:shadow-[0_0_20px_rgba(0,118,206,0.3)] text-white border border-white/20 text-lg px-8 py-7 h-auto transition-all duration-300 rounded-lg group"
          >
            Preferir formulário
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Trust badge */}
        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <p className="text-sm text-white/50">
            ✓ Resposta em até 24h • ✓ Análise gratuita • ✓ Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
