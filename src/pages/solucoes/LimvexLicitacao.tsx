import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import iconeImagem from "@/assets/ICON-LICITAÇÕES 2.webp";
import notebookImagem from "@/assets/NOTEBOOK-LICITAÇÕES.webp";
import {
  FileText,
  Bell,
  FolderSearch,
  Shield,
  BarChart3,
  Bot,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Funil Kanban de Licitações",
    description: "Acompanhe cada processo em tempo real: Prospecção -> Habilitação -> Proposta -> Resultado. Arraste e solte os cards, com status sempre atualizado para toda a equipe.",
  },
  {
    icon: Bot,
    title: "Análise de Edital com IA",
    description: "Envie o edital e receba uma análise completa em segundos. Use o chat para tirar dúvidas no documento e estimar a chance de sucesso da proposta.",
  },
  {
    icon: FileText,
    title: "Módulo Jurídico Inteligente",
    description: "Acompanhe o ciclo jurídico completo de cada licitação. Registre impugnações, recursos e contra-razões com geração automática em .docx. A plataforma detecta efeito suspensivo, sinaliza janelas críticas de recurso e mantém uma timeline histórica de todos os eventos — do edital à homologação.",
  },
  {
    icon: FolderSearch,
    title: "Biblioteca de Documentos",
    description: "Centralize versionamento, validade e alertas de vencimento em um só lugar. Nenhum documento crítico fora do prazo.",
  },
  {
    icon: Bell,
    title: "Gestão de Prazos e Alertas",
    description: "Identifique automaticamente prazos em risco. Visualize todos os eventos em calendário e receba notificações por e-mail.",
  },
  {
    icon: Shield,
    title: "Integrações Governamentais",
    description: "Conecte via API oficial com PNCP e ComprasNet. Faça varredura automática de Diários Oficiais por estado sem trabalho manual.",
  },
  {
    icon: CheckCircle2,
    title: "Checklist Inteligente",
    description: "Use checklists por modalidade com status \"Em Risco\" quando algum critério não for atendido.",
  },
  {
    icon: BarChart3,
    title: "Dashboard e Relatórios",
    description: "Acompanhe KPIs em tempo real, use simulador de disputa e gere relatórios gerenciais em PDF com um clique.",
  },
  {
    icon: Bot,
    title: "Análise Preditiva de Sucesso",
    description: "Com base no edital, histórico de disputas e perfil da licitação, a IA estima a probabilidade real de vencer o processo. Tome decisões mais inteligentes sobre onde concentrar esforços.",
  },
];

const benefits = [
  "Economize 10 a 15 horas semanais por equipe",
  "IA analisa editais completos em segundos",
  "Nunca mais perca um prazo crítico",
  "Gere petições jurídicas automaticamente",
  "Pipeline Kanban com visibilidade total",
  "Integração oficial com PNCP e ComprasNet",
];

export default function LimvexLicitacao() {
  return (
    <div className="min-h-screen bg-[#02000A] text-white overflow-x-hidden">
      <Header />

      {/* Top Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 mt-12 min-h-[70vh] flex items-center overflow-hidden">

        {/* Mobile Background Image (Icone) */}
        <div className="absolute inset-0 z-0 lg:hidden flex items-center justify-center opacity-30 pointer-events-none">
          <img src={iconeImagem} alt="" className="w-[150%] max-w-none blur-sm" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0099FF]/15 rounded-full blur-[100px] md:blur-[150px] z-0 animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-[#0076CE]/10 rounded-full blur-[120px] z-0 pointer-events-none" />

        <div className="container mx-auto max-w-[1440px] relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-4 sm:gap-12 lg:gap-8">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl w-full lg:w-1/2 relative z-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              LVX<span className="font-light">Licitação</span>
            </h1>

            <div className="text-sm font-bold tracking-widest uppercase text-[#0099FF] mb-2">
              Gestão de Licitações Públicas
            </div>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light">
              <strong className="text-white font-medium">Organize e potencialize sua atuação no mercado de licitações.</strong> Uma plataforma desenvolvida para empresas que participam de licitações e precisam acompanhar oportunidades, organizar processos e aumentar eficiência operacional.
            </p>

            <Link to="/contato" state={{ origem: "licitacao" }} className="mt-4">
              <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-6 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,153,255,0.3)] border border-white/10">
                Conhecer a plataforma
              </Button>
            </Link>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end z-0 mt-0 sm:mt-8 lg:mt-0 lg:min-h-[500px] lg:relative">
            <img src={iconeImagem} alt="Limvex Licitação" className="w-[100%] sm:w-[80%] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[-10%] xl:right-[-5%] lg:w-[120%] xl:w-[800px] lg:max-w-none animate-float-slow pointer-events-none" />
          </div>

        </div>
      </section>

      {/* Notebook Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[50vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">

        {/* Mobile Background Image (Notebook) */}
        <div className="absolute inset-0 z-0 lg:hidden flex items-center justify-center opacity-30 pointer-events-none">
          <img src={notebookImagem} alt="" className="w-[180%] ml-[30%] max-w-none blur-sm" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0076CE]/5 rounded-full blur-[120px] z-0 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#0099FF]/10 rounded-full blur-[150px] z-0 pointer-events-none" />

        <div className="container mx-auto max-w-[1440px] relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-12 lg:gap-8">

          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-start z-0 lg:mb-0 lg:min-h-[600px] lg:relative">
            <img src={notebookImagem} alt="Plataforma Dashboard" className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:-left-[25%] xl:-left-[35%] lg:w-[170%] xl:w-[1200px] lg:max-w-none pointer-events-none" />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-xl lg:w-1/2 relative z-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Atuação mais estruturada <br className="hidden lg:block" />
              <span className="text-[#0099FF]">no mercado público.</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light mt-4">
              A solução de licitações da LIMVEX centraliza informações, organiza processos e facilita o acompanhamento de oportunidades, permitindo uma atuação mais estruturada no mercado de compras públicas.
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
              Tudo que sua equipe precisa para operar com precisão
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
              Do funil de prospecção à geração de petições jurídicas, em uma única plataforma.
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

      {/* Infraestrutura Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#05030F]">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Infraestrutura enterprise. Segurança de verdade.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-light mb-10">
              Cada cliente recebe uma instância completamente isolada - banco de dados próprio, URL própria e configurações independentes. Seus dados nunca se misturam com os de nenhuma outra empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Instância dedicada por cliente - banco separado, total privacidade",
              "RBAC completo - controle de acesso por papel e permissão",
              "Auditoria total - histórico de cada ação, nenhum dado é perdido",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#02000A] border border-white/10 rounded-2xl p-7 sm:p-8 flex items-start gap-3 hover:border-white/20 transition-colors shadow-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0099FF] mt-0.5 shrink-0" />
                <p className="text-white/85 text-sm sm:text-base font-light leading-relaxed">{item}</p>
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
                Conheça a plataforma e agende uma demonstração com cases do seu segmento.
              </p>
              <Link to="/contato" state={{ origem: "licitacao" }}>
                <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-6 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,153,255,0.3)] border border-white/10">
                  Solicitar apresentação
                </Button>
              </Link>
            </div>

            {/* Boxes Right */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 basis-2/3 w-full">
              {[
                { title: "Implementação", desc: "Sua instância configurada e operacional em 2 a 3 horas" },
                { title: "Treinamento", desc: "Call de 1 a 2 horas com sua equipe, gravado para referência" },
                { title: "Suporte", desc: "Atendimento com SLA de resposta em até 24h úteis" }
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
            Pronto para operar suas licitações
            <br className="hidden sm:block" />
            <span className="text-[#0099FF]">com inteligência?</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Agende uma demonstração e veja a plataforma funcionando com casos reais do seu segmento.
          </p>
          <Link to="/contato" state={{ origem: "licitacao" }}>
            <Button className="bg-[#0099FF] hover:bg-[#0076CE] text-white font-semibold px-8 py-4 h-auto text-base rounded-[100px] transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,153,255,0.4)] border border-white/10">
              Solicitar apresentação
            </Button>
          </Link>
          <p className="text-sm text-white/70 mt-6 font-light">
            Implementação em 2 a 3 horas · Treinamento incluso · Suporte com SLA garantido
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
