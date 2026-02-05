import { Link } from "react-router-dom";
import { Award, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import compromissoImage from "@/assets/Compromisso-Secao.jpg";

export function ProvaSocialSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements - Apenas azul */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099FF]/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0076CE]/10 rounded-full blur-[200px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Text content */}
          <Reveal direction="right" delay={0} className="text-center lg:text-left lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Nosso Compromisso</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight px-2">
              Compromisso com resultado
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed px-2 mb-6">
              Previsibilidade e construção de produtos escaláveis são nossos pilares.
              Trabalhamos para que cada projeto seja uma base sólida para o crescimento do seu negócio.
            </p>
            <div className="px-2">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link to="/contato">Quero algo assim</Link>
              </Button>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal direction="left" delay={100} className="relative group lg:col-span-3">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0076CE]/20 to-[#0099FF]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
              <img
                src={compromissoImage}
                alt="Compromisso com resultado - Tecnologia de ponta para resultados consistentes"
                loading="lazy"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-contain sm:object-cover"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0076CE]/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#0076CE]" />
                  </div>
                  <p className="text-white font-semibold">
                    "Tecnologia de ponta para resultados consistentes"
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
