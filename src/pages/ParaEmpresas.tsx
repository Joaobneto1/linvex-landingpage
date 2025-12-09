import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { DarkSection } from "@/components/ui/DarkSection";
import { KPIBlock } from "@/components/ui/KPIBlock";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { HeroDark } from "@/components/ui/HeroDark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  Code,
  Shield,
  Zap,
  Clock,
  Cpu,
  Eye,
  Brain,
  BarChart3,
  Bot,
  FileSpreadsheet,
  Database,
  Calendar,
  Users,
  MapPin,
  Target,
  TrendingUp,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";
import limvexSG from "@/assets/limvexLogoBg.png";
import { cn } from "@/lib/utils";

// Função para scroll suave
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Header customizado estilo Arauc
const ParaEmpresasHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Como Trabalhamos", href: "#como-trabalhamos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Ecossistema", href: "#ecossistema" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D111B] border-b border-white/10">
      <div className="container-custom max-w-[1200px]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-4">
            {/* Botão Voltar - estilo Arauc */}
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#0D111B] hover:bg-white/5 transition-all duration-200 text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar</span>
            </Link>

            {/* Logo com borda suave estilo Arauc */}
            <Link to="/" className="flex items-center">
              <img
                src={limvexSG}
                alt="Limvex Software Group"
                className="h-8 lg:h-10 w-auto border border-white/10 rounded-xl px-3 py-2 bg-[#0D111B]"
              />
            </Link>
          </div>

          {/* Desktop Navigation - estilo Arauc */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href.replace("#", ""));
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("formulario-final")}
              className="rounded-full px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Agendar reunião
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0D111B] border-t border-white/10">
          <div className="container-custom max-w-[1200px] py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href.replace("#", ""));
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToSection("formulario-final");
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 rounded-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium"
            >
              Agendar reunião
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

// Dados dos serviços (9 serviços para grid 3x3)
const services = [
  {
    icon: Code,
    title: "Apps & Sistemas",
    description: "Desenvolvimento de aplicativos e sistemas sob medida para suas necessidades específicas.",
  },
  {
    icon: Cpu,
    title: "IoT & Hardware",
    description: "Integração de dispositivos IoT e hardware customizado para automação e monitoramento.",
  },
  {
    icon: Eye,
    title: "Visão Computacional",
    description: "Soluções de visão computacional e processamento de imagens para análise automatizada.",
  },
  {
    icon: Brain,
    title: "IA Personalizada",
    description: "Modelos de inteligência artificial customizados para resolver problemas específicos do seu negócio.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Dashboards interativos e em tempo real para visualização de dados e métricas.",
  },
  {
    icon: Bot,
    title: "Automações & RPA",
    description: "Automação de processos repetitivos e RPA para aumentar eficiência operacional.",
  },
  {
    icon: FileSpreadsheet,
    title: "Planilhas & Excel",
    description: "Soluções avançadas em planilhas, macros e integrações com Excel e Google Sheets.",
  },
  {
    icon: Database,
    title: "Análise de Dados",
    description: "Análise profunda de dados, ETL e business intelligence para tomada de decisão.",
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    description: "Implementação de práticas de segurança e conformidade para proteger seus dados.",
  },
];

// Dados do processo (4 steps)
const processSteps = [
  {
    step: 1,
    icon: CheckCircle2,
    title: "Diagnóstico gratuito",
    description: "Analisamos suas necessidades, desafios e objetivos sem custo.",
    bullets: [
      "Análise completa do seu negócio",
      "Identificação de oportunidades",
      "Proposta de solução customizada",
    ],
  },
  {
    step: 2,
    icon: MapPin,
    title: "Reuniões in loco",
    description: "Realizamos reuniões presenciais para alinhamento completo.",
    bullets: [
      "Reuniões presenciais quando necessário",
      "Alinhamento estratégico",
      "Entendimento profundo do contexto",
    ],
  },
  {
    step: 3,
    icon: Code,
    title: "Desenvolvimento e transparência",
    description: "Desenvolvimento com sprints ágeis e total transparência.",
    bullets: [
      "Sprints ágeis semanais",
      "Demos de progresso regulares",
      "Transparência total no processo",
    ],
  },
  {
    step: 4,
    icon: Zap,
    title: "Implementação",
    description: "Deploy, testes e suporte contínuo para garantir sucesso.",
    bullets: [
      "Deploy e testes completos",
      "Treinamento da equipe",
      "Suporte contínuo pós-entrega",
    ],
  },
];

// Benefícios (6 itens)
const benefits = [
  {
    icon: Calendar,
    title: "Ciclos semanais",
    description: "Entregas e demos semanais para acompanhamento constante do progresso.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Best practices de segurança, código limpo e arquitetura robusta.",
  },
  {
    icon: Users,
    title: "Consultoria detalhada",
    description: "Consultoria técnica especializada em cada etapa do projeto.",
  },
  {
    icon: MapPin,
    title: "Reuniões In Loco",
    description: "Reuniões presenciais quando necessário para alinhamento completo.",
  },
  {
    icon: Target,
    title: "Roadmap claro",
    description: "Planejamento detalhado com roadmap claro e previsibilidade de entregas.",
  },
  {
    icon: TrendingUp,
    title: "Vantagem competitiva",
    description: "Soluções customizadas que geram vantagem competitiva real no mercado.",
  },
];

// Formulário de contato estilo Arauc
const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    empresa: "",
    telefone: "",
    cargo: "",
    descricao: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome || !formData.email || !formData.empresa) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos nome, email e empresa.",
        variant: "destructive",
      });
      return;
    }

    // Log dos dados (não enviar para backend ainda)
    console.log("Dados do formulário:", formData);

    // Toast de sucesso
    toast({
      title: "Enviado com sucesso!",
      description: "Em breve entraremos em contato.",
    });

    // Limpar formulário
    setFormData({
      nome: "",
      sobrenome: "",
      email: "",
      empresa: "",
      telefone: "",
      cargo: "",
      descricao: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nome" className="text-white text-sm font-medium">
            Nome *
          </Label>
          <Input
            id="nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sobrenome" className="text-white text-sm font-medium">
            Sobrenome
          </Label>
          <Input
            id="sobrenome"
            value={formData.sobrenome}
            onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
            className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white text-sm font-medium">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-white text-sm font-medium">
            Empresa *
          </Label>
          <Input
            id="empresa"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="telefone" className="text-white text-sm font-medium">
            Telefone
          </Label>
          <Input
            id="telefone"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cargo" className="text-white text-sm font-medium">
            Cargo
          </Label>
          <Input
            id="cargo"
            value={formData.cargo}
            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
            className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="descricao" className="text-white text-sm font-medium">
          Descrição da Demanda
        </Label>
        <Textarea
          id="descricao"
          value={formData.descricao}
          onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
          className="min-h-[140px] bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500"
          placeholder="Descreva sua necessidade ou projeto..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full px-10 py-7 text-base md:text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
      >
        Enviar pedido de contato
      </Button>
    </form>
  );
};

export default function ParaEmpresas() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#0D111B" }}>
      {/* Vinheta sutil estilo Arauc */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      <ParaEmpresasHeader />

      <main className="text-white pt-20 relative z-10">
        {/* Hero Escuro Premium - estilo Arauc */}
        <HeroDark>
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge superior - 3 tags estilo Arauc */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-semibold text-white">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Corporate Grade</span>
                <span className="text-white/30">·</span>
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Segurança</span>
                <span className="text-white/30">·</span>
                <Code className="w-4 h-4 text-blue-400" />
                <span>Transparência</span>
              </div>
            </div>

            {/* Título gigante em 3 linhas - estilo Arauc */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] text-white">
              Criamos softwares totalmente sob medida,
              <br />
              para resolver{" "}
              <span className="text-blue-400">o seu problema</span>
            </h1>

            {/* Subtítulo com largura limitada - estilo Arauc */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed">
              Desenvolvimento de software sob demanda, com consultoria gratuita, reuniões presenciais, ciclos semanais, previsibilidade de custos e eficiência em todo o projeto.
            </p>

            {/* CTA - estilo Arauc */}
            <Button
              size="lg"
              onClick={() => scrollToSection("formulario-final")}
              className="rounded-full px-10 py-7 text-base md:text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Fale com nossos especialistas
            </Button>
          </div>
        </HeroDark>

        {/* Bloco de KPIs - Horizontal estilo Arauc */}
        <DarkSection spacing="md" variant="lighter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <KPIBlock
              value="< 24h"
              label="Tempo de resposta"
              icon={Clock}
            />
            <KPIBlock
              value="Semanal"
              label="Demo de progresso"
              icon={CheckCircle2}
            />
            <KPIBlock
              value="Best Practices"
              label="Segurança"
              icon={Shield}
            />
            <KPIBlock
              value="Sprints ágeis"
              label="Entrega"
              icon={Zap}
            />
          </div>
        </DarkSection>

        {/* Seção: Como Trabalhamos - estilo Arauc */}
        <DarkSection id="como-trabalhamos" spacing="xl" variant="default">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
              Como Trabalhamos
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              Clareza, alinhamento e previsibilidade. Do diagnóstico à eficiência em produção.
            </p>
          </div>
          <ProcessSteps steps={processSteps} />
        </DarkSection>

        {/* Seção: Nossos Serviços - Grid 3x3 estilo Arauc */}
        <DarkSection id="servicos" spacing="xl" variant="default">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
              Nossos Serviços
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              Soluções completas para transformar sua operação
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

        {/* Seção: Por que escolher a Limvex - estilo Arauc */}
        <DarkSection id="beneficios" spacing="xl" variant="default">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
              Por que escolher a Limvex
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              Benefícios que fazem a diferença no seu projeto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </DarkSection>

        {/* Seção: Ecossistema - estilo Arauc */}
        <DarkSection id="ecossistema" spacing="xl" variant="default">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
              Nosso Ecossistema
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              Parceiros e tecnologias que fazem parte do nosso dia a dia
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover-lift"
              >
                <div className="text-white/20 text-sm font-medium">Logo {index + 1}</div>
              </div>
            ))}
          </div>
        </DarkSection>

        {/* Formulário Final - estilo Arauc */}
        <DarkSection id="formulario-final" spacing="xl" variant="darker">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 md:p-14">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
                  Fale com nossos especialistas
                </h2>
                <p className="text-lg md:text-xl text-gray-400 font-medium">
                  Preencha o formulário abaixo e entraremos em contato em breve
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </DarkSection>
      </main>

      {/* Footer com fundo escuro */}
      <div style={{ backgroundColor: "#0D111B" }} className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
