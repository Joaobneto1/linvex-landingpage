import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StepCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export const StepCard = ({
  step,
  icon: Icon,
  title,
  description,
  className,
  children,
}: StepCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "p-8 transition-all duration-300",
        "hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "dark:bg-black/20 dark:border-white/5 dark:hover:border-white/10",
        className
      )}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-lg text-primary">
            {step}
          </div>
        </div>
        <div className="flex-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3">
            <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

