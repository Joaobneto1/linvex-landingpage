import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/lib/content";
import { scrollToId } from "@/lib/scroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(["hero", ...SECTION_IDS]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body enquanto o menu mobile estiver aberto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  // No topo, o header é transparente sobre o hero preto → tratamento claro.
  // Ao rolar, ganha fundo off-white sólido → tratamento escuro.
  const light = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-line bg-offwhite"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-limvex flex h-16 items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNav("hero");
            }}
            className="flex items-center"
            aria-label="Limvex — início"
          >
            <Logo variant={light ? "light" : "dark"} />
          </a>

          {/* Navegação desktop */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.id);
                }}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  light
                    ? active === link.id
                      ? "text-offwhite"
                      : "text-offwhite/65 hover:text-offwhite"
                    : active === link.id
                      ? "text-ink"
                      : "text-gray-warm hover:text-ink"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-orange transition-all duration-300",
                    active === link.id ? "w-full" : "w-0"
                  )}
                />
              </a>
            ))}
            <Button size="sm" onClick={() => handleNav("contato")}>
              Solicitar análise
            </Button>
          </nav>

          {/* Botão hambúrguer mobile */}
          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md md:hidden",
              light ? "text-offwhite" : "text-ink"
            )}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Overlay mobile — sólido #0A0A0A, cobre a tela inteira, acima de tudo.
          Montado só quando aberto: nada do conteúdo atrás pode vazar. */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-ink md:hidden">
          <div className="container-limvex flex h-16 shrink-0 items-center justify-between">
            <Logo variant="light" />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md text-offwhite"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav
            className="container-limvex mt-6 flex flex-col gap-1"
            aria-label="Menu mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.id);
                }}
                className="border-b border-white/10 py-4 text-2xl font-semibold tracking-tight text-offwhite"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-6" size="lg" onClick={() => handleNav("contato")}>
              Solicitar análise
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
