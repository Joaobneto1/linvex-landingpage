import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DarkSection } from "@/components/ui/DarkSection";
import { KPICompact } from "@/components/ui/KPICompact";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ModelCard } from "@/components/ui/ModelCard";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Users,
  Code,
  Settings,
  Link2,
  RefreshCw,
  MessageCircle,
  Clock,
  FileText,
  Shield,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Sistemas Sob Medida",
    description: "Soluções construídas do zero para necessidades específicas da sua empresa.",
  },
  {
    icon: Settings,
    title: "Criação de Novas Features",
    description: "Novas funcionalidades para produtos existentes, mantendo qualidade e consistência.",
  },
  {
    icon: Link2,
    title: "Integrações entre Sistemas",
    description: "Conectamos sistemas com APIs, ERPs e plataformas externas.",
  },
  {
    icon: RefreshCw,
    title: "Manutenção e Evolução",
    description: "Evolução contínua para performance, segurança e longevidade.",
  },
];

const contractModels = [
  {
    icon: FileText,
    title: "Projeto Fechado",
    description: "Escopo definido, prazo e orçamento fixos. Ideal para projetos com requisitos claros.",
  },
  {
    icon: Clock,
    title: "Pacote de Horas",
    description: "Flexibilidade para usar horas conforme necessário. Ideal para demandas variáveis e manutenção contínua.",
  },
  {
    icon: Users,
    title: "Time Dedicado / Squad",
    description: "Equipe completa alocada exclusivamente no seu projeto. Ideal para projetos de longo prazo e alta complexidade.",
  },
];

export default function ParaEmpresas() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D1117' }}>
      <Header />

      <main className="text-white">
        {/* Hero - Estilo Arauc */}
        <DarkSection spacing="xl" variant="default" className="pt-24 md:pt-32 relative overflow-hidden">
          {/* Background com gradiente abstrato */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Badge superior */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>Segurança</span>
                <span className="text-white/20">·</span>
                <Zap className="w-4 h-4 text-blue-500" />
                <span>Eficiência</span>
                <span className="text-white/20">·</span>
                <Code className="w-4 h-4 text-blue-500" />
                <span>Tecnologia</span>
              </div>
            </div>

            {/* Título em 3 linhas */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight text-white">
              Criamos e evoluímos<br />
              software sob medida<br />
              para a sua empresa
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
              Tecnologia de excelência para acelerar operações, garantir previsibilidade e aumentar eficiência. Sem equity, sem sociedade — parceria B2B direta.
            </p>

            {/* CTA */}
            <Button
              size="lg"
              className="rounded-full px-10 py-7 text-base md:text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://wa.me/5582991709740" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale com nossos especialistas
              </a>
            </Button>
          </div>
        </DarkSection>

        {/* Bloco de KPIs - Horizontal */}
        <DarkSection spacing="md" variant="lighter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <KPICompact
              value="< 24h"
              label="Tempo de resposta"
              icon={Clock}
            />
            <KPICompact
              value="Semanal"
              label="Demonstração de progresso"
              icon={CheckCircle2}
            />
            <KPICompact
              value="Padrões Enterprise"
              label="Segurança"
              icon={Shield}
            />
            <KPICompact
              value="Sprints ágeis"
              label="Entrega"
              icon={Zap}
            />
          </div>
        </DarkSection>

        {/* O que fazemos para empresas */}
        <DarkSection spacing="xl" variant="default">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
              O que fazemos para empresas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </DarkSection>

        {/* Modelos de Contratação */}
        <DarkSection spacing="xl" variant="lighter">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
              Modelos de Contratação
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Escolha o formato que melhor se adapta às necessidades do seu projeto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {contractModels.map((model, index) => (
              <ModelCard
                key={index}
                icon={model.icon}
                title={model.title}
                description={model.description}
              />
            ))}
          </div>
        </DarkSection>

        {/* CTA Final - Escuro e chamativo */}
        <DarkSection spacing="xl" variant="darker">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
              Parceria B2B sem complicação
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 font-medium max-w-2xl mx-auto">
              Serviços sob medida com previsibilidade, segurança e entregas consistentes.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 py-7 text-base md:text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://wa.me/5582991709740" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar orçamento
              </a>
            </Button>
          </div>
        </DarkSection>
      </main>

      <div style={{ backgroundColor: '#0D1117' }}>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}
