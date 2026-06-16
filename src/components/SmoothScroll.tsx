import { useEffect } from "react";
import Lenis from "lenis";

import { setLenis } from "@/lib/scroll";

/**
 * Smooth scroll global via Lenis, integrado com a navegação por âncora
 * (ver lib/scroll.ts). Desliga para quem pediu menos movimento — aí a
 * navegação usa o scroll nativo, e os âncoras continuam funcionando.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    let lenis: Lenis | null = null;
    let frame = 0;

    try {
      // lerp mais alto = resposta mais direta, menos sensação de "arrasto".
      // Sem smoothing no toque (mobile usa o scroll nativo, mais fluido).
      lenis = new Lenis({
        lerp: 0.12,
        smoothWheel: true,
        syncTouch: false,
      });
      setLenis(lenis);

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    } catch {
      // Se o Lenis falhar por qualquer motivo, os âncoras nativos assumem.
      setLenis(null);
    }

    return () => {
      cancelAnimationFrame(frame);
      setLenis(null);
      lenis?.destroy();
    };
  }, []);

  return null;
}
