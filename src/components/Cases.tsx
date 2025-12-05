import { useState, useEffect } from "react";
import caseLiveNature from "@/assets/liveNatureCase.png";
import caseAtendLeads from "@/assets/atendLeadsCase.png";
import caseErpLicitacoes from "@/assets/erplicitacoesCase.png";
import caseCheckoutSentinel from "@/assets/checkoutSentinelCase.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {cases.map((caseItem, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="group bg-white rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-blue transition-all duration-300 h-full flex flex-col hover:scale-[1.02]">
                <div className="h-[240px] md:h-[280px] overflow-hidden bg-gradient-card-blue flex-shrink-0 relative">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 space-y-5 flex-1 bg-white">
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">{caseItem.title}</h3>
                  <ul className="space-y-3">
                    {caseItem.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start text-sm md:text-base text-muted-foreground">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary mr-3 flex-shrink-0 mt-0.5 font-bold">
                          ✓
                        </span>
                        <span className="leading-relaxed font-medium">{metric}</span>
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

      {/* Navigation Mobile */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          aria-label="Case anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === current ? "bg-primary w-8" : "bg-border"
              }`}
              aria-label={`Ir para case ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          aria-label="Próximo case"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
