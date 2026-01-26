import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    pergunta: "Desenvolvem do zero?",
    resposta: "Sim, desenvolvemos soluções customizadas do zero, sempre pensando na melhor arquitetura para seu caso específico. Também trabalhamos com plataformas SaaS quando faz sentido para o projeto.",
  },
  {
    pergunta: "Como funciona o prazo?",
    resposta: "Definimos prazos claros desde o início, baseados no escopo validado. Fazemos entregas incrementais sempre que possível, para que você veja o progresso e possa ajustar durante o desenvolvimento.",
  },
  {
    pergunta: "Existe suporte após a entrega?",
    resposta: "Sim, oferecemos suporte contínuo após a entrega. Acreditamos em parceria de longo prazo, então estamos disponíveis para evoluções, manutenções e melhorias conforme seu negócio cresce.",
  },
  {
    pergunta: "Como é definido o investimento?",
    resposta: "O investimento é definido com base no escopo validado do projeto. Apresentamos uma proposta clara com valor, prazos e entregas, sem surpresas. Para projetos maiores, podemos trabalhar com fases e entregas incrementais.",
  },
  {
    pergunta: "Quais tecnologias vocês utilizam?",
    resposta: "Trabalhamos com as tecnologias mais modernas do mercado: React, Next.js, Node.js, TypeScript, PostgreSQL, AWS, entre outras. Escolhemos a stack ideal para cada projeto baseado nas necessidades específicas.",
  },
  {
    pergunta: "Vocês fazem apenas projetos grandes?",
    resposta: "Não! Atendemos projetos de diversos tamanhos. O importante é que haja um objetivo claro e um escopo bem definido. Desde MVPs até sistemas complexos, encontramos a melhor abordagem para cada caso.",
  },
];

export function FAQSection() {
  const scrollToForm = () => {
    const form = document.getElementById("formulario");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />
      
      {/* Background Elements - Apenas azul */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0076CE]/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Side - Content */}
          <Reveal direction="right" delay={0} className="flex gap-8 sm:gap-10 flex-col">
            <div className="flex gap-3 sm:gap-4 flex-col">
              <div>
                <Badge 
                  variant="outline" 
                  className="border-[#0076CE]/30 text-[#0076CE] bg-[#0076CE]/10 hover:bg-[#0076CE]/15 text-xs sm:text-sm"
                >
                  FAQ
                </Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-xl text-left font-extrabold text-white">
                  Perguntas frequentes
                </h4>
                <p className="text-sm sm:text-base md:text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-white/65 text-left">
                  Tire suas dúvidas sobre como trabalhamos e como podemos ajudar seu negócio a crescer com tecnologia de ponta.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 mt-3 sm:mt-4">
                <div className="flex items-center gap-2 text-white/70">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#0076CE] flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Resposta rápida e transparente</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#0076CE] flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Informações claras sobre nosso processo</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#0076CE] flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Suporte contínuo após a entrega</span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4">
                <Button 
                  onClick={scrollToForm}
                  className="gap-3 sm:gap-4 border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#0076CE]/50 text-white text-sm sm:text-base"
                  variant="outline"
                >
                  Alguma dúvida? Entre em contato
                  <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <Reveal direction="left" delay={100} className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/[0.08] rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] px-4 sm:px-6 hover:border-[#0076CE]/30 transition-all duration-300 data-[state=open]:border-[#0076CE]/30"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#0099FF] py-4 sm:py-6 font-semibold text-base sm:text-lg hover:no-underline">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/65 leading-relaxed pb-4 sm:pb-6 text-sm sm:text-base">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
