import { Server, Shield, Clock, HeadphonesIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const garantias = [
  {
    icon: Server,
    numero: "Arquitetura multi-cloud",
    descricao: "Infraestrutura cloud-native multi-região",
    gradient: "from-[#0076CE] to-[#0099FF]",
    bgGradient: "from-[#0076CE]/15 to-[#0076CE]/5",
    glowColor: "rgba(0, 118, 206, 0.25)",
  },
  {
    icon: Shield,
    numero: "99.9% SLA",
    descricao: "Disponibilidade contratual garantida",
    gradient: "from-[#0099FF] to-[#00B8FF]",
    bgGradient: "from-[#0099FF]/15 to-[#0099FF]/5",
    glowColor: "rgba(0, 153, 255, 0.25)",
  },
  {
    icon: Clock,
    numero: "Conformidade LGPD",
    descricao: "Conformidade regulatória completa",
    gradient: "from-[#00B8FF] to-[#0076CE]",
    bgGradient: "from-[#00B8FF]/15 to-[#00B8FF]/5",
    glowColor: "rgba(0, 184, 255, 0.25)",
  },
  {
    icon: HeadphonesIcon,
    numero: "24/7/365",
    descricao: "Suporte de missão crítica",
    gradient: "from-[#0076CE] via-[#0099FF] to-[#00B8FF]",
    bgGradient: "from-[#0076CE]/15 to-[#0099FF]/5",
    glowColor: "rgba(0, 118, 206, 0.25)",
  },
];

export function SolucaoSection() {
  return (
    <section id="garantias" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#0076CE] rounded-full blur-[180px] opacity-18" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#0099FF] rounded-full blur-[180px] opacity-15" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/70">Compromisso enterprise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-white tracking-tight max-w-3xl mx-auto px-2">
              Compromisso enterprise
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed px-2">
              Garantias contratuais e infraestrutura de nível corporativo
            </p>
          </div>
        </Reveal>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {garantias.map((garantia, index) => {
            const Icon = garantia.icon;
            return (
              <Reveal key={index} direction="up" delay={index * 100}>
                <div
                  className={`group relative h-full p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${garantia.bgGradient} border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px] text-center`}
                  style={{ boxShadow: `0 8px 32px ${garantia.glowColor}` }}
                >
                  {/* Icon */}
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${garantia.gradient} flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`} style={{ boxShadow: `0 0 20px ${garantia.glowColor}` }}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  {/* Number */}
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2 leading-tight">
                    {garantia.numero}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[10px] sm:text-xs md:text-sm text-white/65 leading-relaxed">
                    {garantia.descricao}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
