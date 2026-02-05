import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function ChamadaFinalSection() {

  return (
    <section id="cta" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Asymmetric Grid Pattern */}
      <div className="absolute inset-0 asymmetric-grid opacity-[0.12]" />

      {/* Background Elements - Gradientes azuis com mais profundidade e movimento */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#0076CE]/15 rounded-full blur-[220px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0099FF]/12 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#00B8FF]/10 rounded-full blur-[180px]" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#0076CE]/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#0099FF]/6 rounded-full blur-[240px]" />

      {/* Overlay gradient para mais profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0076CE]/5 to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Badge centralizado */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 backdrop-blur-sm animate-fade-in">
            <Zap className="w-4 h-4 text-white/90" />
            <span className="text-sm font-medium text-white/70">
              Próximos passos
            </span>
          </div>
        </div>

        {/* Headline centralizado */}
        <div className="text-center mb-8 sm:mb-10 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Avaliação técnica estratégica
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/65 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            Realize uma análise completa da sua arquitetura tecnológica atual com nossa equipe de arquitetos
          </p>
        </div>

        {/* CTA Buttons com layout melhorado */}
        <Reveal direction="up" delay={100}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="group relative bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white text-base sm:text-lg px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 h-auto font-semibold rounded-xl shadow-[0_0_40px_rgba(0,118,206,0.4)] hover:shadow-[0_0_60px_rgba(0,118,206,0.6)] transition-all duration-300 w-full sm:w-auto hover:scale-105"
            >
              <Link to="/contato" className="flex items-center justify-center">
                Solicitar avaliação técnica
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-base sm:text-lg px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 h-auto rounded-xl transition-all duration-300 w-full sm:w-auto"
            >
              <a href="#plataformas">Conhecer plataformas</a>
            </Button>
          </div>
        </Reveal>

        {/* Trust Indicators com design melhorado */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 pt-8 sm:pt-10 border-t border-white/[0.08]">
          {[
            { icon: CheckCircle, text: "Relatório de análise técnica" },
            { icon: Zap, text: "Proposta de arquitetura" },
            { icon: Clock, text: "Projeção de ROI" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#0076CE]/30 hover:bg-white/[0.05] transition-all duration-300 group w-full sm:w-auto justify-center sm:justify-start"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0076CE]/20 flex items-center justify-center group-hover:bg-[#0076CE]/30 transition-colors flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0076CE]" />
                </div>
                <span className="text-xs sm:text-sm text-white/70 group-hover:text-white/90 transition-colors">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
