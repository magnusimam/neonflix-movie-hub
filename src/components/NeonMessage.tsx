import { cn } from "@/lib/utils";
import { AlertCircle, Search, Film } from "lucide-react";

interface NeonMessageProps {
  type: "error" | "empty" | "no-search";
  message?: string;
}

export const NeonMessage = ({ type, message }: NeonMessageProps) => {
  const config = {
    error: {
      icon: AlertCircle,
      title: "Oops! Something went wrong",
      description: message || "We couldn't fetch the movies. Please try again.",
      color: "text-primary",
      glow: "neon-text-pink",
    },
    empty: {
      icon: Film,
      title: "No movies found",
      description: message || "Try searching with different keywords.",
      color: "text-secondary",
      glow: "neon-text-cyan",
    },
    "no-search": {
      icon: Search,
      title: "Search for movies",
      description: message || "Enter a movie title to start exploring.",
      color: "text-secondary",
      glow: "neon-text-cyan",
    },
  };

  const { icon: Icon, title, description, color, glow } = config[type];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-fade-in">
      <Icon className={cn("w-16 h-16 mb-4", color)} strokeWidth={1.5} />
      <h3 className={cn("text-2xl font-bold mb-2", color, glow)}>{title}</h3>
      <p className="text-muted-foreground max-w-md">{description}</p>
    </div>
  );
};
