import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import iconeImagem from "@/assets/COMPRAS.webp";
import notebookImagem from "@/assets/NOTEBOOK-ECOMMERCE.webp";
import {
  Zap,
  Package,
  BarChart3,
  CreditCard,
  Store,
  Link2,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Plataforma Escalável",
    description: "Infraestrutura cloud-native que cresce junto com seu negócio, suportando milhares de transações simultâneas.",
  },
  {
    icon: Package,
    title: "Gestão de Estoque Automatizada",
    description: "Controle inteligente de inventário com alertas, reposição automática e sincronização multi-canal.",
  },
  {
    icon: BarChart3,
    title: "Analytics em Tempo Real",
    description: "Dashboards completos para acompanhar vendas, conversões, ticket médio e métricas de performance.",
  },
  {
    icon: CreditCard,
    title: "Checkout Otimizado",
    description: "Experiência de compra fluida com múltiplas opções de pagamento e taxa de conversão otimizada.",
  },
  {
    icon: Store,
    title: "Multi-canal Integrado",
    description: "Gerencie vendas do site próprio, Mercado Livre, Amazon, Shopee e outros marketplaces em um só lugar.",
  },
  {
    icon: Link2,
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
    <div className="min-h-screen bg-[#02000A] text-white overflow-x-hidden">
      <Header />

      {/* Top Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 mt-12 min-h-[70vh] flex items-center overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0076CE]/15 rounded-full blur-[100px] md:blur-[150px] z-0 animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-[#0099FF]/10 rounded-full blur-[120px] z-0 pointer-events-none" />

        <div className="container mx-auto max-w-[1440px] relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl w-full lg:w-1/2 relative z-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              LVX<span className="font-light">Commerce</span>
            </h1>

            <div className="text-sm font-bold tracking-widest uppercase text-[#0099FF] mb-2">
              Plataforma de E-commerce
            </div>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light">
              <strong className="text-white font-medium">Plataforma completa de e-commerce</strong> com gestão de estoque, integrações com marketplaces e checkout otimizado. Escale suas vendas online com tecnologia de ponta.
            </p>

            <Link to="/contato" className="mt-4">
              <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-6 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,153,255,0.3)] border border-white/10">
                Agendar demonstração
              </Button>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] flex justify-center lg:justify-end z-0 mt-8 lg:mt-0">
            <img src={iconeImagem} alt="Limvex Commerce" className="absolute top-[60%] sm:top-[65%] -translate-y-1/2 lg:right-[-15%] xl:right-[-15%] w-[130%] sm:w-[110%] lg:w-[130%] xl:w-[900px] max-w-none animate-float-slow pointer-events-none" />
          </div>

        </div>
      </section>

      {/* Notebook Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0099FF]/5 rounded-full blur-[120px] z-0 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#0076CE]/10 rounded-full blur-[150px] z-0 pointer-events-none" />

        <div className="container mx-auto max-w-[1440px] relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          <div className="w-full lg:w-1/2 relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] flex justify-center lg:justify-start z-0 mb-8 lg:mb-0">
            <img src={notebookImagem} alt="Plataforma Dashboard" className="absolute top-1/2 -translate-y-1/2 left-[5%] sm:left-[10%] lg:left-auto lg:-left-[25%] xl:-left-[35%] w-[140%] sm:w-[120%] lg:w-[170%] xl:w-[1200px] max-w-none pointer-events-none" />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-xl lg:w-1/2 relative z-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Tudo que você precisa para <br className="hidden lg:block" />
              <span className="text-[#0099FF]">vender mais</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light mt-4">
              O Limvex Commerce é uma plataforma pronta para uso, desenvolvida para empresas que querem profissionalizar e escalar suas operações de vendas online. Implementação em dias, não em meses.
            </p>
          </div>

        </div>
      </section>

      {/* Features Belt Section */}
      <section className="py-12 bg-[#02000A] relative z-20 mt-12">
        <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative flex items-center bg-[#070512] border border-white/10 rounded-xl p-5 sm:p-6 flex-1 min-w-[200px] max-w-[350px] shadow-lg transition-colors hover:border-white/20"
              >
                <div className="absolute -top-3 -left-3 bg-[#02000A] rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-[#0099FF]" />
                </div>
                <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed font-light m-0">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Principais Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Recursos Principais
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
              Tudo que você precisa para gerenciar e escalar seu e-commerce em uma única plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-[#070512] border border-white/5 rounded-2xl p-8 hover:bg-[#0A071A] hover:border-[#0099FF]/40 transition-all duration-300 shadow-xl self-stretch"
              >
                {/* Background line icon watermark */}
                <feature.icon className="absolute -right-4 -bottom-4 w-40 h-40 text-[#0099FF]/15 group-hover:text-[#0099FF]/25 transition-colors duration-300" strokeWidth={0.5} />

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-[#0099FF] text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/70 text-base leading-relaxed font-light max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos Passos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#05030F]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

            {/* CTA Left */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left basis-1/3">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Próximos Passos
              </h2>
              <p className="text-[#0099FF] text-lg font-medium mb-8">
                Conheça nossa plataforma e solicite<br className="hidden lg:block" /> uma proposta personalizada
              </p>
              <Link to="/contato">
                <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-6 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,153,255,0.3)] border border-white/10">
                  Agendar demonstração
                </Button>
              </Link>
            </div>

            {/* Boxes Right */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 basis-2/3 w-full">
              {[
                { title: "Implementação", desc: "Rápida e estruturada" },
                { title: "Treinamento", desc: "Incluso" },
                { title: "Suporte", desc: "Prioritário" }
              ].map((item, idx) => (
                <div key={idx} className="flex-1 bg-[#02000A] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors shadow-lg">
                  <h4 className="text-[#0099FF] text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-white/80 text-sm font-light">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#02000A]">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0099FF]/60 rounded-full blur-[180px] -z-10" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Pronto para escalar <br className="hidden sm:block" />suas <span className="text-[#0099FF]">vendas online?</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Agende uma demonstração gratuita e veja o Limvex Commerce em ação com casos de uso do seu segmento.
          </p>
          <Link to="/contato">
            <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-4 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,153,255,0.4)] border border-white/10">
              Agendar demonstração
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
