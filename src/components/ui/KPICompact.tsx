import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KPICompactProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export const KPICompact = ({
  value,
  label,
  icon: Icon,
  className,
}: KPICompactProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "p-4 md:p-6 transition-all duration-300",
        "hover:border-white/20 hover:bg-white/10",
        "flex flex-col",
        className
      )}
    >
      {Icon && (
        <div className="mb-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-blue-400" strokeWidth={1.5} />
          </div>
        </div>
      )}
      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1">
        {value}
      </div>
      <div className="text-xs md:text-sm text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
};

