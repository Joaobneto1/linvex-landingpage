import type Lenis from "lenis";

// Singleton da instância do Lenis. Enquanto não existir (ou se o Lenis falhar),
// a navegação por âncora cai no scroll nativo — os links nunca quebram.
let lenisInstance: Lenis | null = null;

export const HEADER_OFFSET = 64;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -HEADER_OFFSET });
  } else {
    const top =
      el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
