import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const items = [
  "Empresas que querem escalar com tecnologia",
  "Agências que precisam de um time técnico confiável",
  "Negócios que buscam software sem dor de cabeça",
  "Projetos com objetivo claro e orçamento definido",
];

export function ParaQuemSection() {
  const whatsappLink = getWhatsAppLink("para-quem");

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-white tracking-tight">
          Para quem é a LIMVEX
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-8 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-[#0076CE]/40 hover:bg-white/[0.06] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200"
            >
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-[#0076CE]" />
              </div>
              <p className="text-white/90 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="secondary"
            className="bg-white/10 hover:bg-white/15 hover:border-white/30 text-white border border-white/20 px-8 py-6 h-auto transition-all duration-200 rounded-lg"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Ver se faz sentido para mim no WhatsApp">
              Ver se faz sentido para mim
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
