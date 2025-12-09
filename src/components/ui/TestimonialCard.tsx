import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  content,
  avatar,
  rating = 5,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-primary/20 bg-white",
        "p-6 md:p-8 transition-all duration-300",
        "hover:border-primary/40 hover:shadow-blue",
        className
      )}
    >
      {/* Rating */}
      {rating && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">
            {role}
            {company && ` • ${company}`}
          </div>
        </div>
      </div>
    </div>
  );
};

