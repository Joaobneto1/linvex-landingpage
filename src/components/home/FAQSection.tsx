import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030014] via-[#050520] to-[#030014] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0076CE]/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-6">
            <HelpCircle className="w-4 h-4 text-[#06B6D4]" />
            <span className="text-sm font-medium text-[#06B6D4]">Tire suas dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-[#06B6D4] to-[#0076CE] bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/[0.08] rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] px-6 hover:border-[#0076CE]/30 transition-all duration-300 data-[state=open]:border-[#0076CE]/30"
            >
              <AccordionTrigger className="text-left text-white hover:text-[#06B6D4] py-6 font-semibold text-lg hover:no-underline">
                {faq.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 leading-relaxed pb-6">
                {faq.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
