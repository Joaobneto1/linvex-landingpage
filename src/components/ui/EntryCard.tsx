import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface EntryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export const EntryCard = ({
  icon: Icon,
  title,
  description,
  href,
  className,
}: EntryCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group relative rounded-xl border-2 border-blue-500/40 bg-white/95",
        "px-4 py-3 md:px-6 md:py-4 transition-all duration-200 block w-full",
        "hover:border-blue-500 hover:shadow-md hover:bg-white",
        "flex items-center gap-4",
        className
      )}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-200">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" strokeWidth={1.5} />
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-0.5">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 leading-tight">
          {description}
        </p>
      </div>
    </Link>
  );
};

