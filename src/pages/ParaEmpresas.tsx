import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { HeaderDark } from "@/components/redesign/HeaderDark";
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
  ArrowRight,
} from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: `${formData.nome} ${formData.sobrenome}`.trim(),
          email: formData.email,
          empresa: formData.empresa,
          telefone: formData.telefone,
          cargo: formData.cargo,
          descricao: formData.descricao,
          origem: 'para-empresas',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Erro ao enviar formulário');
      }

      // Toast de sucesso
      toast({
        title: "Enviado com sucesso!",
        description: "Recebemos seus dados, entraremos em contato em breve.",
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
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar formulário",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        disabled={isSubmitting}
        className="w-full rounded-full px-10 py-7 text-base md:text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar pedido de contato'}
      </Button>
    </form>
  );
};

export default function ParaEmpresas() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <HeaderDark />

      <main className="text-white pt-20 relative z-10">
        {/* Hero Section - Fintech Style */}
        <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0A0A0F]" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px]" />
          </div>

          <div className="container-custom max-w-[1200px] relative z-10 py-20 lg:py-32">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Badge superior */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold backdrop-blur-sm">
                  <Shield className="w-4 h-4" />
                  <span>Corporate Grade</span>
                  <span className="text-white/30">·</span>
                  <Zap className="w-4 h-4" />
                  <span>Segurança</span>
                  <span className="text-white/30">·</span>
                  <Code className="w-4 h-4" />
                  <span>Transparência</span>
                </div>
              </div>

              {/* Título gigante */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] text-white">
                Criamos softwares totalmente sob medida,
                <br />
                para resolver{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                  o seu problema
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed">
                Desenvolvimento de software sob demanda, com consultoria gratuita, reuniões presenciais, ciclos semanais, previsibilidade de custos e eficiência em todo o projeto.
              </p>

              {/* CTA */}
              <Button
                size="lg"
                onClick={() => scrollToSection("formulario-final")}
                className="rounded-full px-10 py-7 text-base md:text-lg font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/30 transition-all"
              >
                Fale com nossos especialistas
              </Button>
            </div>
          </div>
        </section>

        {/* Bloco de KPIs - Horizontal */}
        <section className="py-16 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: "< 24h", label: "Tempo de resposta", icon: Clock },
                { value: "Semanal", label: "Demo de progresso", icon: CheckCircle2 },
                { value: "Best Practices", label: "Segurança", icon: Shield },
                { value: "Sprints ágeis", label: "Entrega", icon: Zap },
              ].map((kpi, index) => {
                const Icon = kpi.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center hover:bg-white/[0.05] hover:border-purple-500/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-2">
                      {kpi.value}
                    </div>
                    <div className="text-sm text-white/60 font-medium">
                      {kpi.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção: Como Trabalhamos */}
        <section id="como-trabalhamos" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Como{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Trabalhamos
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Clareza, alinhamento e previsibilidade. Do diagnóstico à eficiência em produção.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] p-8 transition-all duration-300 hover:border-purple-500/30"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-purple-600 text-white font-black flex items-center justify-center text-lg border-4 border-[#0A0A0F]">
                      {step.step}
                    </div>
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                        <Icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.bullets && (
                      <ul className="space-y-2">
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção: Nossos Serviços - Grid 3x3 */}
        <section id="servicos" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Nossos{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Serviços
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Soluções completas para transformar sua operação
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/30"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                        <Icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção: Por que escolher a Limvex */}
        <section id="beneficios" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Por que escolher a{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Limvex
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Benefícios que fazem a diferença no seu projeto
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/30"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                        <Icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção: Ecossistema */}
        <section id="ecossistema" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Nosso{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Ecossistema
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Parceiros e tecnologias que fazem parte do nosso dia a dia
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="text-white/20 text-sm font-medium">Logo {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário Final */}
        <section id="formulario-final" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 md:p-14">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
                    Fale com nossos{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      especialistas
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-white/60 font-medium">
                    Preencha o formulário abaixo e entraremos em contato em breve
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="bg-[#0A0A0F] relative z-10">
        <Footer />
      </div>
    </div>
  );
}
