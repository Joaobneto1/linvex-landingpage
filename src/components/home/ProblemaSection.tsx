import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { scrollToLeadForm } from "@/lib/utils";
import lvxLicitaImage from "@/assets/lvxlicita.png";
import lvxCommerceImage from "@/assets/lvxcommerce.png";
import lvxDevSoftImage from "@/assets/lvxDevSoft.png";

const produtos = [
  {
    imagem: lvxCommerceImage,
    titulo: "Limvex Commerce",
    subtitulo: "E-commerce enterprise com IA integrada",
    descricao: "Plataforma completa de vendas online com automação de marketing, gestão de estoque inteligente e checkout otimizado.",
    link: "/solucoes/limvex-commerce",
  },
  {
    imagem: lvxLicitaImage,
    titulo: "Limvex Bidding",
    subtitulo: "Automação de licitações públicas em escala",
    descricao: "Monitore editais, gere propostas automaticamente e acompanhe processos licitatórios com inteligência artificial.",
    link: "/solucoes/limvex-licitacao",
  },
  {
    imagem: lvxDevSoftImage,
    titulo: "Desenvolvimento Sob Medida",
    subtitulo: "Soluções customizadas high-ticket",
    descricao: "Arquitetura enterprise para desafios únicos que exigem tecnologia proprietária. Soluções que realmente movem o ponteiro do seu negócio.",
    link: "/solucoes/limvex-custom",
    textoLink: "Solicitar orçamento",
  },
];

export function ProblemaSection() {
  const handleCustomLink = (link: string | null) => {
    if (link) {
      window.location.href = link;
    } else {
      scrollToLeadForm();
    }
  };

  return (
    <section id="plataformas" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background complexo premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0a0a1f] to-[#030014]" />
      <div className="absolute inset-0 tech-mesh-pattern opacity-30" />
      
      {/* Glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0076CE]/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#0099FF]/6 rounded-full blur-[200px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/30 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              Soluções
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-0">
              Conheça nossas <span className="text-[#0099FF]">soluções</span>
            </h2>
          </div>
        </Reveal>

        {/* Grid de produtos - Estilo Freedom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {produtos.map((produto, index) => (
            <Reveal key={index} direction="up" delay={index * 100}>
              <div 
                className="
                  relative overflow-hidden
                  backdrop-blur-xl bg-white/[0.03]
                  border border-white/10
                  rounded-2xl
                  transition-all duration-300
                  hover:border-[#0076CE]/50 hover:bg-white/[0.05]
                  group
                  cursor-pointer
                  h-full
                "
                onClick={() => handleCustomLink(produto.link)}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0076CE]/10 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Imagem no topo */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={produto.imagem} 
                      alt={produto.titulo}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      style={{
                        mixBlendMode: 'lighten',
                        filter: 'brightness(1.1) contrast(1.1)',
                      }}
                    />
                    {/* Gradient overlay para integração */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-normal text-white mb-2">
                      {produto.titulo}
                    </h3>
                    <p className="text-[#0099FF] font-medium mb-4 text-sm md:text-base">
                      {produto.subtitulo}
                    </p>
                    <p className="text-white/60 mb-6 md:mb-8 text-sm md:text-base leading-relaxed flex-1">
                      {produto.descricao}
                    </p>
                    
                    {/* Link com seta animada */}
                    <div className="inline-flex items-center gap-2 text-[#0099FF] font-medium group/link hover:gap-3 transition-all duration-300">
                      <span>
                        {produto.textoLink || (produto.link ? `Ver ${produto.titulo}` : 'Solicitar orçamento')}
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
