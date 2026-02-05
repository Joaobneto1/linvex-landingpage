import { Link } from "react-router-dom";
import { Brain, Workflow, Check, ArrowRight, Layers, Link2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const pilares = [
  {
    icon: Brain,
    title: "Inteligência operacional",
    description: "Camada de inteligência unificada que transforma dados fragmentados em insights acionáveis. Monitoramento preditivo, automação de decisões e orquestração de processos críticos.",
    features: [
      "Processamento de dados em tempo real",
      "Machine learning para predição operacional",
      "Orquestração multi-sistema",
      "Analytics executivo com BI avançado"
    ],
    link: "/solucoes/limvex-commerce",
    gradient: "from-[#0076CE]/20 to-[#0076CE]/5",
    iconBg: "from-[#0076CE]/30 to-[#0076CE]/10",
    borderGlow: "rgba(0, 118, 206, 0.2)",
    accentColor: "#0076CE",
  },
  {
    icon: Workflow,
    title: "Automação de processos críticos",
    description: "Infraestrutura de automação para operações complexas que exigem precisão, conformidade e escalabilidade sem precedentes.",
    features: [
      "Workflow engine distribuído",
      "Integração nativa com sistemas legados",
      "Governança e auditoria completa",
      "Disaster recovery automatizado"
    ],
    link: "/solucoes/limvex-licitacao",
    gradient: "from-[#0099FF]/20 to-[#0099FF]/5",
    iconBg: "from-[#0099FF]/30 to-[#0099FF]/10",
    borderGlow: "rgba(0, 153, 255, 0.2)",
    accentColor: "#0099FF",
  },
];

export function ProblemaSection() {
  return (
    <section id="plataformas" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0076CE]/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0099FF]/8 rounded-full blur-[200px]" />

      {/* Asymmetric Grid Pattern */}
      <div className="absolute inset-0 asymmetric-grid opacity-[0.08]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header - Layout centralizado */}
        <Reveal direction="up" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/70">Tecnologia enterprise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-white tracking-tight px-2">
              Nossas plataformas
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed px-2">
              Arquitetura modular para desafios operacionais de alta complexidade
            </p>
          </div>
        </Reveal>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <Reveal key={index} direction="up" delay={index * 150}>
                <div
                  className={`group relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pilar.gradient} border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:translate-y-[-6px] h-full flex flex-col`}
                  style={{
                    boxShadow: `0 4px 24px ${pilar.borderGlow}`,
                  }}
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${pilar.borderGlow}, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4 text-center sm:text-left">
                      <div 
                        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${pilar.iconBg} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300`} 
                        style={{ boxShadow: `0 0 20px ${pilar.borderGlow}` }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: pilar.accentColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight">
                          {pilar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-white/65 leading-relaxed mb-4 sm:mb-5 text-center sm:text-left">
                      {pilar.description}
                    </p>

                    {/* Technical Capabilities */}
                    <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6 flex-grow">
                      <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider mb-2">Capacidades técnicas</p>
                      {pilar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: pilar.accentColor }} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className="w-full group/btn"
                      style={{ 
                        backgroundColor: pilar.accentColor,
                        color: 'white'
                      }}
                    >
                      <Link to={pilar.link} className="flex items-center justify-center gap-2">
                        Conhecer plataforma
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: pilar.accentColor }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Integration Layer CTA */}
        <Reveal direction="up" delay={400}>
          <div className="text-center px-2">
            <div className="w-full max-w-2xl mx-auto p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Link2 className="w-5 h-5 text-[#0076CE]" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Camada de integração corporativa
                </h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm md:text-base mb-4">
                Arquitetura de integração enterprise que conecta ecossistemas tecnológicos complexos com segurança e performance.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-sm sm:text-base w-full sm:w-auto"
              >
                <Link to="/contato">Falar com especialista</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
