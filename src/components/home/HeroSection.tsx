import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappLink = getWhatsAppLink("hero");

  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradiente de fundo melhorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001233] via-[#000920] to-[#000920] pointer-events-none" />
      
      {/* Organic shapes */}
      <svg
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.05] -translate-y-1/4 translate-x-1/4"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="300" fill="url(#heroGradient)" />
        <defs>
          <radialGradient id="heroGradient">
            <stop offset="0%" stopColor="#0076CE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0076CE" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,118,206,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,118,206,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Curved accent bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 opacity-[0.06]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
        fill="none"
      >
        <path
          d="M0,60 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="#0076CE"
        />
      </svg>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0076CE]/10 border border-[#0076CE]/30 text-[#0076CE] text-sm font-semibold mb-8 animate-fade-in">
          <span>🚀 Software escalável e previsível</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-[1.05] tracking-[-0.04em] text-white animate-slide-up">
          Transformamos tecnologia em{" "}
          <span className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] bg-clip-text text-transparent">
            crescimento real
          </span>{" "}
          para empresas que querem escalar
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
          SaaS e soluções sob medida com foco em resultado, prazo e previsibilidade
        </p>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button
            asChild
            size="lg"
            className="bg-[#0076CE] hover:bg-[#0099FF] hover:shadow-[0_0_30px_rgba(0,118,206,0.5)] text-white text-lg px-10 py-7 h-auto font-semibold transition-all duration-300 rounded-lg group"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com um especialista no WhatsApp">
              Falar com um especialista
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
