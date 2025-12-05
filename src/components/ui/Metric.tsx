import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MetricProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export const Metric = ({ value, label, icon, className }: MetricProps) => {
  return (
    <div className={cn("text-center", className)}>
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

