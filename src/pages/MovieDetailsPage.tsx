import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails, MovieDetails } from "@/services/omdbAPI";
import { NeonMessage } from "@/components/NeonMessage";
import { NeonButton } from "@/components/NeonButton";
import { ArrowLeft, Star, Clock, Calendar, Film, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await getMovieDetails(id);
        
        if (response.Response === "True") {
          setMovie(response);
        } else {
          setError(response.Error || "Movie not found");
        }
      } catch (err) {
        setError("Failed to fetch movie details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 aspect-[2/3] bg-muted rounded-xl animate-pulse" />
            <div className="flex-1 space-y-4">
              <div className="h-10 bg-muted rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-muted rounded w-1/2 animate-pulse" />
              <div className="h-32 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-block mb-8">
            <NeonButton variant="outline" size="sm">
              <ArrowLeft size={18} />
              Back to Home
            </NeonButton>
          </Link>
          <NeonMessage type="error" message={error || "Movie not found"} />
        </div>
      </div>
    );
  }

  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-block mb-8">
          <NeonButton variant="outline" size="sm">
            <ArrowLeft size={18} />
            Back to Home
          </NeonButton>
        </Link>

        {/* Movie Content */}
        <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
          {/* Poster */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className={cn(
              "relative overflow-hidden rounded-2xl",
              "border-2 border-border",
              "transition-all duration-500",
              "hover:border-secondary/50 hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.3)]"
            )}>
              {hasPoster ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full aspect-[2/3] object-cover"
                />
              ) : (
                <div className="w-full aspect-[2/3] bg-muted flex items-center justify-center">
                  <Film className="w-20 h-20 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-6">
            {/* Title and Year */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {movie.Title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {movie.Year}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {movie.Runtime}
                </span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">
                  {movie.Rated}
                </span>
              </div>
            </div>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2">
              {movie.Genre.split(", ").map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Ratings */}
            {movie.Ratings && movie.Ratings.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movie.Ratings.map((rating) => (
                  <div
                    key={rating.Source}
                    className="p-4 bg-card rounded-xl border border-border"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 text-primary" fill="currentColor" />
                      <span className="text-lg font-bold text-foreground">{rating.Value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{rating.Source}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Plot */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Plot</h2>
              <p className="text-muted-foreground leading-relaxed">{movie.Plot}</p>
            </div>

            {/* Cast & Crew */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
                  <Users size={18} className="text-secondary" />
                  Cast
                </h3>
                <p className="text-muted-foreground">{movie.Actors}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Director</h3>
                <p className="text-muted-foreground">{movie.Director}</p>
              </div>
            </div>

            {/* Awards */}
            {movie.Awards && movie.Awards !== "N/A" && (
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
                  <Award size={18} />
                  Awards
                </h3>
                <p className="text-foreground">{movie.Awards}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
