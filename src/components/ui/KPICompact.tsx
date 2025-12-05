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
        "p-6 transition-all duration-300",
        "hover:border-white/20 hover:bg-white/10",
        className
      )}
    >
      {Icon && (
        <div className="mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
          </div>
        </div>
      )}
      <div className="text-3xl md:text-4xl font-black text-white mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
};

