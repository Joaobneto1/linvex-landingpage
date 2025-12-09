import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
}

export const Section = ({ children, className, id, spacing = "lg" }: SectionProps) => {
  const spacingClasses = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-28 lg:py-32",
    xl: "py-24 md:py-32 lg:py-40",
  };

  return (
    <section id={id} className={cn("relative", spacingClasses[spacing], className)}>
      <div className="container-custom max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

