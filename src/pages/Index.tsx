import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Rocket, Package } from "lucide-react";
import limvexSG from "@/assets/limvexLogoBg.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  return (
    <span className="inline-block min-w-[200px] text-left">
      <span
        className={cn(
          "inline-block transition-all duration-300 ease-in-out",
          isAnimating
            ? "opacity-0 -translate-y-2"
            : "opacity-100 translate-y-0"
        )}
      >
        {words[currentIndex]}
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
          ? "backdrop-blur-md bg-[#0D111B]/80 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container-custom max-w-[1200px]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img
              src={limvexSG}
              alt="Limvex Software Group"
              className="h-8 lg:h-10 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

// Palavras para animação (ordem alfabética)
const rotatingWords = [
  "Aplicativos",
  "Cloud",
  "DADOS",
  "DEVOPS",
  "IAs",
  "IOT",
  "Planilhas",
  "SAAS",
  "Sites",
];

export default function Index() {
  return (
    <div className="min-h-screen w-full relative" style={{ backgroundColor: "#0D111B" }}>
      {/* Vinheta sutil */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      <TransparentHeader />

      <main className="relative z-10">
        {/* SEÇÃO 1 — HERO PRINCIPAL */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="w-full max-w-6xl mx-auto text-center">
            {/* Logo grande centralizada */}
            <div className="mb-12 md:mb-16">
              <img
                src={limvexSG}
                alt="Limvex Software Group"
                className="h-40 md:h-56 lg:h-64 w-auto mx-auto drop-shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Título principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 md:mb-12 text-white leading-tight">
              Excelência em Desenvolvimento de Software Sob Medida
            </h1>

            {/* Subtítulo com animação */}
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium mb-16 md:mb-20">
              <span>Especialistas em </span>
              <AnimatedWord words={rotatingWords} interval={3000} />
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — Cards principais */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card Para Empresas */}
              <Link
                to="/para-empresas"
                className="group relative rounded-3xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-10 md:p-12 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover-lift"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Building2 className="w-10 h-10 text-blue-500" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Para Empresas
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Eficiência, controle e segurança.
                </p>
                <div className="mt-8 flex items-center gap-2 text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Card Para Novos Negócios */}
              <Link
                to="/para-novos-negocios"
                className="group relative rounded-3xl border-2 border-white/10 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm p-10 md:p-12 transition-all duration-300 hover:border-purple-500/50 hover:from-purple-500/20 hover:via-pink-500/20 hover:to-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover-lift"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Rocket className="w-10 h-10 text-purple-400" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Para Novos Negócios
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Do zero ao MVP com velocidade.
                </p>
                <div className="mt-8 flex items-center gap-2 text-purple-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              className="rounded-full px-8 py-6 text-base md:text-lg font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30"
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
