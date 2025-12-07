import { MovieCard } from "./MovieCard";
import { Movie } from "@/services/omdbAPI";

interface MovieGridProps {
  movies: Movie[];
}

export const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.imdbID}
          imdbID={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          index={index}
        />
      ))}
    </div>
  );
};
