import { Reveal } from "@/components/Reveal";
import { ETAPAS_ANALISE } from "@/lib/content";

export function Metodo() {
  return (
    <section
      id="metodo"
      className="scroll-mt-16 bg-ink py-16 text-offwhite md:py-24"
    >
      <div className="container-limvex">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          {/* Coluna esquerda — descrição */}
          <div className="md:sticky md:top-24 md:self-start">
            <Reveal>
              <p className="kicker">Método</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Análise Técnica de Operação
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md leading-relaxed text-offwhite/65">
                O estudo técnico que antecede todo projeto. Examina processos,
                sistemas, rotinas e pontos de perda para identificar os gargalos
                da operação.
              </p>
            </Reveal>
          </div>

          {/* Coluna direita — etapas numeradas em grid 2x2 */}
          <ol className="grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2">
            {ETAPAS_ANALISE.map((etapa, i) => (
              <Reveal
                as="li"
                key={etapa.numero}
                delay={(i % 2) * 0.06}
                className="flex h-full flex-col bg-ink p-6"
              >
                <span className="font-mono text-sm font-semibold text-orange">
                  {etapa.numero}
                </span>
                <h3 className="mt-3 text-base font-bold tracking-tight">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-offwhite/60">
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
