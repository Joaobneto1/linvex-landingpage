import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import lvxLicitaImage from "@/assets/lvxlicita.png";
import lvxCommerceImage from "@/assets/lvxcommerce.png";

const produtos = [
  {
    imagem: lvxLicitaImage,
    titulo: "LVX Licita",
    subtitulo: "Automação de licitações públicas em escala",
    descricao: "Monitore editais, gere propostas automaticamente e acompanhe processos licitatórios com inteligência artificial. Reduza tempo de análise em 80% e aumente taxa de vitórias.",
    link: "#lvx-licita",
  },
  {
    imagem: lvxCommerceImage,
    titulo: "LVX Commerce",
    subtitulo: "E-commerce enterprise com IA integrada",
    descricao: "Plataforma completa de vendas online com automação de marketing, gestão de estoque inteligente e checkout otimizado. Aumente conversão em até 45% com personalização em tempo real.",
    link: "#lvx-commerce",
  },
  {
    imagem: lvxLicitaImage, // Pode trocar depois por terceira imagem
    titulo: "Desenvolvimento Sob Medida",
    subtitulo: "Soluções customizadas high-ticket",
    descricao: "Arquitetura enterprise para desafios únicos que exigem tecnologia proprietária. Investimento a partir de R$ 50k para soluções que realmente movem o ponteiro do seu negócio.",
    link: "#customizado",
  },
];

export function SolucaoSection() {
  return (
    <section id="solucoes" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
              <div className="
                relative overflow-hidden
                backdrop-blur-xl bg-white/[0.03]
                border border-white/10
                rounded-2xl
                transition-all duration-300
                hover:border-[#0076CE]/50 hover:bg-white/[0.05]
                group
                cursor-pointer
              ">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0076CE]/10 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
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
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-normal text-white mb-2">
                      {produto.titulo}
                    </h3>
                    <p className="text-[#0099FF] font-medium mb-4 text-sm md:text-base">
                      {produto.subtitulo}
                    </p>
                    <p className="text-white/60 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                      {produto.descricao}
                    </p>
                    
                    {/* Link com seta animada */}
                    <a 
                      href={produto.link}
                      className="inline-flex items-center gap-2 text-[#0099FF] font-medium group/link hover:gap-3 transition-all duration-300"
                    >
                      <span>Ver {produto.titulo}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
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
