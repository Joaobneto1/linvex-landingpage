import { Target, MessageSquare, TrendingUp, Layers, Handshake, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { BauhausCard } from "@/components/ui/bauhaus-card";

const diferenciais = [
  {
    icon: Target,
    title: "Escopo claro",
    description: "Definimos exatamente o que será entregue, sem surpresas no meio do caminho",
    number: "01",
  },
  {
    icon: MessageSquare,
    title: "Comunicação direta",
    description: "Sem intermediários, você fala direto com quem desenvolve seu projeto",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Foco em resultado",
    description: "Não entregamos código, entregamos soluções que geram valor real",
    number: "03",
  },
  {
    icon: Layers,
    title: "Projetos escaláveis",
    description: "Arquitetura pensada para crescer sem precisar refazer do zero",
    number: "04",
  },
  {
    icon: Handshake,
    title: "Parceria de longo prazo",
    description: "Não somos fornecedor, somos parceiro no seu crescimento",
    number: "05",
  },
  {
    icon: Shield,
    title: "Segurança e qualidade",
    description: "Código limpo, testes automatizados e boas práticas de segurança",
    number: "06",
  },
];

export function DiferenciaisSection() {
  const handleMoreOptions = (id: string) => {
    // Ação para o menu de opções (pode ser implementado depois)
    console.log("More options for:", id);
  };

  return (
    <section id="diferenciais" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Asymmetric Grid Pattern */}
      <div className="absolute inset-0 asymmetric-grid opacity-[0.08]" />

      {/* Background Elements - Apenas azul (mais escuro) */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#0076CE] rounded-full blur-[180px] opacity-10" />
      <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-[#0099FF] rounded-full blur-[180px] opacity-6" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00B8FF] rounded-full blur-[220px] opacity-[0.05]" />

      <div className="container mx-auto max-w-5xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header - Layout centralizado */}
        <Reveal direction="up" delay={0}>
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-white/90">Diferenciais exclusivos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight max-w-3xl mx-auto">
              Por que escolher a LIMVEX?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Nossa abordagem única garante resultados previsíveis e crescimento sustentável
            </p>
          </div>
        </Reveal>

        {/* Differentials Grid - Bauhaus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
          {diferenciais.map((diferencial, index) => (
            <Reveal key={index} direction="up" delay={index * 100} className="w-full">
              <div className="w-full max-w-full">
                <BauhausCard
                  id={`diferencial-${index}`}
                  topInscription={diferencial.number}
                  mainText={diferencial.title}
                  subMainText={diferencial.description}
                  accentColor="#0076CE"
                  backgroundColor="rgba(3,0,20,0.85)"
                  separatorColor="rgba(0,118,206,0.2)"
                  textColorTop="rgba(255,255,255,0.5)"
                  textColorMain="#ffffff"
                  textColorSub="rgba(255,255,255,0.7)"
                  borderRadius="1.25rem"
                  borderWidth="2px"
                  showProgress={false}
                  showButtons={false}
                  onMoreOptionsClick={handleMoreOptions}
                  chronicleButtonBg="#0076CE"
                  chronicleButtonFg="#fff"
                  chronicleButtonHoverFg="#fff"
                />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
