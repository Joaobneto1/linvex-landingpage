import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeuralBackground from "@/components/flow-field-background";

export function HeroSection() {

  // State to trigger animations once the component is mounted.
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true after a short delay to allow the component to render first.
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Custom CSS animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes subtlePulse {
            0%, 100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <section className="relative isolate h-screen overflow-hidden bg-[#030014] text-white">
        {/* ================== BACKGROUND ================== */}
        {/* Flow Field Neural Background */}
        <div className="absolute inset-0 -z-30">
          <NeuralBackground
            color="#0076CE"
            particleCount={700}
            speed={0.8}
            trailOpacity={0.08}
            className="bg-[#030014]"
          />
        </div>
        
        {/* Gradient overlay para legibilidade e profundidade */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#030014]/40 via-transparent to-[#030014]/70" />

        {/* ================== COPY ================== */}
        <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className={`mx-auto text-center ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
            {/* Logo/Nome LIMVEX */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                LIMVEX
              </h2>
            </div>

            {/* Badge */}
            <span
              style={{ animationDelay: '100ms' }}
              className={`inline-flex items-center gap-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/30 px-3 py-1 text-[11px] uppercase tracking-wider text-white/90 backdrop-blur ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0076CE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0076CE]"></span>
              </span>
              Software sob medida para empresas que querem escalar
            </span>

            {/* Main Headline */}
            <h1
              style={{ animationDelay: '200ms' }}
              className={`mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              Transformamos ideias em soluções digitais que geram resultado
            </h1>

            {/* Subheadline */}
            <p
              style={{ animationDelay: '300ms' }}
              className={`mx-auto mt-5 max-w-2xl text-balance text-white/75 md:text-lg lg:text-xl leading-relaxed ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              Desenvolvemos SaaS e software personalizado com foco em prazo, qualidade e escalabilidade.
            </p>

            {/* CTA Buttons */}
            <div
              style={{ animationDelay: '400ms' }}
              className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 md:py-7 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.4)] hover:shadow-[0_0_50px_rgba(0,118,206,0.6)] transition-all duration-300 w-full sm:w-auto"
              >
                <Link to="/contato">
                  Solicitar diagnóstico
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 md:py-7 h-auto rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link to="/contato">
                  Falar com um especialista
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* ================== FOREGROUND ================== */}
        {/* Efeito de brilho sutil no centro inferior para destacar a imagem */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[40vh] w-full max-w-4xl -translate-x-1/2 opacity-30"
          style={{ 
            background: 'radial-gradient(ellipse at center, rgba(0,118,206,0.15) 0%, transparent 70%)',
            animation: 'subtlePulse 8s ease-in-out infinite' 
          }}
        />
      </section>
    </>
  );
}
