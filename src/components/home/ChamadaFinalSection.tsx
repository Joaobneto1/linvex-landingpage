import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Zap, Clock, CheckCircle } from "lucide-react";
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
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030014] via-[#0a0a2e] to-[#030014] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0076CE]/15 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[200px]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 118, 206, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 118, 206, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0076CE]/20 to-[#8B5CF6]/20 border border-[#0076CE]/30 backdrop-blur-sm mb-8">
          <Zap className="w-4 h-4 text-[#0076CE]" />
          <span className="text-sm font-medium bg-gradient-to-r from-[#0076CE] to-[#06B6D4] bg-clip-text text-transparent">
            Pronto para começar?
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-white tracking-tight leading-tight">
          Vamos entender se a{" "}
          <span className="bg-gradient-to-r from-[#0076CE] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
            LIMVEX faz sentido
          </span>{" "}
          para o seu projeto
        </h2>
        
        <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
          Entre em contato agora e nossa equipe responderá em breve para uma análise personalizada e sem compromisso
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="group relative bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#06B6D4] text-white text-lg px-10 py-7 h-auto font-semibold rounded-xl shadow-[0_0_40px_rgba(0,118,206,0.4)] hover:shadow-[0_0_60px_rgba(0,118,206,0.6)] transition-all duration-300"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar agora no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            onClick={scrollToForm}
            size="lg"
            variant="outline"
            className="group border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-lg px-8 py-7 h-auto rounded-xl transition-all duration-300"
          >
            Preferir formulário
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/[0.08]">
          {[
            { icon: Clock, text: "Resposta em até 24h" },
            { icon: CheckCircle, text: "Análise gratuita" },
            { icon: Zap, text: "Sem compromisso" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-white/50">
                <Icon className="w-4 h-4 text-[#0076CE]" />
                <span className="text-sm">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
