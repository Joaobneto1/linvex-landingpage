import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { SectionBlue } from "@/components/ui/SectionBlue";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HeroGradient } from "@/components/ui/HeroGradient";
import { InfoCardWhite } from "@/components/ui/InfoCardWhite";
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
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero com Layout 2 Colunas */}
        <HeroGradient>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Coluna Esquerda */}
              <div>
                {/* Badge superior */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-semibold text-white">
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
                  <span className="text-gradient-blue">startup</span> de{" "}
                  <span className="text-gradient-purple">verdade</span>
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-white/90 mb-8 font-medium leading-relaxed">
                  Entramos como sócios, construímos seu MVP e aceleramos sua validação no mercado.
                  Parceria estratégica com foco em resultados.
                </p>

                {/* CTA Principal */}
                <div className="mb-6">
                  <Button
                    size="lg"
                    onClick={scrollToForm}
                    className="rounded-full px-10 py-7 text-base md:text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    Quero validar minha ideia →
                  </Button>
                </div>

                {/* Linha de apoio */}
                <p className="text-sm text-white/70">
                  Entraremos em contato para entender sua ideia e iniciar a parceria.
                </p>
              </div>

              {/* Coluna Direita - Card do Modelo */}
              <div className="lg:pl-8">
                <div className="rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur-sm p-8 md:p-10 shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                      Modelo Limvex para novos negócios
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Investimento</p>
                          <p className="text-white/90 text-sm">R$ 3.000 + 10x de R$ 500</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <Handshake className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Equity</p>
                          <p className="text-white/90 text-sm">17,5% para a Limvex</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <Rocket className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Entrega</p>
                          <p className="text-white/90 text-sm">MVP funcional em 4–8 semanas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroGradient>

        {/* Condições do Modelo - 3 Cards Horizontais */}
        <Section spacing="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <InfoCardWhite
              label="Investimento inicial"
              value="R$ 3.000"
              subtitle="+ 10x de R$ 500 — entrada + parcelas mensais"
            />
            <InfoCardWhite
              label="Participação societária"
              value="17,5%"
              subtitle="de equity para a Limvex"
            />
            <InfoCardWhite
              label="O que entregamos"
              value="MVP funcional"
              subtitle="+ parceria estratégica de produto"
            />
          </div>
        </Section>

        {/* Por que esse modelo funciona - 3 Pilares */}
        <Section spacing="xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-foreground">
              Por que esse modelo <span className="text-gradient-blue">funciona</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Um modelo pensado para reduzir risco e acelerar validação no mercado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
            {whyModelWorks.map((pillar, index) => (
              <FeatureCard
                key={index}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </Section>

        {/* Como funciona a parceria - Gráfico + Texto */}
        <SectionBlue spacing="xl" variant="light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Coluna Esquerda - Gráfico */}
            <div>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
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
                    <span className="text-2xl font-black text-foreground">Controle</span>
                    <span className="text-3xl font-black text-primary">82,5%</span>
                    <span className="text-sm font-semibold text-muted-foreground">Fundadores</span>
                  </div>
                </div>
                <div className="flex justify-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium text-foreground">Fundadores (82,5%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-500" />
                    <span className="text-sm font-medium text-foreground">Limvex (17,5%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Texto */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground">
                Sócio minoritário, foco total no resultado
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A Limvex entra como sócia minoritária, investindo no desenvolvimento do seu MVP e
                alinhando-se ao sucesso do seu negócio. Nossa participação de 17,5% garante que
                trabalhamos como verdadeiros parceiros, com interesse genuíno no crescimento da
                startup.
              </p>

              {/* Card de Investimento */}
              <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 mb-8">
                <div className="text-sm font-semibold text-muted-foreground mb-2">
                  Investimento total
                </div>
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                  R$ 3.000 + 10x de R$ 500
                </div>
                <div className="text-sm text-muted-foreground">
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
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionBlue>

        {/* Do zero ao lançamento - Jornada */}
        <Section spacing="xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-foreground">
              Do zero ao lançamento
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Uma jornada estruturada para transformar sua ideia em produto real
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Número do step */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Ícone */}
                  <div className="mb-6 mt-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>

                  {/* Descrição */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Muito além do código */}
        <SectionBlue spacing="xl" variant="light">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-foreground">
              Muito além do <span className="text-gradient-blue">código</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Não é só desenvolvimento. Oferecemos apoio estratégico completo para o sucesso do seu
              negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {beyondCode.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </SectionBlue>

        {/* Dúvidas Frequentes - FAQ */}
        <Section spacing="xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-foreground">
              Dúvidas frequentes
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Respostas para as principais perguntas sobre nosso modelo
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Formulário de Candidatura */}
        <div ref={formRef} className="py-16 md:py-24">
          <StartupApplicationForm />
        </div>

        {/* CTA Final */}
        <Section spacing="xl">
          <div className="max-w-4xl mx-auto text-center rounded-3xl border-2 border-primary/30 bg-gradient-card-blue p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-foreground">
              Pronto para tirar sua ideia do papel?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
              Entre em contato e vamos construir juntos o futuro do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="rounded-full px-8 py-6 font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Quero validar minha ideia
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToForm}
                className="rounded-full px-8 py-6 font-bold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com um especialista
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
