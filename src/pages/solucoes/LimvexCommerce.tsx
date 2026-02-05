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
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Plataforma Escalável",
    description: "Infraestrutura que cresce junto com seu negócio, suportando milhares de transações.",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Gestão de Estoque Automatizada",
    description: "Controle inteligente de inventário com alertas e reposição automática.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Análise de Dados em Tempo Real",
    description: "Dashboards completos para acompanhar vendas, conversões e métricas importantes.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Checkout Otimizado",
    description: "Experiência de compra fluida com múltiplas opções de pagamento integradas.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Integrações com Marketplaces",
    description: "Conecte sua loja aos principais marketplaces como Mercado Livre, Amazon e mais.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Suporte Técnico Especializado",
    description: "Equipe dedicada para ajudar você em todas as etapas do seu e-commerce.",
  },
];

const benefits = [
  "Aumento de até 40% na taxa de conversão",
  "Redução de 60% no tempo de gestão de estoque",
  "Integração com os principais ERPs do mercado",
  "Relatórios personalizados e automatizados",
  "Conformidade com LGPD e segurança de dados",
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
                Solução E-commerce
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Limvex{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#00B8FF]">
                  Commerce
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Transforme suas vendas online com tecnologia de ponta. O Limvex Commerce é a solução
                completa para empresas que desejam escalar suas operações de e-commerce com
                eficiência e segurança.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato">
                  <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-8 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0076CE]/30">
                    Solicitar Demonstração
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
              Sobre o Limvex Commerce
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              O Limvex Commerce foi desenvolvido para atender às necessidades específicas de
              pequenas e médias empresas que desejam profissionalizar suas operações de vendas
              online. Nossa plataforma combina facilidade de uso com recursos avançados,
              permitindo que você foque no que importa: vender mais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/80">{benefit}</span>
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0076CE]/20 via-[#030014] to-[#030014]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Quer saber mais sobre o Limvex Commerce?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e mostrar como o Limvex
            Commerce pode transformar suas vendas online.
          </p>
          <Link to="/contato">
            <Button className="bg-[#0076CE] hover:bg-[#0099FF] text-white font-semibold px-10 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0076CE]/30">
              Falar com Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
