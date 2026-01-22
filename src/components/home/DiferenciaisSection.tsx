import { Target, MessageSquare, TrendingUp, Layers, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const diferenciais = [
  {
    icon: Target,
    title: "Escopo claro",
    description: "Definimos exatamente o que será entregue, sem surpresas",
  },
  {
    icon: MessageSquare,
    title: "Comunicação direta",
    description: "Sem intermediários, você fala direto com quem desenvolve",
  },
  {
    icon: TrendingUp,
    title: "Foco em resultado",
    description: "Não entregamos código, entregamos soluções que geram valor",
  },
  {
    icon: Layers,
    title: "Projetos escaláveis",
    description: "Arquitetura pensada para crescer sem precisar refazer",
  },
  {
    icon: Handshake,
    title: "Parceria de longo prazo",
    description: "Não somos fornecedor, somos parceiro no seu crescimento",
  },
];

export function DiferenciaisSection() {
  const whatsappLink = getWhatsAppLink("diferenciais");

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920] relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,118,206,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,118,206,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
            Por que escolher a LIMVEX?
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Nossa abordagem única garante resultados previsíveis e crescimento sustentável
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {diferenciais.map((diferencial, index) => {
            const Icon = diferencial.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-[#0076CE]/50 hover:bg-white/[0.06] hover:shadow-[0_8px_24px_rgba(0,118,206,0.12)] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#0076CE]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0076CE]/30 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#0076CE]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {diferencial.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{diferencial.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="secondary"
            className="bg-white/10 hover:bg-white/15 hover:border-[#0076CE]/50 hover:shadow-[0_0_20px_rgba(0,118,206,0.3)] text-white border border-white/20 px-8 py-6 h-auto transition-all duration-300 rounded-lg font-semibold"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com a LIMVEX no WhatsApp">
              Falar com a LIMVEX
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
