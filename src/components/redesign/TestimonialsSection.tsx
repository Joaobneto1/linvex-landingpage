import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarWpp from "@/assets/avatarWpp.png";
import avatarReddit from "@/assets/avatarReddit.svg";

const testimonials = [
  {
    quote:
      "Saímos de 10 para 200+ consultas por dia em 6 meses. O time foi decisivo no crescimento.",
    author: "Carlos Mendes",
    company: "CEO, HealthTech Brasil",
    avatar: avatarWpp,
  },
  {
    quote:
      "Reduzimos o tempo de desenvolvimento em 40% com a arquitetura proposta pela Limvex.",
    author: "Ana Paula Silva",
    company: "CTO, Fintech Solutions",
    avatar: avatarReddit,
  },
  {
    quote:
      "Entregaram um produto complexo em 4 meses, com qualidade acima da expectativa.",
    author: "Roberto Alves",
    company: "Diretor de Produto, E-commerce Plus",
    avatar: avatarWpp,
  },
  {
    quote:
      "A integração com nossos sistemas legados foi feita sem nenhum downtime. Profissionalismo total.",
    author: "Mariana Costa",
    company: "Head de TI, Grupo Hospitalar",
    avatar: avatarReddit,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Show 2 testimonials at a time on desktop
  const getVisibleTestimonials = () => {
    const first = currentIndex;
    const second = (currentIndex + 1) % testimonials.length;
    return [testimonials[first], testimonials[second]];
  };

  return (
    <section className="py-24 md:py-32 bg-[#0d0d12]">
      <div className="container-custom max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4">
            O Que Nossos Clientes{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent italic">
              Dizem
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Histórias reais de crescimento e sucesso com nossas soluções
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={index} 
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent aspect-video flex items-center justify-center group"
              >
                {/* Background with avatar */}
                <div className="absolute inset-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Play button */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30">
                  <Play className="w-6 h-6 text-white fill-current ml-1" />
                </div>

                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <blockquote className="text-white/90 text-sm md:text-base mb-3 line-clamp-2">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-white/50 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-white/30">/</span>
              <span className="text-white/50">
                {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-purple-500/50 bg-purple-600 text-white hover:bg-purple-700"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
