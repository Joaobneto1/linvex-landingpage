import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "p-8 transition-all duration-300",
        "hover:border-white/20 hover:bg-white/10",
        className
      )}
    >
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
          <Icon className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-black text-white mb-3">
        {title}
      </h3>
      <p className="text-base text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

