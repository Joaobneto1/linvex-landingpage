/**
 * Elemento-assinatura do hero: o "ciclo do dinheiro".
 * Um traço geométrico fino percorre um circuito fechado em loop lento e
 * contínuo (saída → retorno). Discreto, baixa opacidade, sobre o preto.
 *
 * Performance: a animação é 100% CSS (@keyframes em stroke-dashoffset),
 * sem rAF/JS por frame. Respeita prefers-reduced-motion via @media —
 * quem pediu menos movimento vê só o trilho estático.
 */
export function MoneyCycle({ className }: { className?: string }) {
  const railPath =
    "M 70 40 H 330 A 30 30 0 0 1 360 70 V 230 A 30 30 0 0 1 330 260 H 70 A 30 30 0 0 1 40 230 V 70 A 30 30 0 0 1 70 40 Z";

  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <style>{`
        @keyframes money-cycle-dash {
          to { stroke-dashoffset: 0; }
        }
        .money-cycle-runner {
          stroke-dasharray: 0.14 0.86;
          stroke-dashoffset: 1;
          animation: money-cycle-dash 14s linear infinite;
          will-change: stroke-dashoffset;
        }
        @media (prefers-reduced-motion: reduce) {
          .money-cycle-runner { display: none; }
        }
      `}</style>

      {/* Trilho de fundo — sempre visível, bem sutil */}
      <path
        d={railPath}
        stroke="var(--offwhite)"
        strokeOpacity={0.1}
        strokeWidth={1}
      />

      {/* Nós nos cantos (pontos de processo) */}
      {[
        [70, 40],
        [330, 40],
        [360, 230],
        [40, 230],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={2}
          fill="var(--offwhite)"
          fillOpacity={0.18}
        />
      ))}

      {/* Eixo interno discreto — referência geométrica */}
      <line
        x1={40}
        y1={150}
        x2={360}
        y2={150}
        stroke="var(--offwhite)"
        strokeOpacity={0.05}
        strokeWidth={1}
        strokeDasharray="2 6"
      />

      {/* Recurso que sai e retorna — traço laranja em movimento (CSS) */}
      <path
        className="money-cycle-runner"
        d={railPath}
        stroke="var(--orange)"
        strokeOpacity={0.5}
        strokeWidth={1.5}
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}
