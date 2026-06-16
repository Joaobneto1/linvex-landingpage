import { Reveal } from "@/components/Reveal";

export function Tese() {
  return (
    <section className="border-b border-line bg-offwhite py-16 md:py-24">
      <div className="container-limvex">
        <Reveal>
          <div className="grid gap-8 border-l-2 border-orange pl-6 md:grid-cols-[200px_1fr] md:gap-12 md:pl-10">
            {/* Coluna marcador */}
            <div>
              <p className="kicker">O que fazemos</p>
              <div className="mt-4 hidden h-12 w-12 items-center justify-center border border-line md:flex">
                <span className="h-2 w-2 bg-orange" />
              </div>
            </div>

            {/* Texto-tese, largura controlada */}
            <p className="max-w-3xl text-pretty text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-[1.7rem] md:leading-[1.3]">
              Desenvolvemos sistemas sob medida que eliminam gargalos técnicos e
              operacionais de empresas do setor financeiro. Todo projeto nasce de
              um diagnóstico da operação do cliente:{" "}
              <span className="text-gray-warm">
                primeiro entender onde se perde tempo, dinheiro e eficiência —
                depois construir exatamente o que resolve.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
