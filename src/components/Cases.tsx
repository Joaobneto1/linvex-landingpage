import caseLiveNature from "@/assets/liveNatureCase.png";
import caseAtendLeads from "@/assets/atendLeadsCase.png";
import caseErpLicitacoes from "@/assets/erplicitacoesCase.png";
import { ArrowRight } from "lucide-react";

const cases = [
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-smooth"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{caseItem.title}</h3>
                <ul className="space-y-2.5">
                  {caseItem.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary mr-2.5 flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
