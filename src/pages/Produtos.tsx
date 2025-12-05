import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { SectionBlue } from "@/components/ui/SectionBlue";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  CreditCard,
  Gamepad2,
  Package,
  MessageCircle,
  CheckCircle2,
  Palette,
  Globe,
} from "lucide-react";

const products = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "Plataforma de Delivery Local",
    description: "Solução completa estilo 'iFood da sua cidade' para restaurantes e estabelecimentos locais.",
    features: [
      "Multi-tenant",
      "White-label",
      "Gateway de pagamento integrado",
      "App mobile",
    ],
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Plataforma de Pagamentos / Cobranças",
    description: "Sistema completo de gestão financeira, cobranças recorrentes, boletos, PIX e integração com bancos.",
    features: [
      "Multi-tenant",
      "White-label",
      "API REST completa",
      "Dashboard financeiro",
    ],
  },
  {
    id: 3,
    icon: Gamepad2,
    title: "Plataforma White-label para Apostas",
    description: "Solução completa e licenciada para operação de jogos e apostas online.",
    features: [
      "White-label",
      "Integração com provedores",
      "Sistema de gestão completo",
      "Personalização total",
    ],
  },
  {
    id: 4,
    icon: Package,
    title: "SaaS Multi-tenant Genérico",
    description: "Plataforma base SaaS configurável para diferentes nichos com sistema de assinaturas e billing.",
    features: [
      "Multi-tenant",
      "White-label",
      "Sistema de assinaturas",
      "API REST completa",
    ],
  },
];

const whiteLabelFeatures = [
  {
    icon: Palette,
    title: "Personalização Visual",
    description:
      "Logo, cores, domínio próprio e identidade visual totalmente customizável com a marca do cliente.",
  },
  {
    icon: Globe,
    title: "Domínio Próprio",
    description:
      "O produto roda no domínio do cliente, sem referências à Limvex. Experiência 100% white-label.",
  },
  {
    icon: CheckCircle2,
    title: "Setup Rápido",
    description:
      "Configuração inicial em poucos dias. Produto pronto para uso, apenas personalizamos e configuramos.",
  },
  {
    icon: Package,
    title: "Modelo Flexível",
    description:
      "Venda única, assinatura mensal, taxa por transação ou modelo híbrido. Adaptamos ao seu negócio.",
  },
];

export default function Produtos() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <SectionBlue spacing="lg" variant="light" className="pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Catálogo de Produtos Limvex
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 font-medium">
              Soluções prontas e customizáveis para você lançar rápido com a sua marca.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 py-6 font-bold"
              asChild
            >
              <a href="https://wa.me/5582991709740" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar produtos disponíveis
              </a>
            </Button>
          </div>
        </SectionBlue>

        {/* Grid de Produtos - Catálogo Simples */}
        <Section spacing="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="group relative rounded-2xl border-2 border-primary/20 bg-white hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
                >
                  {/* Header com ícone */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                      </div>
                      <Badge className="bg-primary/15 text-primary border-primary/30 font-bold">
                        White-label
                      </Badge>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {product.title}
                    </h3>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    {/* Descrição */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full rounded-full font-semibold border-2"
                      asChild
                    >
                      <a href="https://wa.me/5582991709740" target="_blank" rel="noopener noreferrer">
                        Falar sobre este produto
                        <MessageCircle className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Como funciona white-label - Seção Azul */}
        <SectionBlue spacing="lg" variant="light">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-foreground">
              Como funciona o white-label na prática
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Produtos prontos, totalmente personalizáveis e configuráveis para sua marca
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whiteLabelFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </SectionBlue>

        {/* CTA Final */}
        <Section spacing="lg">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border-2 border-primary/30 bg-gradient-card-blue p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Quer conhecer nosso catálogo completo?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 font-medium">
              Entre em contato e descubra qual produto white-label é ideal para seu negócio.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 py-6 font-bold"
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
