import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { StepCard } from "@/components/ui/StepCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  Code,
  Rocket,
  Target,
  Zap,
  Shield,
  MessageCircle
} from "lucide-react";

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Descoberta e Análise",
    description:
      "Entendemos profundamente seu negócio, desafios, objetivos e contexto. Realizamos workshops, entrevistas com stakeholders e análise técnica para criar um plano de ação estratégico.",
  },
  {
    step: 2,
    icon: Users,
    title: "Formação do Squad",
    description:
      "Montamos uma equipe multidisciplinar com os perfis ideais para seu projeto: frontend, backend, QA, design e product owner. Cada membro é selecionado com base na expertise necessária.",
  },
  {
    step: 3,
    icon: Code,
    title: "Desenvolvimento Ágil",
    description:
      "Sprints de 2 semanas com entregas incrementais e feedback contínuo. Daily standups, revisões de código, testes automatizados e deploy contínuo garantem qualidade e velocidade.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Entrega e Evolução",
    description:
      "Deploy em produção com monitoramento, suporte e evolução contínua. Garantimos que o software continue evoluindo junto com seu negócio.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Metodologia Agile",
    description:
      "Sprints de 2 semanas, daily standups e retrospectivas garantem transparência total e adaptação rápida a mudanças.",
  },
  {
    icon: Users,
    title: "Squads Multidisciplinares",
    description:
      "Times completos com frontend, backend, QA e design trabalhando de forma integrada. Reduz retrabalho e acelera entregas.",
  },
  {
    icon: Shield,
    title: "Entrega Garantida",
    description:
      "Contratos com SLA, milestones claros e comunicação direta com stakeholders. Você sabe exatamente o que esperar e quando.",
  },
  {
    icon: Zap,
    title: "Performance e Qualidade",
    description:
      "Código limpo, testes automatizados, arquitetura escalável e boas práticas garantem software de excelência.",
  },
];

export default function ComoTrabalhamos() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Section spacing="xl" className="pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Como Trabalhamos
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
            Processo estruturado para reduzir risco e entregar no prazo com qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {processSteps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Pilares</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fundamentos que garantem a excelência em cada projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <FeatureCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="lg" className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quer saber mais?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Entre em contato e descubra como podemos ajudar seu negócio.
          </p>
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="https://wa.me/5582991709740" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar com especialista
            </a>
          </Button>
        </div>
      </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

