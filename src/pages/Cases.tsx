import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import caseLiveNature from "@/assets/liveNatureCase.png";
import caseAtendLeads from "@/assets/atendLeadsCase.png";
import caseErpLicitacoes from "@/assets/erplicitacoesCase.png";
import caseCheckoutSentinel from "@/assets/checkoutSentinelCase.png";
import { Check } from "lucide-react";

const cases = [
  {
    title: "Checkout Sentinel",
    image: caseCheckoutSentinel,
    description: "Plataforma de redirecionamento inteligente de checkouts com monitoramento em tempo real",
    metrics: [
      "Monitoramento de campanhas ativas em tempo real",
      "Dashboard executivo com análise de conversões",
      "Redirecionamento inteligente baseado em performance",
    ],
  },
  {
    title: "LiveNature",
    image: caseLiveNature,
    description: "Monitoramento em tempo real de clima e desastres naturais com integração geográfica",
    metrics: [
      "Integração com mapas e alertas geográficos",
      "Interface intuitiva para análise de dados climáticos",
      "Sistema de alertas em tempo real",
    ],
  },
  {
    title: "AtendLeads",
    image: caseAtendLeads,
    description: "Dashboard completo para gestão de atendimento com controle de tempo e filas",
    metrics: [
      "Controle de tempo médio e filas em tempo real",
      "Sistema de avaliação e análise de conversas",
      "Métricas de performance e produtividade",
    ],
  },
  {
    title: "ERP Licitações",
    image: caseErpLicitacoes,
    description: "Gestão completa de licitações e contratos com alertas automáticos",
    metrics: [
      "Alertas automáticos de prazos e eventos",
      "Dashboard executivo com indicadores financeiros",
      "Gestão integrada de processos licitatórios",
    ],
  },
];

export default function Cases() {
  return (
    <div className="min-h-screen pt-20">
      <Section spacing="xl" className="text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Cases de Sucesso
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
            Projetos que entregaram resultado real para nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden",
                "transition-all duration-300",
                "hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
                "dark:bg-black/20 dark:border-white/5 dark:hover:border-white/10"
              )}
            >
              <div className="h-64 overflow-hidden bg-muted">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold">{caseItem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{caseItem.description}</p>
                <ul className="space-y-3 pt-4">
                  {caseItem.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

