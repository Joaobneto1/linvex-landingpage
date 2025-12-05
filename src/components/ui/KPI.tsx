import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KPIProps {
  value: string | number;
  label: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  chart?: "bar" | "circle" | "line";
  percentage?: number;
  className?: string;
}

export const KPI = ({
  value,
  label,
  icon: Icon,
  trend,
  chart,
  percentage,
  className,
}: KPIProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-primary/20 bg-gradient-card-blue",
        "p-6 md:p-8 transition-all duration-300",
        "hover:border-primary/40 hover:shadow-blue",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        {Icon && (
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
        )}
        {trend && (
          <div
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              trend === "up" && "bg-green-100 text-green-700",
              trend === "down" && "bg-red-100 text-red-700",
              trend === "neutral" && "bg-gray-100 text-gray-700"
            )}
          >
            {trend === "up" && "↑"}
            {trend === "down" && "↓"}
            {trend === "neutral" && "→"}
          </div>
        )}
      </div>

      <div className="mb-2">
        <div className="text-3xl md:text-4xl font-black text-foreground mb-1">
          {value}
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium">
          {label}
        </div>
      </div>

      {chart === "bar" && percentage && (
        <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      )}

      {chart === "circle" && percentage && (
        <div className="mt-4 relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${(percentage / 100) * 175.9} 175.9`}
              className="text-primary transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
            {percentage}%
          </div>
        </div>
      )}

      {chart === "line" && (
        <div className="mt-4 h-12 flex items-end gap-1">
          {[65, 75, 60, 85, 70, 90, 80].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t transition-all duration-300 hover:opacity-80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

