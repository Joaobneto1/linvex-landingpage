import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Target, Zap, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Cada projeto é desenvolvido com foco em entregar valor real e mensurável para o negócio do cliente.",
  },
  {
    icon: Zap,
    title: "Performance e Escalabilidade",
    description:
      "Desenvolvemos software que não apenas funciona, mas que escala com o crescimento do seu negócio.",
  },
  {
    icon: Shield,
    title: "Segurança e Confiabilidade",
    description:
      "Aplicamos as melhores práticas de segurança e arquitetura para garantir sistemas robustos e confiáveis.",
  },
  {
    icon: Users,
    title: "Equipes Sênior",
    description:
      "Trabalhamos apenas com profissionais experientes que entendem tanto de tecnologia quanto de negócios.",
  },
];

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Section spacing="xl" className="pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Sobre a Limvex
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance mb-8">
            Somos uma software house com equipes sênior especializadas em desenvolvimento web,
            mobile e automação com IA.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Atuamos com empresas de diferentes segmentos que buscam escalar seus produtos digitais
            com qualidade, segurança e previsibilidade. Com processos ágeis e arquitetura robusta,
            garantimos entregas de alto desempenho. Transformamos desafios de negócio em soluções
            tecnológicas eficientes, sólidas e orientadas a resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {values.map((value, index) => (
            <FeatureCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

