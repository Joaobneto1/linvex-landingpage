import { Search, CheckCircle2, Code2, Rocket, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { scrollToLeadForm } from "@/lib/utils";

const passos = [
  {
    numero: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Entendemos sua necessidade, objetivos e contexto do negócio para propor a melhor solução",
    gradient: "from-[#0076CE] to-[#0099FF]",
    bgGradient: "from-[#0076CE]/15 to-[#0076CE]/5",
    glowColor: "rgba(0, 118, 206, 0.3)",
  },
  {
    numero: "02",
    icon: CheckCircle2,
    title: "Validação & Escopo",
    description: "Validamos a viabilidade técnica e definimos escopo claro com prazo e investimento",
    gradient: "from-[#0099FF] to-[#00B8FF]",
    bgGradient: "from-[#0099FF]/15 to-[#0099FF]/5",
    glowColor: "rgba(0, 153, 255, 0.3)",
  },
  {
    numero: "03",
    icon: Code2,
    title: "Desenvolvimento",
    description: "Desenvolvemos com comunicação constante, entregas incrementais e transparência total",
    gradient: "from-[#00B8FF] to-[#0076CE]",
    bgGradient: "from-[#00B8FF]/15 to-[#00B8FF]/5",
    glowColor: "rgba(0, 184, 255, 0.3)",
  },
  {
    numero: "04",
    icon: Rocket,
    title: "Entrega & Evolução",
    description: "Entregamos o projeto funcionando e damos suporte contínuo para evolução",
    gradient: "from-[#0076CE] via-[#0099FF] to-[#00B8FF]",
    bgGradient: "from-[#0076CE]/15 to-[#0099FF]/5",
    glowColor: "rgba(0, 118, 206, 0.35)",
  },
];

export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements - Apenas azul */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0076CE]/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0099FF]/8 rounded-full blur-[200px]" />

      {/* Asymmetric Grid Pattern */}
      <div className="absolute inset-0 asymmetric-grid opacity-[0.06]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Processo simplificado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight px-2">
              Como funciona
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed px-2">
              Um processo claro e transparente do início ao fim do seu projeto
            </p>
          </div>
        </Reveal>

        {/* Steps - Layout único com conexões diagonais */}
        <div className="relative mb-16">
          {/* Connection Lines - Diagonais únicas */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {passos.slice(0, -1).map((_, index) => {
              const startY = index * 25 + 12.5;
              const endY = (index + 1) * 25 + 12.5;
              const isEven = index % 2 === 0;
              const startX = isEven ? 25 : 75;
              const endX = isEven ? 75 : 25;

              return (
                <svg
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  style={{ zIndex: 0 }}
                >
                  <line
                    x1={`${startX}%`}
                    y1={`${startY}%`}
                    x2={`${endX}%`}
                    y2={`${endY}%`}
                    stroke="url(#gradient-line)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0076CE" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#0099FF" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#00B8FF" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              );
            })}
          </div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-16 relative">
            {passos.map((passo, index) => {
              const Icon = passo.icon;
              const isEven = index % 2 === 0;

              return (
                <Reveal key={index} direction={isEven ? "right" : "left"} delay={index * 100}>
                  <div
                    className={`relative lg:flex lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8`}
                  >
                    {/* Content Card - Layout único */}
                    <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8 lg:pr-12' : 'lg:pl-8 lg:pl-12'}`}>
                      <div
                        className={`group relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl bg-gradient-to-br ${passo.bgGradient} border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:translate-y-[-6px]`}
                        style={{ boxShadow: `0 8px 32px ${passo.glowColor}` }}
                      >
                        {/* Number Badge - Posição única */}
                        <div className={`absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${passo.gradient} flex items-center justify-center shadow-lg border-2 border-[#030014]`}>
                          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white">{passo.numero}</span>
                        </div>

                        {/* Icon - Dentro do card */}
                        <div className="flex items-start gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4 md:mb-5">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${passo.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`} style={{ boxShadow: `0 0 20px ${passo.glowColor}` }}>
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                          </div>
                          <div className="flex-1 pt-1">
                            <div className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 text-white/60 uppercase tracking-wider">
                              Passo {passo.numero}
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white mb-2 sm:mb-3 leading-tight">
                              {passo.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-lg">
                          {passo.description}
                        </p>

                        {/* Hover accent */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${passo.gradient} rounded-b-xl sm:rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Reveal direction="up" delay={500}>
          <div className="text-center mt-12 sm:mt-16">
            <Button
              onClick={scrollToLeadForm}
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto rounded-xl transition-all duration-300 w-full sm:w-auto"
            >
              Quero começar meu projeto
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
