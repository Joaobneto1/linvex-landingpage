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
} from "lucide-react";

const features = [
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Monitoramento Automatizado de Editais",
    description: "Acompanhamento em tempo real de novos editais relevantes para seu negócio.",
  },
  {
    icon: <FolderSearch className="w-6 h-6" />,
    title: "Alertas Personalizados",
    description: "Notificações configuráveis por categoria, região e faixa de valor.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Gestão Documental",
    description: "Organize e mantenha atualizados todos os documentos necessários para licitações.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Análise de Viabilidade",
    description: "Avalie automaticamente a viabilidade de participação em cada edital.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Dashboard Completo",
    description: "Visão geral de todas as licitações em andamento, ganhas e perdidas.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Conformidade Garantida",
    description: "Checklists e validações para garantir que sua proposta está em conformidade.",
  },
];

const benefits = [
  "Economize até 80% do tempo em busca de editais",
  "Aumente em 3x suas chances de sucesso",
  "Nunca mais perca um prazo importante",
  "Integração com os principais portais de licitação",
  "Histórico completo de participações",
];

export default function LimvexLicitacao() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                Gestão de Licitações
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Limvex{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Licitação
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Simplifique sua participação em licitações públicas. O Limvex Licitação automatiza
                o processo de monitoramento e gestão, economizando tempo e aumentando suas
                chances de sucesso em contratos públicos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato">
                  <Button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/30">
                    Solicitar Demonstração
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Illustration placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-white/10 flex items-center justify-center">
                <FileText className="w-32 h-32 text-emerald-500/50" />
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
              Sobre o Limvex Licitação
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Desenvolvido para empresas que participam de licitações públicas, o Limvex
              Licitação centraliza todo o processo em uma única plataforma. Desde a busca por
              editais até o acompanhamento dos resultados, você tem controle total sobre suas
              oportunidades no mercado público.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
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
              Ferramentas completas para você nunca perder uma oportunidade de licitação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500/20 via-[#030014] to-[#030014]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Quer saber mais sobre o Limvex Licitação?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Descubra como o Limvex Licitação pode ajudar sua empresa a conquistar mais
            contratos públicos com menos esforço.
          </p>
          <Link to="/contato">
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-10 py-6 h-auto text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/30">
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
