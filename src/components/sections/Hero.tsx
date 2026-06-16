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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const words = HEADLINE.split(" ");

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ink text-offwhite"
    >
      {/* Elemento-assinatura: ciclo do dinheiro */}
      <MoneyCycle className="pointer-events-none absolute right-[-6%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 md:block lg:right-[2%]" />

      <div className="container-limvex relative flex min-h-[100svh] flex-col justify-center pb-20 pt-32">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? false : "show"}
          className="max-w-3xl"
        >
          <h1 className="text-balance text-[2.3rem] font-extrabold leading-[1.06] tracking-tightest sm:text-5xl lg:text-6xl">
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
            className="mt-6 max-w-xl text-base leading-relaxed text-offwhite/70 sm:text-lg"
          >
            Sistemas que eliminam os gargalos técnicos de quem opera dinheiro —
            construídos sob medida, da originação ao recebimento.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : fadeUp}
            initial={reduce ? false : "hidden"}
            animate={reduce ? false : "show"}
            transition={reduce ? undefined : { delay: 0.68 }}
            className="mt-10"
          >
            <Button size="lg" onClick={() => scrollToId("contato")}>
              Solicitar análise
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
