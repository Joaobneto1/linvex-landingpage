import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Rocket, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const metrics = [
    { value: "4.9+", label: "Avaliação", suffix: "" },
    { value: "20+", label: "Projetos entregues", suffix: "" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background with animated gradient waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0A0A0F]" />
        
        {/* Purple gradient glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px]" />
        
        {/* Wave lines effect - SVG decorativo */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[400px] opacity-30"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300 Q 360 200, 720 300 T 1440 300"
            stroke="url(#wave-gradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 320 Q 360 220, 720 320 T 1440 320"
            stroke="url(#wave-gradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M0 340 Q 360 240, 720 340 T 1440 340"
            stroke="url(#wave-gradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="container-custom max-w-[1200px] relative z-10 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Novo</span>
              <span className="text-white/50">|</span>
              <span className="text-white/90">Desenvolvimento de excelência</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-black leading-[1.1] text-balance mb-6">
            <span className="block text-white mb-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Software Sob Medida Para
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Acelerar Seu Negócio.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed text-balance">
            Criamos software, aceleramos startups e entregamos produtos prontos. 
            Nossa suíte de serviços é projetada para otimizar cada aspecto do seu negócio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/30 transition-all"
              asChild
            >
              <a
                href="https://wa.me/5582991709740"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com especialista
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
              asChild
            >
              <Link to="/produtos">
                <Play className="w-4 h-4 mr-2 fill-current" />
                Ver como funciona
              </Link>
            </Button>
          </div>
        </div>

        {/* Metrics + Feature Card */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-8">
          {/* Left metrics */}
          <div className="flex items-center gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white">
                  {metric.value}
                </div>
                <div className="text-sm text-white/50 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right feature card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 max-w-xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">EXCELÊNCIA TÉCNICA</p>
                <p className="text-white/60 text-xs mt-1">
                  Equipes sênior focadas em entregar valor real para o seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos marquee - pode ser adicionado depois com logos de clientes */}
      <div className="relative z-10 border-t border-white/10 py-8 mt-auto">
        <div className="container-custom max-w-[1200px]">
          <div className="flex items-center justify-center gap-12 opacity-40">
            <span className="text-white/60 text-sm font-medium">Empresas que confiam na Limvex</span>
          </div>
        </div>
      </div>
    </section>
  );
};
