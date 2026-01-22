import { Code, Cloud, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const solucoes = [
  {
    icon: Code,
    title: "Software sob medida",
    description: "Desenvolvimento customizado para atender suas necessidades específicas",
  },
  {
    icon: Cloud,
    title: "Plataformas SaaS",
    description: "Soluções escaláveis prontas para crescer com seu negócio",
  },
  {
    icon: TrendingUp,
    title: "Tecnologia pensada para escalar",
    description: "Arquitetura robusta que suporta crescimento sem refatoração constante",
  },
];

export function SolucaoSection() {
  const whatsappLink = getWhatsAppLink("solucao");

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0076CE]/[0.02] to-transparent pointer-events-none" />
      
      {/* Organic shape background */}
      <svg
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="250" cy="250" r="250" fill="url(#solutionGradient)" />
        <defs>
          <radialGradient id="solutionGradient">
            <stop offset="0%" stopColor="#0076CE" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0076CE" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-center text-white tracking-tight">
          A solução LIMVEX
        </h2>
        <p className="text-center text-white/70 mb-16 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Tecnologia que resolve problemas reais e entrega resultados mensuráveis
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solucoes.map((solucao, index) => {
            const Icon = solucao.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-[#0076CE]/50 hover:bg-white/[0.06] hover:shadow-[0_8px_24px_rgba(0,118,206,0.12)] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#0076CE]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0076CE]/30 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#0076CE]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {solucao.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{solucao.description}</p>
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
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Quero meu SaaS no WhatsApp">
              Quero meu SaaS
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
