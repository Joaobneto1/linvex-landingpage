import { Building2, Rocket, Package, Users, BarChart3, Zap } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Para Empresas",
    description:
      "Projetos sob medida para sua operação. Desenvolvimento corporativo com segurança e transparência.",
  },
  {
    icon: Rocket,
    title: "Para Novos Negócios",
    description:
      "Construímos seu MVP em troca de equity. Parceria estratégica para validar sua ideia no mercado.",
  },
  {
    icon: Package,
    title: "Produtos White-label",
    description:
      "Soluções prontas, customizáveis com sua marca. Plug & Play para acelerar seu time-to-market.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description:
      "Sistemas CRM customizados para centralizar relacionamento, automatizar vendas e conversões.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description:
      "Monitore métricas com dashboards em tempo real que fornecem insights claros e acionáveis.",
  },
  {
    icon: Zap,
    title: "Automação com IA",
    description:
      "Otimize operações do dia-a-dia automatizando tarefas repetitivas com inteligência artificial.",
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0F]">
      <div className="container-custom max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4">
            Soluções para{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Acelerar
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Seu Negócio
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Utilizamos o poder da tecnologia para otimizar cada aspecto do seu negócio. 
            Nossa suíte de serviços é projetada para ajudá-lo a escalar e ter sucesso.
          </p>
        </div>

        {/* Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] p-8 transition-all duration-300 hover:border-purple-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                  <Icon className="w-6 h-6 text-white/70 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
