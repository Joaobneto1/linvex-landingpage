import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappLink = getWhatsAppLink("hero");

  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Deep ocean background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#091325] to-[#0a1a35]" />
      
      {/* Subtle glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0076CE]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0076CE]/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#0099FF]/5 rounded-full blur-[100px]" />

      {/* Animated organic wave lines - Blue Ocean style */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[450px] opacity-40"
        viewBox="0 0 1440 450"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Wave 1 - Main wave */}
        <path
          d="M-100 350 C 200 280, 400 380, 720 320 C 1040 260, 1240 340, 1540 300"
          stroke="url(#wave-gradient-1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        {/* Wave 2 */}
        <path
          d="M-100 370 C 180 310, 380 400, 700 350 C 1020 300, 1220 370, 1540 330"
          stroke="url(#wave-gradient-1)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        {/* Wave 3 */}
        <path
          d="M-100 390 C 160 340, 360 420, 680 380 C 1000 340, 1200 400, 1540 360"
          stroke="url(#wave-gradient-1)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        {/* Wave 4 - deeper */}
        <path
          d="M-100 410 C 140 370, 340 440, 660 410 C 980 380, 1180 430, 1540 390"
          stroke="url(#wave-gradient-1)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
        />
        {/* Fill gradient below waves */}
        <path
          d="M-100 350 C 200 280, 400 380, 720 320 C 1040 260, 1240 340, 1540 300 L1540 450 L-100 450 Z"
          fill="url(#wave-fill-gradient)"
          opacity="0.15"
        />
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0076CE" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#0099FF" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#0076CE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0076CE" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wave-fill-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0076CE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0076CE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#0076CE]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0076CE]/10 border border-[#0076CE]/30 text-sm font-semibold mb-10 animate-fade-in backdrop-blur-sm">
          <div className="flex -space-x-1">
            <span className="text-lg">🇧🇷</span>
            <span className="text-lg">🚀</span>
            <span className="text-lg">💻</span>
          </div>
          <span className="text-white/90">+20 projetos entregues com excelência</span>
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
            className="bg-[#0076CE] hover:bg-[#0099FF] hover:shadow-[0_0_40px_rgba(0,118,206,0.5)] text-white text-lg px-10 py-7 h-auto font-semibold transition-all duration-300 rounded-xl group"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar com um especialista no WhatsApp">
              Falar com um especialista
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Trust badges / Metrics */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white">4.9+</div>
            <div className="text-sm text-white/50 font-medium mt-1">Avaliação média</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white">20+</div>
            <div className="text-sm text-white/50 font-medium mt-1">Projetos entregues</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white">100%</div>
            <div className="text-sm text-white/50 font-medium mt-1">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Keyframe for floating particles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
