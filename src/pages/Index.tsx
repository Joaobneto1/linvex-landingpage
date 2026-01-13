import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Rocket, Package, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import limvexSG from "@/assets/limvexLogoBg.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cases } from "@/components/Cases";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

// Mapeamento de cores para cada palavra - versão dark mode
const wordColors: Record<string, string> = {
  "Aplicativos": "text-emerald-400",
  "Cloud": "text-emerald-300",
  "Dados": "text-emerald-500",
  "DevOps": "text-emerald-400",
  "IAs": "text-emerald-300",
  "IoT": "text-emerald-500",
  "Planilhas": "text-emerald-400",
  "SaaS": "text-emerald-300",
  "Sites": "text-emerald-500",
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
        }, 50);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const currentWord = words[currentIndex];
  const colorClass = wordColors[currentWord] || "text-emerald-400";

  return (
    <span className="inline-block text-center min-h-[1.5em]">
      <span
        className={cn(
          "inline-block transition-all duration-300 ease-in-out font-display",
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

// Palavras para animação
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

// Métricas de destaque
const metrics = [
  { value: "+20", label: "Projetos entregues" },
  { value: "8", label: "Anos de experiência" },
  { value: "100%", label: "Satisfação" },
];

export default function Index() {
  return (
    <div className="min-h-screen w-full relative bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[80px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(160 84% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 84% 45%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="w-full max-w-6xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="badge-premium">
                <Sparkles className="w-4 h-4" />
                <span>Desenvolvimento de excelência</span>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-12 animate-fade-in">
              <img
                src={limvexSG}
                alt="Limvex Software Group"
                className="h-24 md:h-32 w-auto drop-shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Main Headline */}
            <div className="text-center space-y-6 mb-12">
              <h1 className="font-display text-foreground animate-slide-up">
                <span className="block mb-2">Software Sob Medida.</span>
                <span className="block text-gradient-emerald">Resultados Reais.</span>
              </h1>

              {/* Rotating words */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold animate-fade-in">
                <AnimatedWord words={rotatingWords} interval={3000} />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
              <Button
                size="lg"
                className="rounded-full px-8 py-7 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 shadow-glow-sm hover:shadow-glow transition-all"
                asChild
              >
                <a
                  href="https://wa.me/5582991709740"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com especialista
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-7 text-base md:text-lg font-semibold border-border hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <Link to="/produtos">
                  Explorar soluções
                </Link>
              </Button>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto animate-fade-in">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-4 md:p-6 rounded-2xl glass-card glass-card-hover transition-all"
                >
                  <div className="metric-display text-gradient-emerald mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO DE CARDS PRINCIPAIS */}
        <section className="section-spacing">
          <div className="container-custom max-w-6xl">
            <div className="text-center mb-16">
              <p className="badge-premium mb-6">
                <span className="text-primary">»</span>
                Duas formas de trabalhar
              </p>
              <h2 className="font-display text-foreground mb-4">
                Um Protocolo.<br />
                <span className="text-gradient-emerald">Dois Caminhos.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card Para Empresas */}
              <Link
                to="/para-empresas"
                className="group relative rounded-3xl glass-card glass-card-hover p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] border-glow"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Building2 className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-display text-foreground mb-4">
                  Para Empresas
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Eficiência, controle e segurança. Soluções corporativas que transformam operações.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span>Saiba mais</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card Para Novos Negócios */}
              <Link
                to="/para-novos-negocios"
                className="group relative rounded-3xl glass-card glass-card-hover p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] border-glow"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Rocket className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-display text-foreground mb-4">
                  Para Novos Negócios
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Do zero ao MVP com velocidade. Aceleração e investimento para startups.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span>Saiba mais</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Link para Produtos */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-border hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <Link to="/produtos">
                  <Package className="w-5 h-5 mr-2" />
                  Ver todos os produtos
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE SERVIÇOS */}
        <section className="section-spacing gradient-dark-section">
          <div className="container-custom">
            <div className="text-center mb-16">
              <p className="badge-premium mb-6">
                <span className="text-primary">»</span>
                Nossos Serviços
              </p>
              <h2 className="font-display text-foreground">
                Soluções completas<br />
                <span className="text-gradient-emerald">para escalar seu negócio</span>
              </h2>
            </div>

            <Services />
          </div>
        </section>

        {/* SEÇÃO DE CASES */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="text-center mb-16">
              <p className="badge-premium mb-6">
                <span className="text-primary">»</span>
                Cases de Sucesso
              </p>
              <h2 className="font-display text-foreground">
                Projetos que<br />
                <span className="text-gradient-emerald">geram resultados</span>
              </h2>
            </div>

            <Cases />
          </div>
        </section>

        {/* SEÇÃO DE DEPOIMENTOS */}
        <section className="section-spacing gradient-dark-section">
          <div className="container-custom">
            <div className="text-center mb-16">
              <p className="badge-premium mb-6">
                <span className="text-primary">»</span>
                Depoimentos
              </p>
              <h2 className="font-display text-foreground">
                O que nossos<br />
                <span className="text-gradient-emerald">clientes dizem</span>
              </h2>
            </div>

            <Testimonials />
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-spacing">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-display text-foreground mb-6">
              Pronto para<br />
              <span className="text-gradient-emerald">transformar seu negócio?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Vamos conversar sobre como podemos acelerar seus resultados com tecnologia de ponta.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 py-7 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-glow-sm hover:shadow-glow transition-all"
              asChild
            >
              <a
                href="https://wa.me/5582991709740"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar reunião
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
