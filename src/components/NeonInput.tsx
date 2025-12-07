import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface NeonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const NeonInput = forwardRef<HTMLInputElement, NeonInputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative group">
        {icon && (
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-secondary">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full h-12 px-5 bg-transparent border-2 border-foreground rounded-full",
            "text-foreground placeholder:text-muted-foreground",
            "outline-none transition-all duration-300",
            "focus:border-secondary focus:shadow-[0_0_10px_hsl(var(--neon-cyan)/0.5)]",
            icon && "pl-12",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

NeonInput.displayName = "NeonInput";
