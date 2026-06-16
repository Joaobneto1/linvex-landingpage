import { Logo } from "@/components/Logo";
import {
  EMPRESA,
  NAV_LINKS,
  SEGMENTOS,
  whatsappLink,
} from "@/lib/content";
import { scrollToId } from "@/lib/scroll";

const colHeading =
  "text-xs font-semibold uppercase tracking-[0.18em] text-offwhite/45";
const link =
  "text-sm leading-relaxed text-offwhite/65 transition-colors hover:text-offwhite";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-offwhite">
      <div className="container-limvex">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {/* Institucional */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-offwhite/55">
              Tecnologia sob medida para o setor financeiro.
            </p>
          </div>

          {/* Segmentos */}
          <div>
            <h3 className={colHeading}>Segmentos</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SEGMENTOS.map((seg) => (
                <li key={seg.titulo}>
                  <a
                    href="#segmentos"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId("segmentos");
                    }}
                    className={link}
                  >
                    {seg.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação / contato */}
          <div>
            <h3 className={colHeading}>Navegação</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(nav.id);
                    }}
                    className={link}
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link}
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / empresa */}
          <div>
            <h3 className={colHeading}>Empresa</h3>
            <div className="mt-4 text-sm leading-relaxed text-offwhite/55">
              <p className="text-offwhite/80">{EMPRESA.razaoSocial}</p>
              <p className="mt-2">CNPJ {EMPRESA.cnpj}</p>
              <p>{EMPRESA.cidade}</p>
              <p className="mt-2 text-offwhite/80">{EMPRESA.site}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-offwhite/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Limvex. Todos os direitos reservados.
          </span>
          <span>Tecnologia sob medida para o setor financeiro.</span>
        </div>
      </div>
    </footer>
  );
}
