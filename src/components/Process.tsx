import { Users, Zap, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Squads multidisciplinares",
    description:
      "Times completos com frontend, backend, QA e design trabalhando de forma integrada. Reduz retrabalho e acelera entregas.",
  },
  {
    icon: Zap,
    title: "Metodologia Agile",
    description:
      "Sprints de 2 semanas, daily standups e retrospectivas garantem transparência total e adaptação rápida a mudanças.",
  },
  {
    icon: CheckCircle,
    title: "Entrega garantida",
    description:
      "Contratos com SLA, milestones claros e comunicação direta com stakeholders. Você sabe exatamente o que esperar e quando.",
  },
];

export const Process = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nosso processo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Como reduzimos risco e entregamos no prazo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-lg hover:bg-card transition-smooth"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
