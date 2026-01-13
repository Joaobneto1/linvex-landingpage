import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarWpp from "@/assets/avatarWpp.png";
import avatarReddit from "@/assets/avatarReddit.svg";

const testimonials = [
  {
    quote:
      "Saímos de 10 para 200+ consultas por dia em 6 meses. O time foi decisivo no crescimento.",
    author: "Carlos Mendes",
    company: "CEO, HealthTech Brasil",
    avatar: "CM",
    avatarUrl: avatarWpp,
  },
  {
    quote:
      "Reduzimos o tempo de desenvolvimento em 40% com a arquitetura proposta pela Limvex.",
    author: "Ana Paula Silva",
    company: "CTO, Fintech Solutions",
    avatar: "AS",
    avatarUrl: avatarReddit,
  },
  {
    quote:
      "Entregaram um produto complexo em 4 meses, com qualidade acima da expectativa.",
    author: "Roberto Alves",
    company: "Diretor de Produto, E-commerce Plus",
    avatar: "RA",
    avatarUrl: avatarWpp,
  },
  {
    quote:
      "A integração com nossos sistemas legados foi feita sem nenhum downtime. Profissionalismo total.",
    author: "Mariana Costa",
    company: "Head de TI, Grupo Hospitalar",
    avatar: "MC",
    avatarUrl: avatarReddit,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="glass-card rounded-3xl p-8 lg:p-12 border border-border">
          {/* Quote icon */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-6">
            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl font-display text-foreground leading-relaxed max-w-2xl">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-glow-sm">
              {testimonials[currentIndex].avatarUrl ? (
                <img
                  src={testimonials[currentIndex].avatarUrl}
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
              )}
            </div>

            {/* Author */}
            <div>
              <div className="font-semibold text-lg text-foreground">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-sm text-muted-foreground">
                {testimonials[currentIndex].company}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            aria-label="Depoimento anterior"
            className="bg-card border-border hover:bg-primary/10 hover:border-primary/30"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border w-2"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            aria-label="Próximo depoimento"
            className="bg-card border-border hover:bg-primary/10 hover:border-primary/30"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
