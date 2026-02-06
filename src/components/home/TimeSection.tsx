import { Reveal } from "@/components/ui/reveal";
import parceirosImage from "@/assets/Parceiros-secao.jpg";

const stackItems = [
  {
    title: "Nuvem e Infraestrutura",
    description: "AWS, Azure, GCP • Kubernetes, Docker • Terraform, Ansible",
  },
  {
    title: "Backend e Banco de Dados",
    description: "Node.js, Python, Go • PostgreSQL, MongoDB, Redis",
  },
  {
    title: "DevOps e Monitoramento",
    description: "CI/CD, GitHub Actions • Datadog, Grafana, Prometheus",
  },
];

export function TimeSection() {
  return (
    <section id="time" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 tech-mesh-pattern opacity-100" />

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0076CE]/10 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image Side */}
          <Reveal direction="right" delay={0} className="relative group order-2 lg:order-1 lg:col-span-3">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0076CE]/20 to-[#0099FF]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
              <img
                src={parceirosImage}
                alt="Engenharia de plataforma Limvex"
                loading="lazy"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-contain sm:object-cover"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
            </div>
          </Reveal>

          {/* Content Side */}
          <Reveal direction="left" delay={100} className="order-1 lg:order-2 lg:col-span-2 text-center lg:text-left">
            {/* Badge sem ícone */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0076CE]/15 border border-[#0076CE]/25 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-white/70">Stack e Infraestrutura</span>
            </div>

            {/* Título */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4 md:mb-6 text-white tracking-tight leading-tight px-1 sm:px-2">
              Engenharia de plataforma
            </h2>

            {/* Descrição técnica */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/65 mb-5 sm:mb-6 md:mb-8 leading-relaxed px-1 sm:px-2">
              Stack moderna com práticas de engenharia de software corporativo. Arquitetura nativa em nuvem, integração e entrega contínuas, testes rigorosos e monitoramento completo garantem confiabilidade e desempenho em todas as camadas.
            </p>

            {/* Cards de Stack - sem ícones */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 px-1 sm:px-0">
              {stackItems.map((item, index) => (
                <Reveal key={index} direction="up" delay={200 + index * 50}>
                  <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0076CE]/30 hover:bg-white/[0.05] transition-all duration-300">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-white mb-1 sm:mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/50">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
