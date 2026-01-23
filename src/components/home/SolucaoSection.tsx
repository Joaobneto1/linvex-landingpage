import { Code2, Cloud, TrendingUp, Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const solucoes = [
  {
    icon: Code2,
    title: "Software sob medida",
    description: "Desenvolvimento customizado que resolve exatamente o que você precisa",
    features: ["APIs robustas", "Integrações", "Dashboards"],
    gradient: "from-[#0076CE] to-[#0099FF]",
    bgGradient: "from-[#0076CE]/20 to-[#0076CE]/5",
  },
  {
    icon: Cloud,
    title: "Plataformas SaaS",
    description: "Soluções escaláveis prontas para crescer com seu negócio",
    features: ["Multi-tenant", "Escalável", "Cloud-native"],
    gradient: "from-[#06B6D4] to-[#0EA5E9]",
    bgGradient: "from-[#06B6D4]/20 to-[#06B6D4]/5",
  },
  {
    icon: TrendingUp,
    title: "Arquitetura escalável",
    description: "Tecnologia pensada para crescer sem precisar refazer",
    features: ["Microserviços", "CI/CD", "Alta performance"],
    gradient: "from-[#8B5CF6] to-[#A855F7]",
    bgGradient: "from-[#8B5CF6]/20 to-[#8B5CF6]/5",
  },
];

export function SolucaoSection() {
  const whatsappLink = getWhatsAppLink("solucao");

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030014] via-[#0a0a1f] to-[#030014] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#0076CE] rounded-full blur-[180px] opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#8B5CF6] rounded-full blur-[180px] opacity-15" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 118, 206, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 118, 206, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0076CE]/10 border border-[#0076CE]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#0076CE]" />
            <span className="text-sm font-medium text-[#0076CE]">Nossa especialidade</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
            A solução{" "}
            <span className="bg-gradient-to-r from-[#0076CE] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              LIMVEX
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Tecnologia que resolve problemas reais e entrega resultados mensuráveis para o seu negócio
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solucoes.map((solucao, index) => {
            const Icon = solucao.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${solucao.bgGradient} border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px]`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solucao.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {solucao.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">{solucao.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {solucao.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-[#0076CE]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#06B6D4] text-white px-8 py-6 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.3)] hover:shadow-[0_0_50px_rgba(0,118,206,0.5)] transition-all duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Quero meu SaaS
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          <p className="mt-6 text-white/40 text-sm">
            ✓ Análise gratuita do seu projeto • ✓ Proposta em até 48h
          </p>
        </div>
      </div>
    </section>
  );
}
