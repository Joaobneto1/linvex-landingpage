import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const CTAGridSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0F] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Fade edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-transparent to-[#0A0A0F]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-transparent to-[#0A0A0F]" />
      </div>

      <div className="container-custom max-w-[1200px] relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Decorative image placeholder */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-8">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight">
            Comece a Crescer Mais Rápido com{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Nossas Soluções
            </span>
            {" "}All-in-One
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            Software sob medida que simplifica a gestão, automatiza processos 
            e entrega resultados mensuráveis para o seu negócio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25"
              asChild
            >
              <a
                href="https://wa.me/5582991709740"
                target="_blank"
                rel="noopener noreferrer"
              >
                Começar agora
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold border-white/20 bg-white/5 text-white hover:bg-white/10"
              asChild
            >
              <Link to="/para-empresas">
                <Play className="w-4 h-4 mr-2 fill-current" />
                Como funciona
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
