import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ModelCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ModelCard = ({
  icon: Icon,
  title,
  description,
  className,
}: ModelCardProps) => {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "p-6 md:p-8 transition-all duration-300",
        "hover:border-blue-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
        className
      )}
    >
      <div className="mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
          <Icon className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-black text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

