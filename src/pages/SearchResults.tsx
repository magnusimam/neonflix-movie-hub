import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { MovieGrid } from "@/components/MovieGrid";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { NeonMessage } from "@/components/NeonMessage";
import { searchMovies, Movie } from "@/services/omdbAPI";
import { Film, ArrowLeft } from "lucide-react";
import { NeonButton } from "@/components/NeonButton";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        setMovies([]);
        setHasSearched(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      setHasSearched(true);

      try {
        const response = await searchMovies(query);
        
        if (response.Response === "True" && response.Search) {
          setMovies(response.Search);
        } else {
          setMovies([]);
          if (response.Error && response.Error !== "Movie not found!") {
            setError(response.Error);
          }
        }
      } catch (err) {
        setError("Failed to fetch movies. Please try again.");
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
            <div className="flex items-center gap-2">
              <Film className="w-8 h-8 text-secondary" />
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="text-primary">Neon</span>
                <span className="text-secondary">Flix</span>
              </h1>
            </div>
          </Link>
          <Link to="/login">
            <NeonButton variant="outline" size="sm">
              Login
            </NeonButton>
          </Link>
        </div>
        
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        
        {query && (
          <p className="mt-4 text-muted-foreground">
            {isLoading ? "Searching for" : "Results for"}: <span className="text-secondary font-medium">"{query}"</span>
          </p>
        )}
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto">
        {isLoading ? (
          <LoadingSkeleton />
        ) : error ? (
          <NeonMessage type="error" message={error} />
        ) : !hasSearched ? (
          <NeonMessage type="no-search" />
        ) : movies.length === 0 ? (
          <NeonMessage type="empty" />
        ) : (
          <MovieGrid movies={movies} />
        )}
      </main>
    </div>
  );
};

export default SearchResults;
