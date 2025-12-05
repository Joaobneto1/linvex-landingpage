import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BusinessModelCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
  highlight?: string;
}

export const BusinessModelCard = ({
  icon: Icon,
  title,
  description,
  href,
  className,
  highlight,
}: BusinessModelCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group relative rounded-3xl border border-primary/20 bg-gradient-card-blue",
        "p-8 md:p-10 transition-all duration-300 block h-full",
        "hover:border-primary/40 hover:shadow-blue hover:scale-[1.02]",
        "backdrop-blur-sm",
        className
      )}
    >
      {/* Background gradient effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 mb-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300 shadow-blue/50">
          <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-3 text-foreground">{title}</h3>
        {highlight && (
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-primary/15 text-primary border border-primary/30 mb-4">
            {highlight}
          </div>
        )}
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-medium">{description}</p>
      </div>
      <div className="relative z-10 flex items-center text-primary font-bold group-hover:gap-2 transition-all text-base md:text-lg">
        <span>Saiba mais</span>
        <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
      </div>
    </Link>
  );
};

