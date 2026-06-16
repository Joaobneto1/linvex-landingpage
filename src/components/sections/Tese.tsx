import { Reveal } from "@/components/Reveal";

export function Tese() {
  return (
    <section className="border-b border-line bg-offwhite py-16 md:py-24">
      <div className="container-limvex">
        <Reveal>
          <p className="kicker">O que fazemos</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-3xl text-pretty text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-[1.7rem] md:leading-[1.3]">
            Desenvolvemos sistemas sob medida que eliminam gargalos técnicos e
            operacionais de empresas do setor financeiro. Todo projeto nasce de
            um diagnóstico da operação do cliente:{" "}
            <span className="text-gray-warm">
              primeiro entender onde se perde tempo, dinheiro e eficiência —
              depois construir exatamente o que resolve.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
