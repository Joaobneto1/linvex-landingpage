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
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#000920]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-white tracking-tight">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/[0.08] rounded-xl bg-white/[0.03] px-6 hover:bg-white/[0.05] transition-colors duration-200"
            >
              <AccordionTrigger className="text-left text-white hover:text-[#0076CE] py-6 font-semibold text-lg">
                {faq.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed pb-6">
                {faq.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
