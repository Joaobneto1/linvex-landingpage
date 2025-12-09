import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PricingHighlightProps {
  title: string;
  value: string | ReactNode;
  description?: string;
  className?: string;
  icon?: ReactNode;
}

export const PricingHighlight = ({
  title,
  value,
  description,
  className,
  icon,
}: PricingHighlightProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "p-6 transition-all duration-300",
        "hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "dark:bg-black/20 dark:border-white/5 dark:hover:border-white/10",
        className
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <div className="text-sm font-medium text-muted-foreground mb-2">{title}</div>
      <div className="text-2xl md:text-3xl font-bold mb-2">{value}</div>
      {description && (
        <div className="text-sm text-muted-foreground leading-relaxed">{description}</div>
      )}
    </div>
  );
};

