import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Rocket, Package } from "lucide-react";
import limvexSG from "@/assets/limvexLogoBg.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mapeamento de cores para cada palavra
const wordColors: Record<string, string> = {
  "Aplicativos": "text-blue-600",
  "Cloud": "text-cyan-600",
  "Dados": "text-indigo-600",
  "DevOps": "text-purple-600",
  "IAs": "text-pink-600",
  "IoT": "text-violet-600",
  "Planilhas": "text-emerald-600",
  "SaaS": "text-teal-600",
  "Sites": "text-sky-600",
};

// Componente de animação de palavras com fade + slide
const AnimatedWord = ({ words, interval = 3000 }: { words: string[]; interval?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 50); // Pequeno delay antes de fazer fade in
      }, 300); // Duração do fade out
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const currentWord = words[currentIndex];
  const colorClass = wordColors[currentWord] || "text-blue-600";

  return (
    <span className="inline-block text-center min-h-[1.5em]">
      <span
        className={cn(
          "inline-block transition-all duration-300 ease-in-out",
          colorClass,
          isAnimating
            ? "opacity-0 -translate-y-2"
            : "opacity-100 translate-y-0"
        )}
      >
        {currentWord}
      </span>
    </span>
  );
};

// Header transparente que aparece ao rolar
const TransparentHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-md bg-white/80 border-b border-gray-200/50"
          : "bg-transparent"
      )}
    >
      <div className="container-custom max-w-[1200px]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo removida - mantendo apenas espaço para não quebrar layout */}
          <div className="w-0" />
        </div>
      </div>
    </header>
  );
};

// Palavras para animação (ordem alfabética)
const rotatingWords = [
  "Aplicativos",
  "Cloud",
  "Dados",
  "DevOps",
  "IAs",
  "IoT",
  "Planilhas",
  "SaaS",
  "Sites",
];

export default function Index() {
  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(59,130,246,0.25), transparent 55%),
          radial-gradient(circle at bottom right, rgba(168,85,247,0.22), transparent 55%),
          #f4f7fc
        `
      }}
    >

      <TransparentHeader />

      <main className="relative z-10">
        {/* SEÇÃO 1 — HERO PRINCIPAL */}
        <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="w-full max-w-6xl mx-auto text-center">
            {/* Logo grande centralizada */}
            <div className="mb-8 md:mb-12">
              <img
                src={limvexSG}
                alt="Limvex Software Group"
                className="h-28 md:h-40 w-auto mx-auto drop-shadow-sm"
                loading="eager"
              />
            </div>

            {/* Título principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-gray-800 leading-tight">
              Excelência em Desenvolvimento de Software Sob Medida
            </h1>

            {/* Palavra rotativa centralizada */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-12">
              <AnimatedWord words={rotatingWords} interval={3000} />
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — Cards principais */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 -mt-4 md:-mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card Para Empresas */}
              <Link
                to="/para-empresas"
                className="group relative rounded-3xl border border-slate-200/70 bg-white/80 dark:bg-slate-900/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)] px-10 md:px-12 py-8 md:py-10 transition-all duration-300 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)] hover:-translate-y-1"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <Building2 className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                  Para Empresas
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Eficiência, controle e segurança.
                </p>
                <div className="mt-8 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Card Para Novos Negócios */}
              <Link
                to="/para-novos-negocios"
                className="group relative rounded-3xl border border-slate-200/70 bg-white/80 dark:bg-slate-900/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)] px-10 md:px-12 py-8 md:py-10 transition-all duration-300 hover:border-purple-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)] hover:-translate-y-1"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                    <Rocket className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                  Para Novos Negócios
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Do zero ao MVP com velocidade.
                </p>
                <div className="mt-8 flex items-center gap-2 text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — Link para Produtos */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto text-center">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base md:text-lg font-semibold border-2 border-slate-200/70 bg-white/80 dark:bg-slate-900/80 text-gray-700 hover:bg-white/90 hover:border-slate-300 shadow-[0_18px_45px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)]"
              asChild
            >
              <Link to="/produtos">
                <Package className="w-5 h-5 mr-2" />
                Produtos
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
