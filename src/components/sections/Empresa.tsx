import { Reveal } from "@/components/Reveal";

export function Empresa() {
  return (
    <section className="border-b border-line bg-offwhite py-16 md:py-24">
      <div className="container-limvex">
        <div className="max-w-3xl">
          <Reveal>
            <p className="kicker">A empresa</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-pretty text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-[1.6rem] md:leading-[1.35]">
              A Limvex é uma software house especializada no setor financeiro.
              Uma empresa de engenharia de software que presta serviço sob
              medida para quem opera dinheiro.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
