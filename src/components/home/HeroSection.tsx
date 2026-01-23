import { ArrowRight, Code2, Cpu, Database, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappLink = getWhatsAppLink("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 118, 206, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 118, 206, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0076CE] rounded-full blur-[150px] opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06B6D4] rounded-full blur-[200px] opacity-10" />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] opacity-20 animate-float">
          <Code2 className="w-8 h-8 text-[#0076CE]" />
        </div>
        <div className="absolute top-40 right-[15%] opacity-15 animate-float" style={{ animationDelay: '0.5s' }}>
          <Database className="w-10 h-10 text-[#8B5CF6]" />
        </div>
        <div className="absolute bottom-32 left-[20%] opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Cpu className="w-12 h-12 text-[#06B6D4]" />
        </div>
        <div className="absolute top-1/3 right-[8%] opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
          <Globe className="w-9 h-9 text-[#0076CE]" />
        </div>
        <div className="absolute bottom-40 right-[25%] opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Zap className="w-8 h-8 text-[#F59E0B]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Nome LIMVEX */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
              LIMVEX
            </h2>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0076CE]/20 to-[#8B5CF6]/20 border border-[#0076CE]/30 backdrop-blur-sm mb-8 animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0076CE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0076CE]"></span>
            </span>
            <span className="text-sm font-medium text-white/90">Software sob medida para empresas que querem escalar</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <span className="text-white">Transformamos ideias em </span>
            <span className="bg-gradient-to-r from-[#0076CE] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              soluções digitais
            </span>
            <span className="text-white"> que geram resultado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.25s' }}>
            Desenvolvemos <span className="text-[#06B6D4] font-semibold">SaaS</span> e <span className="text-[#0076CE] font-semibold">software personalizado</span> com 
            foco em prazo, qualidade e escalabilidade. Seu projeto com a previsibilidade que você precisa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <Button
              asChild
              size="lg"
              className="group relative bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#06B6D4] text-white text-lg px-8 py-7 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.4)] hover:shadow-[0_0_50px_rgba(0,118,206,0.6)] transition-all duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com especialista
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-lg px-8 py-7 h-auto rounded-xl transition-all duration-300"
            >
              <a href="#como-funciona">
                Como funciona
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />
    </section>
  );
}
