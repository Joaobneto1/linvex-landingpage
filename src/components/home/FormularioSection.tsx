import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function FormularioSection() {
  return (
    <section id="formulario" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Asymmetric Grid Pattern */}
      <div className="absolute inset-0 asymmetric-grid opacity-[0.08]" />

      {/* Background Elements - Apenas azul com mais profundidade */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0076CE]/12 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0099FF]/10 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-[#00B8FF]/8 rounded-full blur-[180px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6 backdrop-blur-sm">
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Vamos conversar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white tracking-tight px-2">
              Conte-nos sobre seu projeto
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto px-2">
              Em menos de 2 minutos, você nos conta o que precisa e nossa equipe entra em contato para ajudar.
            </p>
          </div>
        </Reveal>

        {/* CTA Card */}
        <Reveal direction="up" delay={100}>
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.12] backdrop-blur-sm shadow-[0_8px_32px_rgba(0,118,206,0.15)] hover:border-white/20 transition-all duration-300">
            <div className="text-center space-y-6 sm:space-y-8">
              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5">
                  <MessageCircle className="w-6 h-6 text-[#0076CE]" />
                  <span className="text-white/90 font-medium text-sm">Conversa guiada</span>
                  <span className="text-white/50 text-xs">Passo a passo simples</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5">
                  <Clock className="w-6 h-6 text-[#0076CE]" />
                  <span className="text-white/90 font-medium text-sm">Menos de 2 min</span>
                  <span className="text-white/50 text-xs">Rápido e direto</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5">
                  <Shield className="w-6 h-6 text-[#0076CE]" />
                  <span className="text-white/90 font-medium text-sm">100% seguro</span>
                  <span className="text-white/50 text-xs">Dados protegidos</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.4)] hover:shadow-[0_0_50px_rgba(0,118,206,0.6)] transition-all duration-300"
              >
                <Link to="/contato">
                  Iniciar conversa
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>

              <p className="text-white/50 text-xs sm:text-sm">
                Resposta garantida em até 24 horas úteis
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
