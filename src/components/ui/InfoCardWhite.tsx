import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfoCardWhiteProps {
  label: string;
  value: string | ReactNode;
  subtitle?: string;
  className?: string;
}

export const InfoCardWhite = ({ label, value, subtitle, className }: InfoCardWhiteProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-white",
        "p-6 md:p-8",
        "text-center",
        "transition-all duration-300 hover:shadow-lg hover:border-primary/20",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Linha colorida no topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600" />

      {/* Label */}
      <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        {label}
      </div>

      {/* Valor */}
      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-2">
        {value}
      </div>

      {/* Subtítulo */}
      {subtitle && (
        <div className="text-sm md:text-base text-muted-foreground font-medium">
          {subtitle}
        </div>
      )}
    </div>
  );
};

