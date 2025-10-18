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
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition-smooth border border-border gradient-card"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-muted-foreground">
                    <span className="text-primary mr-2 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="w-full">
                Mais detalhes
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
