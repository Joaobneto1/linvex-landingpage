import { Link } from "react-router-dom";
import { FooterSection } from "@/components/redesign/FooterSection";
import { HeaderDark } from "@/components/redesign/HeaderDark";
import { Button } from "@/components/ui/button";
import {
  Target,
  Zap,
  Shield,
  Users,
  Code,
  CheckCircle2,
  ArrowLeft,
  TrendingUp,
  Lightbulb,
  Building2,
  Rocket,
  Package,
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

// Valores da empresa
const values = [
  {
    icon: Shield,
    title: "Transparência",
    description:
      "Comunicação clara, previsibilidade e total visibilidade das entregas.",
  },
  {
    icon: Code,
    title: "Excelência Técnica",
    description:
      "Qualidade de código, arquitetura robusta e boas práticas.",
  },
  {
    icon: Users,
    title: "Parceria Real",
    description:
      "Não apenas desenvolvemos — caminhamos junto, como sócios e como time.",
  },
  {
    icon: Zap,
    title: "Velocidade com Precisão",
    description:
      "Agilidade sem perder qualidade.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Procuramos sempre a melhor solução para cada desafio.",
  },
];

// O que fazemos
const oQueFazemos = [
  {
    icon: Building2,
    title: "Desenvolvimento para Empresas",
    description:
      "Criamos softwares totalmente personalizados, pensados para resolver desafios reais de operação: sistemas internos, portais e plataformas, integrações e automações, dashboards e análise de dados, apps mobile e soluções IoT.",
    details: "Atuamos com arquitetura moderna, segurança corporativa e ciclos semanais de evolução — garantindo previsibilidade e alinhamento contínuo.",
  },
  {
    icon: Rocket,
    title: "Novos Negócios / Co-founder",
    description:
      "Ajudamos empreendedores a transformar ideias em startups de verdade: construção de MVP, parceria estratégica com equity, validação da solução e do mercado, acompanhamento e evolução semanal, time completo de produto e tecnologia.",
    details: "Entramos como sócios técnicos para acelerar o crescimento e reduzir custos iniciais.",
  },
  {
    icon: Package,
    title: "Produtos Limvex",
    description:
      "Desenvolvemos produtos prontos e customizáveis para diferentes mercados. O atual carro-chefe é o LVX Commerce, nosso sistema completo de 'delivery local' ao estilo 'iFood da sua cidade'.",
    details: "Inclui portal web + app mobile, gateway de pagamento, dashboard administrativo, multi-tenant e white-label, infraestrutura escalável. Muito em breve novos produtos serão adicionados ao ecossistema.",
  },
];

// Como trabalhamos
const comoTrabalhamos = [
  {
    icon: Target,
    title: "Diagnóstico e Planejamento",
    description:
      "Entendimento profundo da operação, requisitos e oportunidades.",
  },
  {
    icon: TrendingUp,
    title: "Sprints Semanais",
    description:
      "Evolução contínua, demos semanais e total transparência do progresso.",
  },
  {
    icon: Code,
    title: "Tecnologia de Ponta",
    description:
      "Boas práticas de engenharia, segurança e escalabilidade desde o início.",
  },
  {
    icon: CheckCircle2,
    title: "Entrega e Suporte",
    description:
      "Finalizamos com documentação, treinamento e acompanhamento pós-lançamento.",
  },
];

export default function Sobre() {

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <HeaderDark />

      <main className="text-white pt-20 relative z-10">
        {/* Hero Section - Fintech Style */}
        <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0A0A0F]" />
            
            {/* Purple gradient glow */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[80px]" />
            
            {/* Wave lines effect - SVG decorativo */}
            <svg
              className="absolute bottom-0 left-0 w-full h-[400px] opacity-30"
              viewBox="0 0 1440 400"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 300 Q 360 200, 720 300 T 1440 300"
                stroke="url(#wave-gradient-sobre)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0 320 Q 360 220, 720 320 T 1440 320"
                stroke="url(#wave-gradient-sobre)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M0 340 Q 360 240, 720 340 T 1440 340"
                stroke="url(#wave-gradient-sobre)"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
              <defs>
                <linearGradient id="wave-gradient-sobre" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container-custom max-w-[1200px] relative z-10 py-20 lg:py-32">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Badges visuais (não clicáveis) */}
              <div className="flex justify-center gap-4 mb-8 flex-wrap">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium backdrop-blur-sm">
                  <Code className="w-4 h-4" />
                  <span>Desenvolvimento Sob Medida</span>
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span>Equipes Sênior</span>
                </div>
              </div>

              {/* Título gigante */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] text-white">
                Sobre a{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                  Limvex
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-4 font-medium leading-relaxed">
                A Limvex é um grupo de tecnologia especializado no desenvolvimento de software sob medida, criação de produtos digitais e aceleração de novos negócios.
              </p>
              <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
                Nosso propósito é simples: elevar o padrão tecnológico das empresas e acelerar a inovação de forma clara, eficiente e previsível.
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Sobre */}
        <section id="sobre" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                  Sobre a Limvex
                </h2>
              </div>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  A Limvex é um grupo de tecnologia especializado no desenvolvimento de software sob medida, criação de produtos digitais e aceleração de novos negócios. Atuamos como parceiros estratégicos, combinando engenharia de alto nível, metodologia ágil e visão de negócio para transformar ideias em soluções reais que geram resultados.
                </p>
                <p>
                  Nosso propósito é simples: <strong className="text-white">elevar o padrão tecnológico das empresas e acelerar a inovação de forma clara, eficiente e previsível.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Missão e Visão */}
        <section id="missao-visao" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                  Missão e{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Visão
                  </span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Missão */}
                <div className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/30">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                      <Target className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    Nossa Missão
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    Desenvolver soluções tecnológicas de excelência que aumentem a eficiência, competitividade e inovação de empresas e empreendedores, entregando valor real e resultados mensuráveis.
                  </p>
                </div>

                {/* Visão */}
                <div className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/30">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                      <Lightbulb className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    Nossa Visão
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    Ser reconhecida como um dos principais grupos de tecnologia do país na criação de software, produtos digitais e no apoio ao crescimento de startups em estágio inicial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Valores */}
        <section id="valores" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Nossos{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Valores
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Os princípios que guiam cada projeto e decisão na Limvex
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
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
                      {value.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção: O que fazemos */}
        <section id="o-que-fazemos" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                O que{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  fazemos
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-10 max-w-5xl mx-auto">
              {oQueFazemos.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm p-8 md:p-10 transition-all duration-300 hover:border-purple-500/30"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                        <Icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-white/70 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <p className="text-base text-white/60 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção: Como trabalhamos */}
        <section id="como-trabalhamos" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Como{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  trabalhamos
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Seguimos quatro pilares que garantem eficiência e previsibilidade
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {comoTrabalhamos.map((item, index) => {
                const Icon = item.icon;
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
                      {item.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção: Nosso Compromisso e Quem confia na Limvex - Lado a lado */}
        <section className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Nosso Compromisso */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 text-white">
                  Nosso{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Compromisso
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                  <p>
                    Cada projeto é tratado como único.
                  </p>
                  <p>
                    Cada cliente recebe atenção direta dos founders.
                  </p>
                  <p>
                    Cada entrega é pensada para gerar impacto real.
                  </p>
                  <p className="text-xl font-semibold text-white mt-8">
                    Somos obsessivos por clareza, velocidade e resultado.
                  </p>
                </div>
              </div>

              {/* Quem confia na Limvex */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 text-white">
                  Quem confia na{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Limvex
                  </span>
                </h2>
                <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                  <p>
                    <strong className="text-white">Empresas</strong> que buscam excelência, segurança e soluções de alto impacto.
                  </p>
                  <p>
                    <strong className="text-white">Startups</strong> que querem nascer com estrutura tecnológica sólida.
                  </p>
                  <p>
                    <strong className="text-white">Empreendedores</strong> que querem tirar ideias do papel com velocidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contato" className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="max-w-4xl mx-auto text-center">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 md:p-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
                  Entre em{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    contato
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-white/60 mb-8 font-medium">
                  Estamos prontos para entender sua demanda e criar a solução ideal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 py-6 font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25"
                  >
                    <Link to="/para-empresas">
                      Para Empresas
                      <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 font-bold border-2 border-white/20 text-white hover:bg-white/10 hover:border-purple-500/30"
                  >
                    <Link to="/para-novos-negocios">
                      Para Novos Negócios
                      <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
