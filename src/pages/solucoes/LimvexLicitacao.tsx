import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Bell,
  FolderSearch,
  Shield,
  BarChart3,
  Clock,
  ArrowRight,
  CheckCircle2,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Monitoramento 24/7 de Editais",
    description: "Varredura automática em todos os portais de licitação, 24 horas por dia, 7 dias por semana.",
  },
  {
    icon: <FolderSearch className="w-6 h-6" />,
    title: "Alertas Inteligentes Personalizados",
    description: "Notificações configuráveis por categoria, região, órgão, faixa de valor e palavras-chave.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Gestão Completa de Propostas",
    description: "Organize documentos, gere propostas e acompanhe todo o ciclo da licitação em um só lugar.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Análise de Viabilidade com IA",
    description: "Inteligência artificial avalia automaticamente suas chances de sucesso em cada edital.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Dashboard de Performance",
    description: "Visão completa de licitações em andamento, ganhas, perdidas e análise de ROI.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Conformidade Garantida",
    description: "Checklists automáticos e validações para garantir que sua proposta está 100% em conformidade.",
  },
];

const benefits = [
  "Economize até 80% do tempo em busca de editais",
  "Aumente em 3x suas chances de sucesso",
  "Nunca mais perca um prazo importante",
  "Integração com todos os principais portais",
  "Histórico completo de participações",
  "Suporte técnico especializado incluso",
];

export default function LimvexLicitacao() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0099FF]/10 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0099FF]/20 border border-[#0099FF]/30 rounded-full text-[#0099FF] text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                Gestão de Licitações
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Limvex{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B8FF]">
                  Bidding
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-6 leading-relaxed">
                Automatize o monitoramento de licitações públicas e aumente suas chances de ganhar contratos governamentais. Plataforma completa com IA para análise de viabilidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato">
                  <Button className="bg-[#0099FF] hover:bg-[#00B8FF] text-white font-semibold px-8 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0099FF]/30">
                    Agendar Demonstração
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Illustration placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#0099FF]/20 to-[#00B8FF]/10 border border-white/10 flex items-center justify-center">
                <FileText className="w-32 h-32 text-[#0099FF]/50" />
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
              Conquiste mais contratos públicos
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              O Limvex Bidding é uma plataforma pronta para uso que centraliza todo o processo de licitações em um só lugar. Da busca por editais até a análise de resultados, você tem controle total sobre suas oportunidades no mercado público.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0099FF] flex-shrink-0" />
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
              Ferramentas completas para você nunca perder uma oportunidade de licitação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-[#0099FF]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0099FF]/20 flex items-center justify-center text-[#0099FF] mb-4 group-hover:scale-110 transition-transform">
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

          <div className="bg-gradient-to-br from-[#0099FF]/10 to-[#0099FF]/5 border border-[#0099FF]/20 rounded-2xl p-8 text-center">
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-[#0099FF] font-semibold">Implementação</p>
                <p className="text-white/60 text-sm">Rápida e estruturada</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-[#0099FF] font-semibold">Treinamento</p>
                <p className="text-white/60 text-sm">Incluso</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-[#0099FF] font-semibold">Suporte</p>
                <p className="text-white/60 text-sm">Prioritário</p>
              </div>
            </div>

            <Link to="/contato">
              <Button className="bg-[#0099FF] hover:bg-[#00B8FF] text-white font-semibold px-8 py-4 h-auto rounded-xl transition-all hover:scale-105">
                Solicitar Proposta Personalizada
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0099FF]/20 via-[#030014] to-[#030014]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para ganhar mais licitações?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja o Limvex Bidding em ação com casos de uso do seu segmento.
          </p>
          <Link to="/contato">
            <Button className="bg-[#0099FF] hover:bg-[#00B8FF] text-white font-semibold px-10 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0099FF]/30">
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
