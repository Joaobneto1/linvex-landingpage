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
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-white tracking-tight">
          Diferenciais
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {diferenciais.map((diferencial, index) => {
            const Icon = diferencial.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-[#0076CE]/40 hover:bg-white/[0.06] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200"
              >
                <div className="w-14 h-14 bg-[#0076CE]/20 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#0076CE]" />
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
            className="bg-white/10 hover:bg-white/15 hover:border-white/30 text-white border border-white/20 px-8 py-6 h-auto transition-all duration-200 rounded-lg"
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
