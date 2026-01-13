import { useState } from "react";
import { ShoppingCart, Cloud, MessageSquare, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import React from "react";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Criamos plataformas de e-commerce completas e personalizadas para impulsionar suas vendas online com experiência de compra excepcional.",
    deliverables: [
      "Lojas virtuais responsivas e otimizadas",
      "Integração com gateways de pagamento",
      "Gestão de produtos, estoque e pedidos",
      "Sistema de cupons, promoções e remarketing",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS",
    description:
      "Desenvolvemos aplicações SaaS escaláveis e multi-tenant, com infraestrutura robusta e modelo de assinatura integrado.",
    deliverables: [
      "Arquitetura multi-tenant e isolamento de dados",
      "Sistema de assinaturas e billing automatizado",
      "Dashboard analytics e métricas de uso",
      "APIs e integrações com serviços terceiros",
    ],
  },
  {
    icon: MessageSquare,
    title: "Chatbot",
    description:
      "Implementamos chatbots inteligentes com IA para automatizar atendimento, qualificar leads e melhorar a experiência do cliente 24/7.",
    deliverables: [
      "Chatbots com NLP e integração LLM",
      "Automação de atendimento e FAQ inteligente",
      "Integração com WhatsApp, Telegram e redes sociais",
      "Analytics de conversas e otimização contínua",
    ],
  },
  {
    icon: Users,
    title: "CRM",
    description:
      "Desenvolvemos sistemas CRM customizados para centralizar relacionamento com clientes, automatizar vendas e maximizar conversões.",
    deliverables: [
      "Gestão de leads, pipeline e oportunidades",
      "Automação de follow-up e nutrição de leads",
      "Relatórios e dashboards de vendas",
      "Integração com e-mail, telefonia e marketing",
    ],
  },
];

export const Services = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
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
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="group glass-card glass-card-hover rounded-2xl p-8 h-full transition-all duration-300 hover:scale-[1.02] border-glow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-primary/10 text-primary text-xs mr-2.5 flex-shrink-0 mt-0.5">
                        →
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-card border-border hover:bg-primary/10 hover:border-primary/30 text-foreground" />
        <CarouselNext className="hidden md:flex bg-card border-border hover:bg-primary/10 hover:border-primary/30 text-foreground" />
      </Carousel>

      {/* Navigation Mobile */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          aria-label="Serviço anterior"
          className="bg-card border-border hover:bg-primary/10 hover:border-primary/30"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-primary w-8" : "bg-border w-2"
              }`}
              aria-label={`Ir para serviço ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          aria-label="Próximo serviço"
          className="bg-card border-border hover:bg-primary/10 hover:border-primary/30"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
