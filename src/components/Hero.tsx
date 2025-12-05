import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users, Rocket, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const metrics = [
    { value: "+20", label: "Projetos entregues", icon: Rocket },
    { value: "8", label: "Anos de experiência", icon: Award },
    { value: "100%", label: "Satisfação", icon: TrendingUp },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient - Azul Limvex Premium */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/10" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom max-w-[1200px] relative z-10 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Desenvolvimento de excelência</span>
            </div>
          </div>

          {/* Headline - MUITO mais forte */}
          <h1 className="font-black leading-[1.1] text-balance mb-6">
            <span className="block text-foreground mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Software sob medida, aceleração de negócios
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              e produtos white-label.
            </span>
          </h1>

          {/* Subheadline - Mais direto e objetivo */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed text-balance">
            Criamos software, aceleramos startups e entregamos produtos prontos. Tudo com tecnologia de excelência.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="rounded-full px-10 py-7 text-base md:text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
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
              className="rounded-full px-10 py-7 text-base md:text-lg font-semibold border-2 hover:bg-primary/5"
              asChild
            >
              <Link to="/produtos">
                Explorar soluções
              </Link>
            </Button>
          </div>
        </div>

        {/* Métricas Flutuantes */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-primary/20 bg-white/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-blue hover:scale-105"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};
