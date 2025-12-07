import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "pink" | "outline";
  size?: "sm" | "md" | "lg";
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "cyan", size = "md", children, ...props }, ref) => {
    const variants = {
      cyan: "bg-secondary text-secondary-foreground hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.6),0_0_40px_hsl(var(--neon-cyan)/0.4)]",
      pink: "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--neon-pink)/0.6),0_0_40px_hsl(var(--neon-pink)/0.4)]",
      outline: "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.4)]",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
          "transition-all duration-300 transform hover:scale-105",
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";
