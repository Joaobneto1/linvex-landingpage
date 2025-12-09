import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KPIBlockProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export const KPIBlock = ({
  value,
  label,
  icon: Icon,
  className,
}: KPIBlockProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "p-6 md:p-8",
        "transition-all duration-300 hover:bg-white/10 hover:border-white/20",
        "flex flex-col",
        className
      )}
    >
      {Icon && (
        <div className="mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
          </div>
        </div>
      )}

      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2">
        {value}
      </div>

      <div className="text-sm md:text-base text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
};

