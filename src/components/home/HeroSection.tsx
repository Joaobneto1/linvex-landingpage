import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const scrollToForm = () => {
    const form = document.getElementById("formulario");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Symmetric pillar heights (percent). Tall at edges, low at center.
  const pillars = [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92];

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
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.03);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <section className="relative isolate h-screen overflow-hidden bg-[#030014] text-white">
        {/* ================== BACKGROUND ================== */}
        {/* Mesh Background */}
        <div className="absolute inset-0 tech-mesh-pattern opacity-100 -z-30" />

        {/* Asymmetric Grid */}
        <div className="absolute inset-0 asymmetric-grid opacity-[0.15] -z-30" />

        {/* Luminous elliptical gradients - Adaptado para azul */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: [
              // Main central dome/band (slightly below center) - Azul
              "radial-gradient(80% 55% at 50% 52%, rgba(0,184,255,0.35) 0%, rgba(0,153,255,0.40) 27%, rgba(0,118,206,0.35) 47%, rgba(3,0,20,0.60) 60%, rgba(3,0,20,0.85) 78%, rgba(3,0,20,1) 88%)",
              // Cool sweep from top-left - Azul
              "radial-gradient(85% 60% at 14% 0%, rgba(0,153,255,0.50) 0%, rgba(0,118,206,0.45) 30%, rgba(3,0,20,0.0) 64%)",
              // Cool rim on top-right - Azul mais claro
              "radial-gradient(70% 50% at 86% 22%, rgba(0,184,255,0.35) 0%, rgba(3,0,20,0.0) 55%)",
              // Soft top vignette
              "linear-gradient(to bottom, rgba(3,0,20,0.25), rgba(3,0,20,0) 40%)",
            ].join(","),
            backgroundColor: "#030014",
          }}
        />

        {/* Vignette corners for extra contrast */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(140%_120%_at_50%_0%,transparent_60%,rgba(3,0,20,0.85))]" />

        {/* Grid overlay: vertical columns + subtle curved horizontal arcs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-30"
          style={{
            backgroundImage: [
              // Vertical grid lines (major & minor)
              "repeating-linear-gradient(90deg, rgba(0,118,206,0.15) 0 1px, transparent 1px 96px)",
              "repeating-linear-gradient(90deg, rgba(0,153,255,0.10) 0 1px, transparent 1px 24px)",
              // Curved horizontal arcs via repeating elliptical radial gradient
              "repeating-radial-gradient(80% 55% at 50% 52%, rgba(0,184,255,0.12) 0 1px, transparent 1px 120px)"
            ].join(","),
            backgroundBlendMode: "screen",
          }}
        />

        {/* Gradient Orbs - Apenas azul */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#0076CE] rounded-full blur-[180px] opacity-20 animate-pulse -z-10" />
        <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-[#0099FF] rounded-full blur-[180px] opacity-15 animate-pulse -z-10" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00B8FF] rounded-full blur-[220px] opacity-10 -z-10" />

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
                onClick={scrollToForm}
                size="lg"
                className="group relative bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 md:py-7 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.4)] hover:shadow-[0_0_50px_rgba(0,118,206,0.6)] transition-all duration-300 w-full sm:w-auto"
              >
                Entrar em contato
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 md:py-7 h-auto rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <a href="#como-funciona">
                  Como funciona
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* ================== FOREGROUND ================== */}
        {/* Center-bottom rectangular glow with pulse animation - Adaptado para azul */}
        <div
          className="pointer-events-none absolute bottom-[128px] left-1/2 z-0 h-36 w-28 -translate-x-1/2 rounded-md bg-gradient-to-b from-[#00B8FF]/60 via-[#0099FF]/50 to-transparent"
          style={{ animation: 'subtlePulse 6s ease-in-out infinite' }}
        />

        {/* Stepped pillars silhouette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[54vh]">
          {/* dark fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/90 to-transparent" />
          {/* bars */}
          <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-px px-[2px]">
            {pillars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-[#030014] transition-[height] duration-1000 ease-in-out"
                style={{
                  // Animate height from 0% to its target value when isMounted is true.
                  height: isMounted ? `${h}%` : '0%',
                  // Stagger the animation delay to create a wave effect from the center out.
                  transitionDelay: `${Math.abs(i - Math.floor(pillars.length / 2)) * 60}ms`
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
