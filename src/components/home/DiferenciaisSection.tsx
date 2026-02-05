import { Link } from "react-router-dom";
import { Zap, RefreshCw, Shield, Link2, BarChart3, HeadphonesIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BauhausCard } from "@/components/ui/bauhaus-card";

const diferenciais = [
  {
    icon: Zap,
    title: "Arquitetura cloud-agnostic",
    description: "Infraestrutura multi-cloud que elimina vendor lock-in e garante portabilidade total",
    number: "01",
  },
  {
    icon: RefreshCw,
    title: "Observabilidade completa",
    description: "Telemetria end-to-end com logs estruturados, métricas em tempo real e distributed tracing",
    number: "02",
  },
  {
    icon: Shield,
    title: "Segurança zero-trust",
    description: "Modelo de segurança zero-trust com autenticação contínua, criptografia e least-privilege access",
    number: "03",
  },
  {
    icon: Link2,
    title: "Arquitetura API-first",
    description: "Design API-first que garante integrabilidade, extensibilidade e interoperabilidade total",
    number: "04",
  },
  {
    icon: BarChart3,
    title: "Governança de dados",
    description: "Framework de governança com data lineage completo, auditoria e conformidade regulatória",
    number: "05",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte enterprise",
    description: "Suporte técnico de nível 4 com SLA contratual e engenheiros dedicados",
    number: "06",
  },
];

export function DiferenciaisSection() {
  const handleMoreOptions = (id: string) => {
    // Ação para o menu de opções (pode ser implementado depois)
    console.log("More options for:", id);
  };

  return (
    <section id="diferenciais" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Asymmetric Grid Pattern */}
      <div className="absolute inset-0 asymmetric-grid opacity-[0.08]" />

      {/* Background Elements - Apenas azul (mais escuro) */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#0076CE] rounded-full blur-[180px] opacity-10" />
      <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-[#0099FF] rounded-full blur-[180px] opacity-6" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00B8FF] rounded-full blur-[220px] opacity-[0.05]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header - Layout centralizado */}
        <Reveal direction="up" delay={0}>
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-white/70">Diferenciais técnicos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-white tracking-tight max-w-3xl mx-auto">
              Por que escolher a Limvex?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Tecnologia enterprise com foco em resultados operacionais
            </p>
          </div>
        </Reveal>

        {/* Differentials Grid - Bauhaus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12 md:mb-16">
          {diferenciais.map((diferencial, index) => (
            <Reveal key={index} direction="up" delay={index * 100} className="w-full">
              <div className="w-full max-w-full">
                <BauhausCard
                  id={`diferencial-${index}`}
                  topInscription={diferencial.number}
                  mainText={diferencial.title}
                  subMainText={diferencial.description}
                  accentColor="#0076CE"
                  backgroundColor="rgba(3,0,20,0.85)"
                  separatorColor="rgba(0,118,206,0.2)"
                  textColorTop="rgba(255,255,255,0.5)"
                  textColorMain="#ffffff"
                  textColorSub="rgba(255,255,255,0.7)"
                  borderRadius="1.25rem"
                  borderWidth="2px"
                  showProgress={false}
                  showButtons={false}
                  onMoreOptionsClick={handleMoreOptions}
                  chronicleButtonBg="#0076CE"
                  chronicleButtonFg="#fff"
                  chronicleButtonHoverFg="#fff"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal direction="up" delay={700}>
          <div className="text-center mt-8 sm:mt-12 md:mt-16 px-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#0076CE] to-[#0099FF] hover:from-[#0099FF] hover:to-[#00B8FF] text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto font-semibold rounded-xl shadow-[0_0_30px_rgba(0,118,206,0.4)] hover:shadow-[0_0_50px_rgba(0,118,206,0.6)] transition-all duration-300 w-full sm:w-auto"
            >
              <Link to="/contato">Solicitar avaliação técnica</Link>
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
