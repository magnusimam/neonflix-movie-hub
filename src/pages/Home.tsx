import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { NeonContainer } from "@/components/NeonContainer";
import { SearchBar } from "@/components/SearchBar";
import { Film, User } from "lucide-react";
import { NeonButton } from "@/components/NeonButton";

const Home = () => {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setIsSearching(true);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-end gap-4">
        <Link to="/login">
          <NeonButton variant="outline" size="sm">
            <User size={18} />
            Login
          </NeonButton>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Film className="w-12 h-12 md:w-16 md:h-16 text-secondary" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-primary neon-text-pink">Neon</span>
            <span className="text-secondary neon-text-cyan">Flix</span>
          </h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Discover your next favorite movie
        </p>
      </div>

      {/* Search Container */}
      <NeonContainer size="xl" className="mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Search Movies
          </h2>
          <p className="text-muted-foreground text-sm">
            Enter a movie title to explore our database
          </p>
        </div>
        <SearchBar onSearch={handleSearch} isLoading={isSearching} />
      </NeonContainer>

      {/* Footer hint */}
      <p className="mt-12 text-sm text-muted-foreground text-center">
        Powered by OMDb API
      </p>
    </div>
  );
};

export default Home;
