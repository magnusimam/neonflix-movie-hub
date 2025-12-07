import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MovieCardProps {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  index?: number;
}

export const MovieCard = ({ imdbID, title, year, poster, index = 0 }: MovieCardProps) => {
  const hasPoster = poster && poster !== "N/A";

  return (
    <Link
      to={`/movie/${imdbID}`}
      className={cn(
        "group relative block overflow-hidden rounded-xl",
        "bg-card border border-border/50",
        "transition-all duration-500 hover:scale-105",
        "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]",
        "hover:border-secondary/50",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Poster Image */}
      <div className="aspect-[2/3] overflow-hidden bg-muted">
        {hasPoster ? (
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span className="text-4xl">🎬</span>
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 via-background/80 to-transparent">
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{year}</p>
      </div>

      {/* Neon border on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-secondary/30 transition-colors duration-300 pointer-events-none" />
    </Link>
  );
};
