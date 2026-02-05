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

      <section className="relative isolate min-h-[90vh] overflow-hidden bg-[#030014] text-white flex items-center">
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
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
          <div className={`mx-auto text-center w-full max-w-4xl ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
            {/* Badge */}
            <div
              style={{ animationDelay: '100ms' }}
              className={`mb-6 sm:mb-8 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0076CE]/10 border border-[#0076CE]/20 px-4 py-1.5 text-xs sm:text-sm text-white/70 font-medium tracking-wide">
                Infraestrutura de nível enterprise
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{ animationDelay: '200ms' }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] sm:leading-[1.1] mb-6 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              Infraestrutura de inteligência operacional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#00B8FF]">
                para empresas em expansão
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{ animationDelay: '300ms' }}
              className={`mx-auto max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-white/65 leading-relaxed mb-10 sm:mb-12 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              Plataformas de missão crítica que unificam dados, automatizam processos complexos e entregam inteligência acionável para decisões estratégicas.
            </p>

            {/* CTA Buttons */}
            <div
              style={{ animationDelay: '400ms' }}
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
            >
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.4)] hover:shadow-[0_0_50px_rgba(0,118,206,0.6)] transition-all duration-300 w-full sm:w-auto"
              >
                <Link to="/contato">
                  Solicitar avaliação técnica
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 h-auto rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <a href="#plataformas">
                  Ver plataformas
                </a>
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
