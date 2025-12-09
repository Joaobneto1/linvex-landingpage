import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeroDarkProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
}

export const HeroDark = ({ children, className, backgroundImage }: HeroDarkProps) => {
  return (
    <section
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center",
        "bg-[#0D111B]",
        "overflow-hidden",
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0D111B]/95" />

      {/* Gradientes sutis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {children}
      </div>
    </section>
  );
};

