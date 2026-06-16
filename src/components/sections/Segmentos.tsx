import { Reveal } from "@/components/Reveal";
import { SEGMENTOS } from "@/lib/content";

export function Segmentos() {
  return (
    <section
      id="segmentos"
      className="scroll-mt-16 border-b border-line bg-offwhite py-16 md:py-24"
    >
      <div className="container-limvex">
        <div className="max-w-2xl">
          <Reveal>
            <p className="kicker">Segmentos atendidos</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">
              A Limvex atende empresas que vivem do ciclo do crédito e do
              recebimento, e o mercado de capitais.
            </h2>
          </Reveal>
        </div>

        {/* Grid 2x2 — cards de altura igual, divisórias sutis (tabela de capacidades) */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
          {SEGMENTOS.map((seg, i) => (
            <Reveal
              key={seg.titulo}
              delay={(i % 2) * 0.06}
              className="flex h-full flex-col bg-offwhite p-6 transition-colors duration-200 hover:bg-white md:p-7"
            >
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-xs font-semibold text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold tracking-tight text-ink">
                  {seg.titulo}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-warm">
                {seg.descricao}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
