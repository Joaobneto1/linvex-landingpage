import { Users, Handshake, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import parceirosImage from "@/assets/Parceiros-secao.jpg";

export function TimeSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements - Apenas azul */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0076CE]/10 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image Side */}
          <Reveal direction="right" delay={0} className="relative group order-2 lg:order-1 lg:col-span-3">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0076CE]/20 to-[#0099FF]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
              <img
                src={parceirosImage}
                alt="Equipe de desenvolvimento trabalhando em conjunto como parceiros"
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
              <span className="text-xs sm:text-sm font-medium text-white/90">Nossa equipe</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight leading-tight px-2">
              Trabalhamos como parceiros, não fornecedores
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 leading-relaxed px-2">
              Nossa equipe se integra ao seu time para garantir comunicação clara, alinhamento constante e resultados que realmente importam para o seu negócio.
            </p>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: Handshake, text: "Parceria genuína com foco no seu sucesso" },
                { icon: MessageSquare, text: "Comunicação direta sem intermediários" },
                { icon: Users, text: "Equipe dedicada ao seu projeto" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={index} direction="up" delay={200 + index * 50}>
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0076CE]/30 transition-all duration-300">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0076CE]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0076CE]" />
                      </div>
                      <span className="text-sm sm:text-base text-white/80">{item.text}</span>
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
