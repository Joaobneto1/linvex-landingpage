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
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-[#0a1628] tracking-tight">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl bg-white px-6 hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              <AccordionTrigger className="text-left text-[#0a1628] hover:text-[#0076CE] py-6 font-semibold text-lg">
                {faq.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
