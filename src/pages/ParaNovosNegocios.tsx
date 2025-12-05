import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { SectionBlue } from "@/components/ui/SectionBlue";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StepCard } from "@/components/ui/StepCard";
import { EquityHighlight } from "@/components/ui/EquityHighlight";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Lightbulb,
  Target,
  MessageCircle,
  Users,
  Code,
  Building2,
} from "lucide-react";

const processSteps = [
  {
    step: 1,
    icon: Lightbulb,
    title: "Diagnóstico e Refinamento",
    subtitle: "Analisamos proposta de valor e viabilidade técnica.",
  },
  {
    step: 2,
    icon: Target,
    title: "Desenho do Produto / UX",
    subtitle: "Criamos experiência do usuário e validamos com protótipos.",
  },
  {
    step: 3,
    icon: Code,
    title: "Desenvolvimento do MVP",
    subtitle: "Construímos o produto mínimo viável com funcionalidades essenciais.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Lançamento e Melhoria",
    subtitle: "Deploy, primeiros usuários e iterações baseadas em feedback.",
  },
];

const targetAudience = [
  {
    icon: Lightbulb,
    title: "Pessoas com ideia clara",
    description:
      "Você tem uma ideia de negócio bem definida, mas não tem time técnico para desenvolvê-la.",
  },
  {
    icon: Building2,
    title: "Negócios físicos querendo digitalizar",
    description:
      "Sua empresa já existe no mundo físico e você quer criar uma versão digital ou plataforma online.",
  },
  {
    icon: Users,
    title: "Fundadores buscando co-founder técnico",
    description:
      "Você precisa de um sócio técnico que não apenas desenvolva, mas também participe estrategicamente do negócio.",
  },
];

export default function ParaNovosNegocios() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <SectionBlue spacing="lg" variant="light" className="pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Transformamos sua ideia em uma startup de verdade
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 font-medium">
              Entramos como sócios, construímos seu MVP. Você foca no negócio, nós cuidamos da tecnologia.
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 font-bold" asChild>
              <a href="https://wa.me/5582991709740" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero validar minha ideia
              </a>
            </Button>
          </div>
        </SectionBlue>

        {/* Destaque do Modelo - Com gráficos */}
        <Section spacing="lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              Modelo de Investimento
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Investimento acessível + parceria estratégica
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <EquityHighlight />
          </div>
        </Section>

        {/* Como funciona na prática */}
        <Section spacing="lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              Como funciona na prática
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-2xl border-2 border-primary/20 bg-white p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl font-black text-primary">
                      {step.step}
                    </div>
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Para quem é */}
        <SectionBlue spacing="lg" variant="light">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              Para quem é
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((audience, index) => (
              <FeatureCard
                key={index}
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
              />
            ))}
          </div>
        </SectionBlue>

        {/* CTA Final */}
        <Section spacing="lg">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border-2 border-primary/30 bg-gradient-card-blue p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Pronto para validar sua ideia?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 font-medium">
              Entre em contato e vamos conversar sobre como transformar sua ideia em realidade.
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 font-bold" asChild>
              <a href="https://wa.me/5582991709740" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar reunião
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
