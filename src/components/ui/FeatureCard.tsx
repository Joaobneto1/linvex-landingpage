import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  children,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "p-8 md:p-10 transition-all duration-300 hover-lift",
        "hover:border-white/20 hover:bg-white/10 hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)]",
        "dark:bg-black/20 dark:border-white/5 dark:hover:border-white/10",
        className
      )}
    >
      <div className="mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      {children}
    </div>
  );
};

