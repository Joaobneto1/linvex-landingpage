import { useRef } from "react";
import { HeaderDark } from "@/components/redesign/HeaderDark";
import { FooterSection } from "@/components/redesign/FooterSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StartupApplicationForm } from "@/components/forms/StartupApplicationForm";
import {
  Rocket,
  Lightbulb,
  Target,
  MessageCircle,
  Users,
  Code,
  Building2,
  Handshake,
  Zap,
  TrendingUp,
  FileText,
  CheckCircle2,
  BarChart3,
  Phone,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const processSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Candidatura e Diagnóstico",
    description: "Analisamos sua proposta de valor e avaliamos o potencial de mercado da ideia.",
  },
  {
    step: 2,
    icon: Target,
    title: "Refinamento e Desenho do MVP",
    description: "Definimos as funcionalidades essenciais para o produto mínimo viável.",
  },
  {
    step: 3,
    icon: Code,
    title: "Desenvolvimento do MVP",
    description: "Construímos o MVP com agilidade e qualidade, seguindo as melhores práticas.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Lançamento e Primeiros Clientes",
    description: "Apoiamos o lançamento e a captação dos primeiros usuários no mercado.",
  },
  {
    step: 5,
    icon: TrendingUp,
    title: "Evolução e Novas Versões",
    description: "Planejamos melhorias e novas funcionalidades conforme feedbacks dos usuários.",
  },
];

const whyModelWorks = [
  {
    icon: Handshake,
    title: "Risco Compartilhado",
    description:
      "Investimos juntos no sucesso do seu negócio, alinhando interesses e minimizando riscos. Nossa participação societária garante que estamos comprometidos com o resultado.",
  },
  {
    icon: Zap,
    title: "Desenvolvimento Acelerado",
    description:
      "Construímos seu MVP em 4–8 semanas, permitindo rápida validação no mercado. Time experiente e metodologia ágil garantem entregas no prazo.",
  },
  {
    icon: TrendingUp,
    title: "Parceria de Longo Prazo",
    description:
      "Acompanhamos sua startup além do MVP, oferecendo suporte contínuo para crescimento. Somos sócios estratégicos, não apenas desenvolvedores.",
  },
];

const beyondCode = [
  {
    icon: Code,
    title: "Produto e Tecnologia",
    description: "Orientação na definição e priorização de funcionalidades, arquitetura técnica e escolha de tecnologias adequadas.",
  },
  {
    icon: BarChart3,
    title: "Mercado e Clientes",
    description: "Estratégias para validação e penetração no mercado-alvo, análise de concorrência e posicionamento do produto.",
  },
  {
    icon: Target,
    title: "Acompanhamento Estratégico",
    description: "Mentoria contínua para decisões de negócio e crescimento, planejamento de roadmap e definição de métricas de sucesso.",
  },
  {
    icon: Users,
    title: "Comunidade de Founders",
    description: "Acesso a uma rede de empreendedores para troca de experiências, networking e aprendizado contínuo.",
  },
];

const faqItems = [
  {
    question: "Por que há um investimento financeiro se a Limvex é sócia?",
    answer:
      "O investimento cobre custos iniciais de desenvolvimento, garantindo comprometimento mútuo. Além disso, demonstra o compromisso do fundador com o projeto e permite que a Limvex invista tempo e recursos técnicos de forma equilibrada.",
  },
  {
    question: "O que está incluído no MVP entregue?",
    answer:
      "Um produto funcional com as principais funcionalidades para validação no mercado. Inclui desenvolvimento completo (frontend e backend), design de interface, deploy em produção, documentação técnica e treinamento básico para uso do sistema.",
  },
  {
    question: "Como funciona a participação societária?",
    answer:
      "A Limvex detém 17,5% de equity, alinhando-se ao sucesso do negócio. Isso significa que temos interesse genuíno no crescimento da startup e trabalhamos como verdadeiros sócios, não apenas prestadores de serviço.",
  },
  {
    question: "Qual o prazo de desenvolvimento do MVP?",
    answer:
      "Entre 4 a 8 semanas, dependendo da complexidade do projeto. Projetos mais simples podem ser entregues em 4 semanas, enquanto soluções mais complexas podem levar até 8 semanas. Sempre definimos o prazo antes do início do desenvolvimento.",
  },
  {
    question: "Qual o perfil ideal de cliente para este modelo?",
    answer:
      "Empreendedores com ideias inovadoras e potencial de mercado, que buscam um sócio técnico estratégico. Ideal para quem tem clareza sobre o problema a resolver, mas precisa de expertise técnica para construir a solução.",
  },
  {
    question: "O que acontece após a entrega do MVP?",
    answer:
      "Oferecemos suporte contínuo para evolução do produto e estratégias de crescimento. Como sócios, acompanhamos o desenvolvimento do negócio, ajudamos com melhorias, novas funcionalidades e tomadas de decisão estratégicas.",
  },
];

// Dados para o gráfico de donut
const equityData = [
  { name: "Fundadores", value: 82.5, color: "#3b82f6" },
  { name: "Limvex", value: 17.5, color: "#8b5cf6" },
];

export default function ParaNovosNegocios() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <HeaderDark />

      <main className="text-white">
        {/* Hero com Layout 2 Colunas - Fintech Style */}
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0A0A0F]" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px]" />
          </div>

          <div className="container-custom max-w-[1200px] relative z-10 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Coluna Esquerda */}
              <div>
                {/* Badge superior */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold backdrop-blur-sm">
                    <Code className="w-4 h-4" />
                    <span>Desenvolvimento</span>
                    <span className="text-white/30">·</span>
                    <Rocket className="w-4 h-4" />
                    <span>Novos Negócios</span>
                    <span className="text-white/30">·</span>
                    <Users className="w-4 h-4" />
                    <span>Co-founder</span>
                  </div>
                </div>

                {/* Título com gradientes */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] text-white">
                  Transformamos sua ideia em uma{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">startup</span> de{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">verdade</span>
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-white/70 mb-8 font-medium leading-relaxed">
                  Entramos como sócios, construímos seu MVP e aceleramos sua validação no mercado.
                  Parceria estratégica com foco em resultados.
                </p>

                {/* CTA Principal */}
                <div className="mb-6">
                  <Button
                    size="lg"
                    onClick={scrollToForm}
                    className="rounded-full px-10 py-7 text-base md:text-lg font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/30 transition-all"
                  >
                    Quero validar minha ideia →
                  </Button>
                </div>

                {/* Linha de apoio */}
                <p className="text-sm text-white/60">
                  Entraremos em contato para entender sua ideia e iniciar a parceria.
                </p>
              </div>

              {/* Coluna Direita - Card do Modelo */}
              <div className="lg:pl-8">
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 shadow-2xl hover:bg-white/[0.05] hover:border-purple-500/30 transition-all">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                      Modelo Limvex para novos negócios
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Investimento</p>
                          <p className="text-white/70 text-sm">R$ 3.000 + 10x de R$ 500</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <Handshake className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Equity</p>
                          <p className="text-white/70 text-sm">17,5% para a Limvex</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <Rocket className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Entrega</p>
                          <p className="text-white/70 text-sm">MVP funcional em 4–8 semanas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Condições do Modelo - 3 Cards Horizontais */}
        <section className="py-16 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                { label: "Investimento inicial", value: "R$ 3.000", subtitle: "+ 10x de R$ 500 — entrada + parcelas mensais" },
                { label: "Participação societária", value: "17,5%", subtitle: "de equity para a Limvex" },
                { label: "O que entregamos", value: "MVP funcional", subtitle: "+ parceria estratégica de produto" },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center hover:bg-white/[0.05] hover:border-purple-500/30 transition-all"
                >
                  <p className="text-sm text-white/60 font-medium mb-2">{card.label}</p>
                  <p className="text-3xl md:text-4xl font-black text-white mb-2">{card.value}</p>
                  <p className="text-sm text-white/50">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que esse modelo funciona - 3 Pilares */}
        <section className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Por que esse modelo{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  funciona
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Um modelo pensado para reduzir risco e acelerar validação no mercado
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
              {whyModelWorks.map((pillar, index) => {
                const Icon = pillar.icon;
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
                      {pillar.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Como funciona a parceria - Gráfico + Texto */}
        <section className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Coluna Esquerda - Gráfico */}
              <div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 shadow-lg">
                  <div className="relative w-full" style={{ height: "300px" }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={equityData}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                          startAngle={90}
                          endAngle={-270}
                        >
                          {equityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    {/* Texto centralizado sobre o gráfico */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-2xl font-black text-white">Controle</span>
                      <span className="text-3xl font-black text-purple-400">82,5%</span>
                      <span className="text-sm font-semibold text-white/60">Fundadores</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium text-white/70">Fundadores (82,5%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500" />
                      <span className="text-sm font-medium text-white/70">Limvex (17,5%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Direita - Texto */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
                  Sócio minoritário, foco total no{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    resultado
                  </span>
                </h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  A Limvex entra como sócia minoritária, investindo no desenvolvimento do seu MVP e alinhando-se ao sucesso do seu negócio. Nossa participação de 17,5% garante que trabalhamos como verdadeiros parceiros, com interesse genuíno no crescimento da startup.
                </p>

              {/* Card de Investimento */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 mb-8">
                <div className="text-sm font-semibold text-white/60 mb-2">
                  Investimento total
                </div>
                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">
                  R$ 3.000 + 10x de R$ 500
                </div>
                <div className="text-sm text-white/60">
                  Investimento inicial e parcelas mensais para desenvolvimento do MVP
                </div>
              </div>

              {/* Lista de Benefícios */}
              <div className="space-y-4">
                {[
                  "MVP de alta qualidade, pronto para o mercado",
                  "Interesses alinhados: crescemos juntos com seu sucesso",
                  "Parceria estratégica contínua para evolução do produto",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Do zero ao lançamento - Jornada */}
        <section className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Do zero ao{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  lançamento
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Uma jornada estruturada para transformar sua ideia em produto real
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="group relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-purple-500/30"
                  >
                    {/* Número do step */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-purple-600/25 border-4 border-[#0A0A0F]">
                      {step.step}
                    </div>

                    {/* Ícone */}
                    <div className="mb-6 mt-4">
                      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                        <Icon className="w-7 h-7 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                    {/* Descrição */}
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Muito além do código */}
        <section className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Muito além do{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  código
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Não é só desenvolvimento. Oferecemos apoio estratégico completo para o sucesso do seu
                negócio.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
              {beyondCode.map((item, index) => {
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

        {/* Dúvidas Frequentes - FAQ */}
        <section className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-white">
                Dúvidas{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  frequentes
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-medium">
                Respostas para as principais perguntas sobre nosso modelo
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                    <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline text-white">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Formulário de Candidatura */}
        <div ref={formRef} className="py-16 md:py-24">
          <StartupApplicationForm />
        </div>

        {/* CTA Final */}
        <section className="py-24 md:py-32 bg-[#0A0A0F]">
          <div className="container-custom max-w-[1200px]">
            <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/20 via-purple-500/20 to-purple-600/20 backdrop-blur-sm p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
                Pronto para tirar sua ideia do{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  papel?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 mb-8 font-medium">
                Entre em contato e vamos construir juntos o futuro do seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="rounded-full px-8 py-6 font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25"
                >
                  Quero validar minha ideia
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToForm}
                  className="rounded-full px-8 py-6 font-bold border-white/20 text-white hover:bg-white/10 hover:border-purple-500/30"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com um especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
