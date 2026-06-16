import { Reveal } from "@/components/Reveal";
import { COMO_FUNCIONA } from "@/lib/content";

export function ComoFunciona() {
  return (
    <section className="border-b border-line bg-offwhite py-16 md:py-24">
      <div className="container-limvex">
        <Reveal>
          <p className="kicker">Como funciona</p>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {COMO_FUNCIONA.map((passo, i) => (
            <Reveal key={passo.titulo} delay={i * 0.06}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-orange">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">
                {passo.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-warm">
                {passo.descricao}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
