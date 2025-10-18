import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseHealthcare from "@/assets/case-healthcare.jpg";
import caseFintech from "@/assets/case-fintech.jpg";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "Plataforma E-commerce",
    image: caseEcommerce,
    metrics: [
      "Crescimento de 200 para 10.000 usuários/mês",
      "Checkout simplificado em menos de 2 minutos",
      "Taxa de conversão aumentou 45%",
    ],
  },
  {
    title: "Sistema de Gestão de Saúde",
    image: caseHealthcare,
    metrics: [
      "Redução de 60% no tempo de agendamento",
      "Integração com 8 sistemas legados",
      "NPS de 78 entre profissionais de saúde",
    ],
  },
  {
    title: "App Fintech Mobile",
    image: caseFintech,
    metrics: [
      "Mais de 50.000 downloads em 6 meses",
      "Transações processadas com 99.9% de uptime",
      "Onboarding completo em menos de 3 minutos",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-smooth"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{caseItem.title}</h3>
                <ul className="space-y-2">
                  {caseItem.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2">✓</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth"
          >
            Ver portfólio completo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
