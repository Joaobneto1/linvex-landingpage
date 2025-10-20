import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.jpg";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero = ({ onOpenQuoteModal }: HeroProps) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Nosso foco é desempenho, escalabilidade e longevidade — software que evolui junto com o seu negócio.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Desenvolvimento de excelência</span>
            </div>
          </div>

          {/* Headline */}
           <h1 className="font-bold leading-tight text-center mb-6 animate-fade-in">
            <span className="block text-foreground mb-2 text-4xl lg:text-5xl">A Limvex Software Group transforma tecnologia em resultado.</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-2xl lg:text-4xl">
              Construímos sistemas, integrações e soluções digitais.
            </span>
          </h1>

          {/* Subheadline with typing effect */}
          <p className="text-xl lg:text-2xl text-center text-muted-foreground max-w-3xl mx-auto mb-12 min-h-[3rem] font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={onOpenQuoteModal} 
              size="lg" 
              className="w-full sm:w-auto group shadow-lg hover:shadow-xl rounded-full px-8"
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver portfólio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projetos entregues</div>
            </div>
            <div className="text-center border-x border-border/50">
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação dos clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};