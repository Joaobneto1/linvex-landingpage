import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const PromoBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0A0A0F]">
      <div className="container-custom max-w-[1200px]">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-900/30 to-pink-900/20" />
          
          {/* Background image */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left content */}
              <div className="lg:pr-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-6">
                  <span>Oferta Especial</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                  Acelere Seu Negócio{" "}
                  <span className="block mt-2">
                    com{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Tecnologia de Ponta
                    </span>
                  </span>
                </h3>
                
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Software sob medida que simplifica gestão, automatiza processos e entrega resultados mensuráveis para sua empresa crescer.
                </p>

                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25"
                  asChild
                >
                  <Link to="/produtos">
                    Explorar Soluções
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Right visual - Dashboard image completa */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-2xl">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80"
                      alt="Dashboard de analytics"
                      className="w-full h-auto object-cover"
                    />
                    {/* Overlay gradient roxo/rosa no lado direito */}
                    <div className="absolute inset-0 bg-gradient-to-l from-purple-600/30 via-pink-600/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative glow elements - mais visíveis */}
                  <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-purple-500/30 blur-3xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-pink-500/30 blur-2xl" />
                  <div className="absolute top-1/2 -right-8 w-24 h-24 rounded-full bg-purple-400/20 blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
