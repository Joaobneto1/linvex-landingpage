import { Users, Clock, TrendingDown, FileX, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const problemas = [
  {
    icon: Users,
    title: "Falta de time técnico",
    description: "Não tem desenvolvedores internos ou o time está sobrecarregado com demandas",
    gradient: "from-[#0076CE]/20 to-[#0076CE]/5",
    iconBg: "from-[#0076CE]/30 to-[#0076CE]/10",
    borderGlow: "rgba(0, 118, 206, 0.2)",
  },
  {
    icon: Clock,
    title: "Atrasos e promessas não cumpridas",
    description: "Projetos que se arrastam sem prazo definido ou que nunca saem do papel",
    gradient: "from-[#0099FF]/20 to-[#0099FF]/5",
    iconBg: "from-[#0099FF]/30 to-[#0099FF]/10",
    borderGlow: "rgba(0, 153, 255, 0.2)",
  },
  {
    icon: TrendingDown,
    title: "Custos fora de controle",
    description: "Orçamentos que explodem sem previsibilidade ou transparência nos gastos",
    gradient: "from-[#00B8FF]/20 to-[#00B8FF]/5",
    iconBg: "from-[#00B8FF]/30 to-[#00B8FF]/10",
    borderGlow: "rgba(0, 184, 255, 0.2)",
  },
  {
    icon: FileX,
    title: "Projetos que não saem do papel",
    description: "Ideias boas que ficam travadas por falta de execução técnica adequada",
    gradient: "from-[#0076CE]/20 to-[#0099FF]/5",
    iconBg: "from-[#0076CE]/30 to-[#0099FF]/10",
    borderGlow: "rgba(0, 118, 206, 0.25)",
  },
];

export function ProblemaSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements - Apenas azul */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0076CE]/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0099FF]/8 rounded-full blur-[200px]" />

      {/* Asymmetric Grid Pattern */}
      <div className="absolute inset-0 asymmetric-grid opacity-[0.08]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header - Layout centralizado */}
        <Reveal direction="up" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Dores comuns no mercado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight px-2">
              Você já passou por algum desses problemas?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed px-2">
              Esses são os desafios mais comuns que empresas enfrentam ao tentar desenvolver software
            </p>
          </div>
        </Reveal>

        {/* Problem Cards - Layout único com apenas azul */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
          {problemas.map((problema, index) => {
            const Icon = problema.icon;
            const isEven = index % 2 === 0;
            return (
              <Reveal key={index} direction="up" delay={index * 100}>
                <div
                  className={`group relative p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br ${problema.gradient} border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:translate-y-[-6px] ${isEven ? 'md:-translate-x-1' : 'md:translate-x-1'}`}
                  style={{
                    boxShadow: `0 4px 24px ${problema.borderGlow}`,
                  }}
                >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${problema.borderGlow}, transparent 70%)`
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon Container - Estilo único */}
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${problema.iconBg} border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`} style={{ boxShadow: `0 0 20px ${problema.borderGlow}` }}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0076CE]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                        {problema.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{problema.description}</p>
                    </div>
                  </div>
                </div>

                  {/* Bottom accent line - Apenas azul */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0076CE] via-[#0099FF] to-[#00B8FF] rounded-b-xl sm:rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom message - Redesenhado */}
        <Reveal direction="up" delay={400}>
          <div className="mt-12 sm:mt-16 text-center">
            <div className="w-full max-w-2xl mx-auto p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0076CE]/10 to-[#0099FF]/5 border border-[#0076CE]/20 backdrop-blur-sm">
              <p className="text-white/80 text-sm sm:text-base md:text-lg px-2">
                Se você se identificou com algum desses problemas, a LIMVEX pode ajudar.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
