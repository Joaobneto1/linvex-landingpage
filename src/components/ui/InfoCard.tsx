import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfoCardProps {
  label: string;
  value: string | ReactNode;
  subtitle?: string;
  className?: string;
}

export const InfoCard = ({ label, value, subtitle, className }: InfoCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm",
        "p-6 md:p-8",
        "text-center",
        "transition-all duration-300 hover:bg-white/15 hover:border-white/30",
        className
      )}
    >
      {/* Label */}
      <div className="text-xs md:text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
        {label}
      </div>

      {/* Valor */}
      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
        {value}
      </div>

      {/* Subtítulo */}
      {subtitle && (
        <div className="text-sm md:text-base text-white/80 font-medium">
          {subtitle}
        </div>
      )}
    </div>
  );
};

