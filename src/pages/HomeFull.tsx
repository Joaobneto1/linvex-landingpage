import { Header } from "@/components/Header";
import { Section } from "@/components/ui/Section";
import { SectionBlue } from "@/components/ui/SectionBlue";
import { BusinessModelCard } from "@/components/BusinessModelCard";
import { Cases } from "@/components/Cases";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  Building2,
  Rocket,
  Package,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import limvexSG from "@/assets/limvexLogoBg.png";

const whyChoose = [
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "MVP em 2-4 semanas, projetos no prazo.",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Código limpo, testes e arquitetura sólida.",
  },
  {
    icon: Users,
    title: "Equipes Sênior",
    description: "Profissionais experientes, sem aprendizes.",
  },
  {
    icon: CheckCircle2,
    title: "Resultados Mensuráveis",
    description: "Foco em entregar valor real para o negócio.",
  },
];

export default function HomeFull() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero - Quem somos */}
        <Section spacing="lg" className="pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <img
                src={limvexSG}
                alt="Limvex Software Group"
                className="h-20 md:h-24 w-auto mx-auto"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-foreground">
              Quem é a Limvex
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Software house especializada em desenvolvimento sob medida, aceleração de negócios e produtos white-label.
            </p>
          </div>
        </Section>

        {/* 3 Modelos de Negócio */}
        <Section spacing="lg">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              Como trabalhamos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Três formas de trabalhar com a Limvex
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BusinessModelCard
              icon={Building2}
              title="Para Empresas"
              description="Projetos sob medida, features e squads para sua operação."
              href="/para-empresas"
              highlight="Serviços B2B"
            />
            <BusinessModelCard
              icon={Rocket}
              title="Para Novos Negócios"
              description="Construímos seu MVP em troca de equity."
              href="/para-novos-negocios"
              highlight="Co-founder / Equity"
            />
            <BusinessModelCard
              icon={Package}
              title="Produtos / White-labels"
              description="Soluções prontas, customizáveis com sua marca."
              href="/produtos"
              highlight="Plug & Play"
            />
          </div>
        </Section>

        {/* Cases - Preview */}
        <SectionBlue spacing="lg" variant="light">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              Cases de sucesso
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Projetos que entregaram resultado real
            </p>
            <Cases />
            <div className="mt-8">
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/cases">
                  Ver todos os cases
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </SectionBlue>

        {/* Por que escolher a Limvex */}
        <Section spacing="lg">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              Por que escolher a Limvex
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Section>

        {/* CTA Final */}
        <Section spacing="lg">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border-2 border-primary/30 bg-gradient-card-blue p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Pronto para começar?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 font-medium">
              Fale com nossos especialistas
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-bold"
              asChild
            >
              <a href="https://wa.me/5582991709740" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
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

