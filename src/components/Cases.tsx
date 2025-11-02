import caseLiveNature from "@/assets/liveNatureCase.png";
import caseAtendLeads from "@/assets/atendLeadsCase.png";
import caseErpLicitacoes from "@/assets/erplicitacoesCase.png";
import caseCheckoutSentinel from "@/assets/checkoutSentinelCase.jpg";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cases = [
  {
    title: "Checkout Sentinel",
    image: caseCheckoutSentinel,
    metrics: [
      "Plataforma de redirecionamento inteligente de checkouts",
      "Monitoramento de campanhas ativas em tempo real",
      "Dashboard executivo com análise de conversões",
    ],
  },
  {
    title: "LiveNature",
    image: caseLiveNature,
    metrics: [
      "Monitoramento em tempo real de clima e desastres naturais",
      "Integração com mapas e alertas geográficos",
      "Interface intuitiva para análise de dados climáticos",
    ],
  },
  {
    title: "AtendLeads",
    image: caseAtendLeads,
    metrics: [
      "Dashboard completo para gestão de atendimento",
      "Controle de tempo médio e filas em tempo real",
      "Sistema de avaliação e análise de conversas",
    ],
  },
  {
    title: "ERP Licitações",
    image: caseErpLicitacoes,
    metrics: [
      "Gestão completa de licitações e contratos",
      "Alertas automáticos de prazos e eventos",
      "Dashboard executivo com indicadores financeiros",
    ],
  },
];

export const Cases = () => {
  return (
    <section id="portfolio" className="section-spacing bg-muted/30">
      <div className="container-custom">
      <div className="text-center mb-16">
          <h2 className="mb-4">Cases de sucesso</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projetos que entregaram resultado real para nossos clientes
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {cases.map((caseItem, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/2">
                <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-smooth h-[560px] flex flex-col">
                  <div className="flex items-center justify-center py-8 bg-muted flex-shrink-0">
                    <div className="w-[80%]">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-smooth duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="p-8 space-y-5 flex-1 flex flex-col">
                    <h3 className="text-[26px] font-semibold leading-tight">{caseItem.title}</h3>
                    <ul className="space-y-3.5 flex-1">
                      {caseItem.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start text-[18px] text-muted-foreground leading-relaxed">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0 mt-0.5 text-sm">
                            ✓
                          </span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
