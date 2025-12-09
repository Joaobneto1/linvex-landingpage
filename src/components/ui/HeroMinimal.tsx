import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeroMinimalProps {
  children: ReactNode;
  className?: string;
}

export const HeroMinimal = ({ children, className }: HeroMinimalProps) => {
  return (
    <section
      className={cn(
        "relative min-h-[80vh] flex items-center justify-center",
        "bg-gradient-to-br from-blue-50 via-white to-purple-50",
        "overflow-hidden",
        className
      )}
    >
      {/* Background gradients suaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {children}
      </div>
    </section>
  );
};

