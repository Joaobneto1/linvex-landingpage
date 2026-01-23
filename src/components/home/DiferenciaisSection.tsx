import { Target, MessageSquare, TrendingUp, Layers, Handshake, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const diferenciais = [
  {
    icon: Target,
    title: "Escopo claro",
    description: "Definimos exatamente o que será entregue, sem surpresas no meio do caminho",
    number: "01",
  },
  {
    icon: MessageSquare,
    title: "Comunicação direta",
    description: "Sem intermediários, você fala direto com quem desenvolve seu projeto",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Foco em resultado",
    description: "Não entregamos código, entregamos soluções que geram valor real",
    number: "03",
  },
  {
    icon: Layers,
    title: "Projetos escaláveis",
    description: "Arquitetura pensada para crescer sem precisar refazer do zero",
    number: "04",
  },
  {
    icon: Handshake,
    title: "Parceria de longo prazo",
    description: "Não somos fornecedor, somos parceiro no seu crescimento",
    number: "05",
  },
  {
    icon: Shield,
    title: "Segurança e qualidade",
    description: "Código limpo, testes automatizados e boas práticas de segurança",
    number: "06",
  },
];

export function DiferenciaisSection() {
  const whatsappLink = getWhatsAppLink("diferenciais");

  return (
    <section id="diferenciais" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0076CE]/5 rounded-full blur-[200px]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 118, 206, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 118, 206, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0076CE]/10 to-[#8B5CF6]/10 border border-[#0076CE]/20 mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-[#0076CE] to-[#8B5CF6] bg-clip-text text-transparent">
              Diferenciais exclusivos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-[#0076CE] to-[#06B6D4] bg-clip-text text-transparent">
              LIMVEX?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Nossa abordagem única garante resultados previsíveis e crescimento sustentável
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {diferenciais.map((diferencial, index) => {
            const Icon = diferencial.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-[#0076CE]/30 transition-all duration-500 hover:translate-y-[-4px]"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-4xl font-black text-white/[0.03] group-hover:text-[#0076CE]/10 transition-colors duration-300">
                  {diferencial.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0076CE]/20 to-[#0076CE]/5 border border-[#0076CE]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#0076CE]/40 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#0076CE]" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {diferencial.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{diferencial.description}</p>
                
                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0076CE] to-[#06B6D4] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#06B6D4] text-white px-8 py-6 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.3)] hover:shadow-[0_0_50px_rgba(0,118,206,0.5)] transition-all duration-300"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Falar com a LIMVEX
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
