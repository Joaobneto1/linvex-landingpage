import { Reveal } from "@/components/Reveal";
import { ETAPAS_ANALISE } from "@/lib/content";

export function Metodo() {
  return (
    <section
      id="metodo"
      className="scroll-mt-16 border-b border-line bg-offwhite py-16 md:py-24"
    >
      <div className="container-limvex">
        {/* Cabeçalho em duas colunas */}
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end md:gap-12">
          <div>
            <Reveal>
              <p className="kicker">Método</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Análise Técnica de Operação
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-gray-warm">
              O estudo técnico que antecede todo projeto. Examina processos,
              sistemas, rotinas e pontos de perda para identificar os gargalos
              da operação.
            </p>
          </Reveal>
        </div>

        {/* Timeline horizontal 01 → 02 → 03 → 04 */}
        <div className="relative mt-14">
          {/* linha contínua (desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-6 hidden h-px w-full bg-line md:block"
          />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {ETAPAS_ANALISE.map((etapa, i) => (
              <Reveal as="li" key={etapa.numero} delay={i * 0.06} className="relative">
                <div className="flex h-12 w-12 items-center justify-center border border-line bg-offwhite">
                  <span className="font-mono text-sm font-semibold text-orange">
                    {etapa.numero}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight text-ink">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-warm">
                  {etapa.descricao}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
