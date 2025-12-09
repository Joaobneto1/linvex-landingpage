import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { DarkSection } from "@/components/ui/DarkSection";
import { HeroDark } from "@/components/ui/HeroDark";
import { Button } from "@/components/ui/button";
import {
  Target,
  Zap,
  Shield,
  Users,
  Code,
  CheckCircle2,
  ArrowLeft,
  Menu,
  X,
  TrendingUp,
  Lightbulb,
  Building2,
  Rocket,
  Package,
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
const SobreHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Sobre", href: "#sobre" },
    { name: "Missão e Visão", href: "#missao-visao" },
    { name: "Valores", href: "#valores" },
    { name: "O que fazemos", href: "#o-que-fazemos" },
    { name: "Como trabalhamos", href: "#como-trabalhamos" },
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
              onClick={() => scrollToSection("contato")}
              className="rounded-full px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Fale conosco
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
                scrollToSection("contato");
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 rounded-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium"
            >
              Fale conosco
            </Button>
          </div>
        </div>
      )}
    </header>
  );
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
    <div className="min-h-screen relative" style={{ backgroundColor: "#0D111B" }}>
      {/* Vinheta sutil estilo Arauc */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      <SobreHeader />

      <main className="text-white pt-20 relative z-10">
        {/* Hero Escuro Premium - estilo Arauc */}
        <HeroDark>
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge superior */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-semibold text-white">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Software House</span>
                <span className="text-white/30">·</span>
                <Code className="w-4 h-4 text-blue-400" />
                <span>Desenvolvimento Sob Medida</span>
                <span className="text-white/30">·</span>
                <Users className="w-4 h-4 text-blue-400" />
                <span>Equipes Sênior</span>
              </div>
            </div>

            {/* Título gigante */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] text-white">
              Sobre a{" "}
              <span className="text-blue-400">Limvex</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed">
              A Limvex é um grupo de tecnologia especializado no desenvolvimento de software sob medida, criação de produtos digitais e aceleração de novos negócios.
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Nosso propósito é simples: elevar o padrão tecnológico das empresas e acelerar a inovação de forma clara, eficiente e previsível.
            </p>
          </div>
        </HeroDark>

        {/* Seção: Sobre */}
        <DarkSection id="sobre" spacing="xl" variant="default">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Sobre a Limvex
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                A Limvex é um grupo de tecnologia especializado no desenvolvimento de software sob medida, criação de produtos digitais e aceleração de novos negócios. Atuamos como parceiros estratégicos, combinando engenharia de alto nível, metodologia ágil e visão de negócio para transformar ideias em soluções reais que geram resultados.
              </p>
              <p>
                Nosso propósito é simples: <strong className="text-white">elevar o padrão tecnológico das empresas e acelerar a inovação de forma clara, eficiente e previsível.</strong>
              </p>
            </div>
          </div>
        </DarkSection>

        {/* Seção: Missão e Visão */}
        <DarkSection id="missao-visao" spacing="xl" variant="lighter">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Missão e Visão
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Missão */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Target className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Nossa Missão
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Desenvolver soluções tecnológicas de excelência que aumentem a eficiência, competitividade e inovação de empresas e empreendedores, entregando valor real e resultados mensuráveis.
                </p>
              </div>

              {/* Visão */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Nossa Visão
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Ser reconhecida como um dos principais grupos de tecnologia do país na criação de software, produtos digitais e no apoio ao crescimento de startups em estágio inicial.
                </p>
              </div>
            </div>
          </div>
        </DarkSection>

        {/* Seção: Valores */}
        <DarkSection id="valores" spacing="xl" variant="default">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
              Nossos Valores
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              Os princípios que guiam cada projeto e decisão na Limvex
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </DarkSection>

        {/* Seção: O que fazemos */}
        <DarkSection id="o-que-fazemos" spacing="xl" variant="default">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
              O que fazemos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-10 max-w-5xl mx-auto">
            {oQueFazemos.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover-lift"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        </DarkSection>

        {/* Seção: Como trabalhamos */}
        <DarkSection id="como-trabalhamos" spacing="xl" variant="lighter">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
              Como trabalhamos
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              Seguimos quatro pilares que garantem eficiência e previsibilidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {comoTrabalhamos.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover-lift"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </DarkSection>

        {/* Seção: Nosso Compromisso */}
        <DarkSection id="compromisso" spacing="xl" variant="default">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Nosso Compromisso
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-center">
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
        </DarkSection>

        {/* Seção: Quem confia na Limvex */}
        <DarkSection id="quem-confia" spacing="xl" variant="lighter">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Quem confia na Limvex
              </h2>
            </div>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
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
        </DarkSection>


        {/* CTA Final */}
        <DarkSection id="contato" spacing="xl" variant="default">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
                Entre em contato
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 font-medium">
                Estamos prontos para entender sua demanda e criar a solução ideal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 font-bold bg-blue-500 hover:bg-blue-600 text-white"
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
                  className="rounded-full px-8 py-6 font-bold border-2 border-white/20 text-white hover:bg-white/10"
                >
                  <Link to="/para-novos-negocios">
                    Para Novos Negócios
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
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
