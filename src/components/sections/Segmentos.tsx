import { Reveal } from "@/components/Reveal";
import { SEGMENTOS } from "@/lib/content";

export function Segmentos() {
  return (
    <section
      id="segmentos"
      className="scroll-mt-16 bg-graphite py-16 text-offwhite md:py-24"
    >
      <div className="container-limvex">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="kicker">Segmentos atendidos</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                A Limvex atende empresas que vivem do ciclo do crédito e do
                recebimento, e o mercado de capitais.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-offwhite/40 md:block">
              04 frentes
            </span>
          </Reveal>
        </div>

        {/* Matriz 2x2 de capacidades */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SEGMENTOS.map((seg, i) => (
            <Reveal
              key={seg.titulo}
              delay={(i % 2) * 0.06}
              className="flex h-full flex-col border border-white/10 bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/25 md:p-8"
            >
              <span className="font-mono text-3xl font-bold leading-none text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">
                {seg.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/60">
                {seg.descricao}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
