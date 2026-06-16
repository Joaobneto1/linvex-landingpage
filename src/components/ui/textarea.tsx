import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-offwhite transition-colors placeholder:text-offwhite/40 focus-visible:border-orange focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
