import { Logo } from "@/components/Logo";
import { EMPRESA } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-offwhite">
      <div className="container-limvex">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-offwhite/55">
              Tecnologia sob medida para o setor financeiro.
            </p>
          </div>

          <div className="text-sm leading-relaxed text-offwhite/55 md:text-right">
            <p className="font-medium text-offwhite/80">{EMPRESA.razaoSocial}</p>
            <p className="mt-2">CNPJ {EMPRESA.cnpj}</p>
            <p>{EMPRESA.cidade}</p>
            <p className="mt-2 text-offwhite/80">{EMPRESA.site}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-offwhite/40">
          © {new Date().getFullYear()} Limvex. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
