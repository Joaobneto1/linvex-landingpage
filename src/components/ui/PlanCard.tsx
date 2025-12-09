import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface PlanCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  variant?: "blue" | "gradient";
  className?: string;
}

export const PlanCard = ({
  icon: Icon,
  title,
  description,
  href,
  variant = "blue",
  className,
}: PlanCardProps) => {
  const variantClasses = {
    blue: "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/15 hover:border-blue-500/50",
    gradient: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 border-purple-500/30 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-purple-500/30 hover:border-purple-500/50",
  };

  return (
    <Link
      to={href}
      className={cn(
        "group relative rounded-3xl border-2 p-8 md:p-10",
        "transition-all duration-300 hover-lift",
        "flex flex-col items-start",
        variantClasses[variant],
        className
      )}
    >
      {/* Ícone */}
      <div className={cn(
        "mb-6 w-16 h-16 rounded-2xl flex items-center justify-center",
        variant === "blue"
          ? "bg-blue-500/20 group-hover:bg-blue-500/30"
          : "bg-purple-500/20 group-hover:bg-purple-500/30",
        "transition-colors duration-300"
      )}>
        <Icon className={cn(
          "w-8 h-8",
          variant === "blue" ? "text-blue-600" : "text-purple-600"
        )} strokeWidth={1.5} />
      </div>

      {/* Título */}
      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Seta indicativa */}
      <div className="mt-6 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Saiba mais</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};

