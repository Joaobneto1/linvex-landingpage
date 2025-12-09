import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ProcessStep {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
}

export const ProcessSteps = ({ steps, className }: ProcessStepsProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", className)}>
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div
            key={step.step}
            className={cn(
              "relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm",
              "p-8 transition-all duration-300",
              "hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Número do step */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-black text-lg shadow-lg">
              {step.step}
            </div>

            {/* Ícone */}
            <div className="mb-6 mt-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
              </div>
            </div>

            {/* Título */}
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

            {/* Descrição */}
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
              {step.description}
            </p>

            {/* Bullets */}
            {step.bullets && step.bullets.length > 0 && (
              <ul className="space-y-2">
                {step.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

