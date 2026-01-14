import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Para Empresas",
    price: "Sob consulta",
    period: "",
    description: "Projetos corporativos",
    features: [
      "Desenvolvimento sob medida",
      "Equipes sênior dedicadas",
      "Reuniões in loco quando necessário",
      "Sprints ágeis semanais",
      "Suporte contínuo",
    ],
    href: "/para-empresas",
    highlighted: false,
  },
  {
    name: "Para Novos Negócios",
    price: "R$ 3.000",
    period: "+ 10x R$ 500",
    description: "MVP + Parceria estratégica",
    features: [
      "MVP funcional em 4-8 semanas",
      "17,5% de equity para Limvex",
      "Parceria estratégica contínua",
      "Mentoria de produto",
      "Acesso à comunidade de founders",
    ],
    href: "/para-novos-negocios",
    highlighted: true,
  },
  {
    name: "Produtos White-label",
    price: "A partir de",
    period: "R$ 1.500/mês",
    description: "Soluções prontas",
    features: [
      "Produtos prontos para uso",
      "Customização com sua marca",
      "Deploy rápido",
      "Atualizações inclusas",
      "Suporte dedicado",
    ],
    href: "/produtos",
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0F]">
      <div className="container-custom max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4">
            Comece a crescer{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              com a Limvex
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Escolha o modelo ideal para o seu momento de negócio
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-purple-500/50 bg-purple-500/5 scale-105"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {plan.price}
                  {plan.period && (
                    <span className="text-lg text-white/50 font-normal ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-purple-400" : "text-white/50"
                    }`} />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full rounded-full py-6 font-semibold ${
                  plan.highlighted
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
                asChild
              >
                <Link to={plan.href}>
                  Começar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
