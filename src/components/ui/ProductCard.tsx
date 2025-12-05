import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  href?: string;
  className?: string;
}

export const ProductCard = ({
  icon: Icon,
  title,
  description,
  badge,
  href,
  className,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "p-8 transition-all duration-300 h-full flex flex-col",
        "hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "dark:bg-black/20 dark:border-white/5 dark:hover:border-white/10",
        className
      )}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </div>
        {badge && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>

      {href && (
        <Button
          variant="ghost"
          className="w-full justify-between group/btn"
          asChild
        >
          <a href={href}>
            Saiba mais
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      )}
    </div>
  );
};

