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
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-[#0a1628] tracking-tight">
          Para quem é a LIMVEX
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-8 bg-white rounded-xl border border-gray-200 hover:border-[#0076CE]/50 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,118,206,0.15)] transition-all duration-200"
            >
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-[#0076CE]" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-[#0076CE] hover:bg-[#0099FF] hover:shadow-[0_0_20px_rgba(0,118,206,0.4)] text-white border-0 px-8 py-6 h-auto transition-all duration-200 rounded-lg font-semibold"
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
