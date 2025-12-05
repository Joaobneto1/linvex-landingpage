import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ShoppingCart, Cloud, MessageSquare, Users, Code, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Plataformas de e-commerce completas e personalizadas para impulsionar suas vendas online com experiência de compra excepcional.",
  },
  {
    icon: Cloud,
    title: "SaaS",
    description:
      "Aplicações SaaS escaláveis e multi-tenant, com infraestrutura robusta e modelo de assinatura integrado.",
  },
  {
    icon: MessageSquare,
    title: "Chatbot com IA",
    description:
      "Chatbots inteligentes com IA para automatizar atendimento, qualificar leads e melhorar a experiência do cliente 24/7.",
  },
  {
    icon: Users,
    title: "CRM",
    description:
      "Sistemas CRM customizados para centralizar relacionamento com clientes, automatizar vendas e maximizar conversões.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Aplicações web modernas, responsivas e de alto desempenho usando as melhores tecnologias do mercado.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android com performance otimizada e experiência de usuário excepcional.",
  },
  {
    icon: Zap,
    title: "Automação com IA",
    description:
      "Soluções de automação inteligente que utilizam IA para otimizar processos e aumentar a produtividade do seu negócio.",
  },
];

export default function Servicos() {
  return (
    <div className="min-h-screen pt-20">
      <Section spacing="xl" className="text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Nossos Serviços
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
            Soluções completas para escalar seu negócio digital com tecnologia de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

