import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DarkSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "darker" | "lighter";
}

export const DarkSection = ({
  children,
  className,
  id,
  spacing = "lg",
  variant = "default",
}: DarkSectionProps) => {
  const spacingClasses = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-28 lg:py-32",
    xl: "py-24 md:py-32 lg:py-40",
  };

  const variantClasses = {
    default: "bg-[#0D1117]",
    darker: "bg-[#0A0E14]",
    lighter: "bg-[#0F141C]",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative",
        spacingClasses[spacing],
        variantClasses[variant],
        className
      )}
    >
      <div className="container-custom max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

