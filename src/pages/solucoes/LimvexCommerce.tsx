import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Zap,
  BarChart3,
  Package,
  CreditCard,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Store,
  Link2,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Plataforma Escalável",
    description: "Infraestrutura cloud-native que cresce junto com seu negócio, suportando milhares de transações simultâneas.",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Gestão de Estoque Automatizada",
    description: "Controle inteligente de inventário com alertas, reposição automática e sincronização multi-canal.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics em Tempo Real",
    description: "Dashboards completos para acompanhar vendas, conversões, ticket médio e métricas de performance.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Checkout Otimizado",
    description: "Experiência de compra fluida com múltiplas opções de pagamento e taxa de conversão otimizada.",
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: "Multi-canal Integrado",
    description: "Gerencie vendas do site próprio, Mercado Livre, Amazon, Shopee e outros marketplaces em um só lugar.",
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Integrações Nativas",
    description: "Conecta com ERPs, transportadoras, gateways de pagamento e sistemas que você já usa.",
  },
];

const benefits = [
  "Aumento de até 40% na taxa de conversão",
  "Redução de 60% no tempo de gestão de estoque",
  "Integração com os principais ERPs do mercado",
  "Relatórios personalizados e automatizados",
  "Conformidade com LGPD e segurança de dados",
  "Suporte técnico especializado incluso",
];

export default function LimvexCommerce() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0076CE]/10 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0076CE]/20 border border-[#0076CE]/30 rounded-full text-[#0076CE] text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4" />
                Plataforma E-commerce
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Limvex{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#00B8FF]">
                  Commerce
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-6 leading-relaxed">
                Plataforma completa de e-commerce com gestão de estoque, integrações com marketplaces e checkout otimizado. Escale suas vendas online com tecnologia de ponta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato">
                  <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-8 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0076CE]/30">
                    Agendar Demonstração
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Illustration placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#0076CE]/20 to-[#00B8FF]/10 border border-white/10 flex items-center justify-center">
                <ShoppingCart className="w-32 h-32 text-[#0076CE]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Tudo que você precisa para vender mais
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              O Limvex Commerce é uma plataforma pronta para uso, desenvolvida para empresas que querem profissionalizar e escalar suas operações de vendas online. Implementação em dias, não em meses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0076CE] flex-shrink-0" />
                <span className="text-white/80 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Recursos Principais
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar e escalar seu e-commerce em uma única plataforma.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-[#0076CE]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0076CE]/20 flex items-center justify-center text-[#0076CE] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Próximos passos
            </h2>
            <p className="text-lg text-white/60">
              Conheça nossa plataforma e solicite uma proposta personalizada
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0076CE]/10 to-[#0076CE]/5 border border-[#0076CE]/20 rounded-2xl p-8 text-center">
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-[#0076CE] font-semibold">Implementação</p>
                <p className="text-white/60 text-sm">Rápida e estruturada</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-[#0076CE] font-semibold">Treinamento</p>
                <p className="text-white/60 text-sm">Incluso</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-[#0076CE] font-semibold">Suporte</p>
                <p className="text-white/60 text-sm">Prioritário</p>
              </div>
            </div>

            <Link to="/contato">
              <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-8 py-4 h-auto rounded-xl transition-all hover:scale-105">
                Solicitar Proposta Personalizada
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0076CE]/20 via-[#030014] to-[#030014]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para escalar suas vendas online?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja o Limvex Commerce em ação com casos de uso do seu segmento.
          </p>
          <Link to="/contato">
            <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-10 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0076CE]/30">
              Agendar Demonstração Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
