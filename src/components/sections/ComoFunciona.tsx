import { Reveal } from "@/components/Reveal";
import { COMO_FUNCIONA } from "@/lib/content";

export function ComoFunciona() {
  return (
    <section className="bg-ink py-16 text-offwhite md:py-24">
      <div className="container-limvex">
        <Reveal>
          <p className="kicker">Como funciona</p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
          {COMO_FUNCIONA.map((passo, i) => (
            <Reveal
              key={passo.titulo}
              delay={i * 0.06}
              className="flex h-full flex-col bg-ink p-7 md:p-9"
            >
              <span className="font-mono text-4xl font-bold leading-none text-orange">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-lg font-bold tracking-tight">
                {passo.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/60">
                {passo.descricao}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
