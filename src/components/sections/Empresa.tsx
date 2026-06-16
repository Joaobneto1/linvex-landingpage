import { Reveal } from "@/components/Reveal";

export function Empresa() {
  return (
    <section className="bg-offwhite py-16 md:py-24">
      <div className="container-limvex">
        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
            <div className="max-w-3xl">
              <p className="kicker">A empresa</p>
              <p className="mt-5 text-pretty text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-[1.6rem] md:leading-[1.35]">
                A Limvex é uma software house especializada no setor financeiro.
                Uma empresa de engenharia de software que presta serviço sob
                medida para quem opera dinheiro.
              </p>
            </div>

            {/* Marca geométrica sóbria */}
            <div
              aria-hidden="true"
              className="hidden h-36 w-36 shrink-0 items-center justify-center border border-line md:flex"
            >
              <div className="flex h-20 w-20 items-center justify-center border border-line">
                <span className="h-3 w-3 bg-orange" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
