import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "O que é a Limvex Software Group?",
    answer:
      "Somos uma software house especializada em desenvolvimento sob medida, aceleração de startups e produtos white-label. Trabalhamos com equipes sênior focadas em entregar valor real para o seu negócio.",
  },
  {
    question: "Como as soluções da Limvex podem beneficiar meu negócio?",
    answer:
      "Nossas soluções ajudam a otimizar processos, melhorar vendas, aprimorar relacionamento com clientes e fornecer análises acionáveis, resultando em maior eficiência e lucratividade.",
  },
  {
    question: "Que tipo de suporte vocês oferecem?",
    answer:
      "Oferecemos suporte contínuo que inclui reuniões de acompanhamento, sprints ágeis semanais, documentação completa e treinamento da equipe. Estamos sempre disponíveis para ajudar.",
  },
  {
    question: "Posso customizar o projeto de acordo com minhas necessidades?",
    answer:
      "Absolutamente! Cada projeto é desenvolvido sob medida para atender às necessidades específicas do seu negócio. Trabalhamos em conjunto para definir escopo, prioridades e funcionalidades.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0F]">
      <div className="container-custom max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Perguntas{" "}
              <span className="italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                frequentes
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Tire suas dúvidas sobre como podemos ajudar seu negócio a crescer. 
              Sinta-se à vontade para entrar em contato para mais informações.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25"
              asChild
            >
              <a
                href="https://wa.me/5582991709740"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar conosco
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Right column - Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-purple-500/30 bg-purple-500/5"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-semibold pr-4">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === index
                      ? "bg-purple-600 text-white"
                      : "bg-white/10 text-white/50"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
