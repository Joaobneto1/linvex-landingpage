import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeroGradientProps {
  children: ReactNode;
  className?: string;
}

export const HeroGradient = ({ children, className }: HeroGradientProps) => {
  return (
    <section
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center",
        "bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600",
        "overflow-hidden",
        className
      )}
    >
      {/* Overlay escuro sutil */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Gradientes animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {children}
      </div>
    </section>
  );
};

