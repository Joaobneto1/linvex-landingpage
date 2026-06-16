import { cn } from "@/lib/utils";

interface LogoProps {
  /** "light" para fundos escuros (texto claro); "dark" para fundos claros */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Logo da Limvex — placeholder de texto até a logo final chegar.
 *
 * TODO(logo): quando o SVG oficial estiver pronto, troque o <span> abaixo por:
 *   <img src="/logo/limvex_lockup_dark.svg" ... />  (fundo claro)
 *   <img src="/logo/limvex_lockup_light.svg" ... />  (fundo escuro)
 * conforme `variant`. O resto do site usa <Logo /> e não precisa mudar.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <span
      className={cn(
        "select-none text-xl font-extrabold tracking-tight",
        variant === "light" ? "text-offwhite" : "text-ink",
        className
      )}
      aria-label="Limvex"
    >
      LIMVEX
    </span>
  );
}
