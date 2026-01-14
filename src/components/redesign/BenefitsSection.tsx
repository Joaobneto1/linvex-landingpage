import { Shield, Zap, Users, Clock, Target, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Best practices de segurança, código limpo e arquitetura robusta em todos os projetos.",
  },
  {
    icon: Zap,
    title: "Desenvolvimento Ágil",
    description: "Sprints semanais com entregas constantes e transparência total no processo.",
  },
  {
    icon: Users,
    title: "Equipe Sênior",
    description: "Desenvolvedores experientes focados em entregar valor real para o seu negócio.",
  },
  {
    icon: Clock,
    title: "Resposta Rápida",
    description: "Tempo de resposta menor que 24h para dúvidas e ajustes necessários.",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Soluções orientadas a resolver problemas reais e gerar ROI mensurável.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Arquitetura preparada para crescer junto com o seu negócio.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0F]">
      <div className="container-custom max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Limvex
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Benefícios que fazem a diferença no desenvolvimento do seu projeto
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] p-8 transition-all duration-300 hover:border-purple-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                  <Icon className="w-6 h-6 text-white/70 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
