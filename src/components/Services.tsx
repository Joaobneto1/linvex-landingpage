import { Code, Blocks, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description:
      "Criamos produtos digitais escaláveis com arquitetura moderna, do MVP à enterprise.",
    deliverables: [
      "Web apps com React, Next.js e TypeScript",
      "Apps mobile nativos e híbridos (React Native)",
      "Backend Node.js, Ruby on Rails, Python",
      "Arquitetura, frontend, backend, QA e observabilidade desde o dia 1",
    ],
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description:
      "Soluções descentralizadas e contratos inteligentes para negócios do futuro.",
    deliverables: [
      "Smart contracts em Solidity e Rust",
      "DApps e carteiras Web3",
      "Integração com redes Ethereum, Polygon, Solana",
      "Auditoria e otimização de contratos",
    ],
  },
  {
    icon: Users,
    title: "Recrutamento Tech",
    description:
      "Montamos e alocamos times completos de desenvolvimento para seu projeto.",
    deliverables: [
      "Squads sênior dedicados ao seu produto",
      "Desenvolvedores frontend, backend, mobile e QA",
      "Tech leads e arquitetos de software",
      "Processos ágeis e gestão incluída",
    ],
  },
];

export const Services = () => {
  return (
    <section id="desenvolvimento" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nossos serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para escalar seu negócio digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-smooth"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-muted-foreground">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-primary/10 text-primary text-xs mr-2.5 flex-shrink-0 mt-0.5">
                      →
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="w-full group-hover:bg-primary/5">
                Mais detalhes
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
