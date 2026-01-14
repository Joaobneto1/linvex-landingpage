import { Users, Award, TrendingUp, Zap } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "8+",
    label: "Anos de experiência",
  },
  {
    icon: Users,
    value: "20+",
    label: "Projetos entregues",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Taxa de satisfação",
  },
  {
    icon: Zap,
    value: "< 24h",
    label: "Tempo de resposta",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0A0A0F] border-y border-white/10">
      <div className="container-custom max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-4">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
