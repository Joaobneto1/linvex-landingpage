import { Users, Rocket, Calendar, HeadphonesIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import parceirosImage from "@/assets/Parceiros-secao.jpg";

export function TimeSection() {
  return (
    <section id="time" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0076CE]/10 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image Side */}
          <Reveal direction="right" delay={0} className="relative group order-2 lg:order-1 lg:col-span-3">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0076CE]/20 to-[#0099FF]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
              <img
                src={parceirosImage}
                alt="Time de produto Limvex trabalhando na evolução das soluções"
                loading="lazy"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-contain sm:object-cover"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
            </div>
          </Reveal>

          {/* Content Side */}
          <Reveal direction="left" delay={100} className="order-1 lg:order-2 lg:col-span-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/70">Engenharia de produto</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4 md:mb-6 text-white tracking-tight leading-tight px-1 sm:px-2">
              Time de engenharia
            </h2>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/65 mb-5 sm:mb-6 md:mb-8 leading-relaxed px-1 sm:px-2">
              Arquitetos e engenheiros especializados em todas as camadas da stack. Atuamos da infraestrutura cloud até a aplicação. Metodologias ágeis com entrega contínua, qualidade de código e performance.
            </p>

            {/* Features */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 px-1 sm:px-0">
              {[
                { icon: Rocket, text: "Cloud: AWS, Azure, GCP" },
                { icon: Calendar, text: "Backend: Node.js, Python, Go" },
                { icon: HeadphonesIcon, text: "Infraestrutura: Kubernetes, Terraform" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={index} direction="up" delay={200 + index * 50}>
                    <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0076CE]/30 transition-all duration-300">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-[#0076CE]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#0076CE]" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-white/80">{item.text}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
