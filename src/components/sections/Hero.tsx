import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MoneyCycle } from "@/components/MoneyCycle";
import { scrollToId } from "@/lib/scroll";

const HEADLINE = "Tecnologia sob medida para o setor financeiro.";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.1 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const words = HEADLINE.split(" ");

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ink text-offwhite"
    >
      {/* Grid técnico sutil cobrindo o hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,242,238,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,242,238,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(120% 90% at 70% 40%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 70% 40%, #000 40%, transparent 100%)",
        }}
      />

      <div className="container-limvex relative grid min-h-[100svh] items-center gap-12 pb-16 pt-28 md:grid-cols-2 md:gap-10 md:pt-24">
        {/* Coluna esquerda — conteúdo */}
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? false : "show"}
          className="max-w-xl"
        >
          <h1 className="text-balance text-[2.3rem] font-extrabold leading-[1.06] tracking-tightest sm:text-5xl lg:text-[3.4rem]">
            {reduce
              ? HEADLINE
              : words.map((w, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom"
                  >
                    <motion.span variants={word} className="inline-block">
                      {w}
                      {i < words.length - 1 ? " " : ""}
                    </motion.span>
                  </span>
                ))}
          </h1>

          <motion.p
            variants={reduce ? undefined : fadeUp}
            initial={reduce ? false : "hidden"}
            animate={reduce ? false : "show"}
            transition={reduce ? undefined : { delay: 0.5 }}
            className="mt-6 max-w-md text-base leading-relaxed text-offwhite/70 sm:text-lg"
          >
            Sistemas que eliminam os gargalos técnicos de quem opera dinheiro —
            construídos sob medida, da originação ao recebimento.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : fadeUp}
            initial={reduce ? false : "hidden"}
            animate={reduce ? false : "show"}
            transition={reduce ? undefined : { delay: 0.68 }}
            className="mt-9"
          >
            <Button size="lg" onClick={() => scrollToId("contato")}>
              Solicitar análise
            </Button>
          </motion.div>
        </motion.div>

        {/* Coluna direita — painel geométrico (ciclo do dinheiro) */}
        <div className="relative hidden md:block">
          <div className="relative aspect-square w-full max-w-[460px] justify-self-end border border-white/10">
            {/* ticks nos cantos */}
            <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-orange/60" />
            <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-orange/60" />
            <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-orange/60" />
            <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-orange/60" />

            <MoneyCycle className="absolute inset-0 h-full w-full p-8" />

            <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-offwhite/35">
              ciclo
            </span>
            <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.25em] text-offwhite/35">
              originação · recebimento
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
