import { Link } from "react-router-dom";
import { Sparkles, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import cloudBankingIcon from "@/assets/cloud-banking.png";
import softwareMedidaIcon from "@/assets/software-medida.png";
import architectureIcon from "@/assets/architechture.png";

const solucoes = [
  {
    icon: null,
    title: "Software sob medida",
    description: "Desenvolvimento customizado que resolve exatamente o que você precisa",
    features: ["APIs robustas", "Integrações", "Dashboards"],
    gradient: "from-[#0076CE] to-[#0099FF]",
    bgGradient: "from-[#0076CE]/15 to-[#0076CE]/5",
    glowColor: "rgba(0, 118, 206, 0.25)",
    customIcon: softwareMedidaIcon,
  },
  {
    icon: null,
    title: "Plataformas SaaS",
    description: "Soluções escaláveis prontas para crescer com seu negócio",
    features: ["Multi-tenant", "Escalável", "Cloud-native"],
    gradient: "from-[#0099FF] to-[#00B8FF]",
    bgGradient: "from-[#0099FF]/15 to-[#0099FF]/5",
    glowColor: "rgba(0, 153, 255, 0.25)",
    customIcon: cloudBankingIcon,
  },
  {
    icon: null,
    title: "Arquitetura escalável",
    description: "Tecnologia pensada para crescer sem precisar refazer",
    features: ["Microserviços", "CI/CD", "Alta performance"],
    gradient: "from-[#00B8FF] to-[#0076CE]",
    bgGradient: "from-[#00B8FF]/15 to-[#00B8FF]/5",
    glowColor: "rgba(0, 184, 255, 0.25)",
    customIcon: architectureIcon,
  },
];

export function SolucaoSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements - Apenas azul */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#0076CE] rounded-full blur-[180px] opacity-18" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#0099FF] rounded-full blur-[180px] opacity-15" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header - Layout centralizado */}
        <Reveal direction="up" delay={0}>
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Nossa especialidade</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight max-w-3xl mx-auto px-2">
              A solução LIMVEX
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed px-2">
              Tecnologia que resolve problemas reais e entrega resultados mensuráveis para o seu negócio
            </p>
          </div>
        </Reveal>

        {/* Solution Cards - Layout diagonal/overlap */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
          {solucoes.map((solucao, index) => {
            return (
              <Reveal key={index} direction="up" delay={index * 100}>
                <div
                  className={`group relative ${index === 1 ? 'md:translate-y-5' : ''}`}
                >
                  {/* Card */}
                  <div className={`h-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br ${solucao.bgGradient} border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px]`} style={{ boxShadow: `0 8px 32px ${solucao.glowColor}` }}>
                    {/* Icon */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${solucao.gradient} flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 p-2`} style={{ boxShadow: `0 0 20px ${solucao.glowColor}` }}>
                      {solucao.customIcon && (
                        <img
                          src={solucao.customIcon}
                          alt={solucao.title}
                          loading="lazy"
                          className="w-full h-full object-contain brightness-0 invert"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                      {solucao.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-3 sm:mb-4 md:mb-6">{solucao.description}</p>

                    {/* Features */}
                    <div className="space-y-1.5 sm:space-y-2">
                      {solucao.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0076CE] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA Section */}
        <Reveal direction="up" delay={400}>
          <div className="text-center mt-12 sm:mt-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.4)] hover:shadow-[0_0_50px_rgba(0,118,206,0.6)] transition-all duration-300 w-full sm:w-auto"
            >
              <Link to="/contato">Quero uma proposta</Link>
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
