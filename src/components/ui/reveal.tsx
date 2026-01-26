import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verificar se o usuário prefere movimento reduzido
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const animate = !prefersReducedMotion;
    setShouldAnimate(animate);

    // Se não deve animar, mostrar imediatamente
    if (!animate) {
      setIsVisible(true);
      return;
    }

    // Fallback: se IntersectionObserver não existir, mostrar tudo
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('[Reveal] IntersectionObserver não suportado, mostrando conteúdo imediatamente');
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            // Desconectar após a primeira vez que aparecer
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Threshold menor para mobile (mais sensível)
        threshold: 0.05,
        // RootMargin ajustado para mobile: -10% do viewport em vez de -50px fixo
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getTransform = () => {
    // Se não deve animar ou já está visível, sem transformação
    if (!shouldAnimate || isVisible) {
      return "translate(0, 0)";
    }

    // Transformações menores para mobile (melhor performance)
    const translateAmount = "20px";

    switch (direction) {
      case "up":
        return `translateY(${translateAmount})`;
      case "down":
        return `translateY(-${translateAmount})`;
      case "left":
        return `translateX(${translateAmount})`;
      case "right":
        return `translateX(-${translateAmount})`;
      case "fade":
        return "translate(0, 0)";
      default:
        return `translateY(${translateAmount})`;
    }
  };

  const getOpacity = () => {
    // Se não deve animar, sempre visível
    if (!shouldAnimate) return 1;
    // Se está visível, opacidade 1, senão 0
    return isVisible ? 1 : 0;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: getOpacity(),
        transform: getTransform(),
        // Transição mais suave e rápida para mobile
        transition: shouldAnimate && isVisible
          ? "opacity 0.5s ease-out, transform 0.5s ease-out"
          : shouldAnimate
          ? "opacity 0.3s ease-out, transform 0.3s ease-out"
          : "none",
        // Garantir que o elemento não fique invisível permanentemente
        willChange: shouldAnimate && !isVisible ? "opacity, transform" : "auto",
      }}
    >
      {children}
    </div>
  );
}
