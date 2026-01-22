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
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-white tracking-tight">
          Vamos entender se a LIMVEX faz sentido para o seu projeto
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
          Entre em contato agora e nossa equipe responderá em breve para uma análise personalizada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#0076CE] hover:bg-[#0099FF] hover:shadow-[0_0_20px_rgba(0,118,206,0.4)] text-white text-lg px-10 py-6 h-auto font-semibold transition-all duration-200 rounded-lg"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar agora no WhatsApp">
              Falar agora no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            onClick={scrollToForm}
            size="lg"
            variant="secondary"
            className="bg-white/10 hover:bg-white/15 hover:border-white/30 text-white border border-white/20 text-lg px-8 py-6 h-auto transition-all duration-200 rounded-lg"
          >
            Preferir formulário
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
