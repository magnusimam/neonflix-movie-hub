import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const NeonContainer = ({ children, className, size = "md" }: NeonContainerProps) => {
  const sizeClasses = {
    sm: "w-full max-w-sm",
    md: "w-full max-w-md",
    lg: "w-full max-w-lg",
    xl: "w-full max-w-xl",
  };

  return (
    <div className={cn("relative group", sizeClasses[size], className)}>
      {/* Animated rotating gradient border */}
      <div className="absolute -inset-[3px] rounded-[25px] overflow-hidden">
        <div 
          className="absolute inset-[-150%] animate-neon-border-spin"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, transparent 50%, hsl(var(--neon-cyan)) 80%, hsl(var(--neon-pink)) 100%)",
          }}
        />
      </div>
      
      {/* Second glow layer */}
      <div className="absolute -inset-[3px] rounded-[25px] overflow-hidden opacity-50 blur-sm">
        <div 
          className="absolute inset-[-150%] animate-neon-border-spin"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, transparent 50%, hsl(var(--neon-cyan)) 80%, hsl(var(--neon-pink)) 100%)",
          }}
        />
      </div>
      
      {/* Inner content container */}
      <div className="relative bg-card rounded-[22px] p-8 z-10 transition-all duration-500 group-hover:scale-[1.02]">
        {children}
      </div>
    </div>
  );
};
