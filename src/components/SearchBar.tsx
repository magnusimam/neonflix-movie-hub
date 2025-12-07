import { Search } from "lucide-react";
import { NeonInput } from "./NeonInput";
import { NeonButton } from "./NeonButton";
import { useState, KeyboardEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto">
      <div className="flex-1">
        <NeonInput
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          icon={<Search size={20} />}
        />
      </div>
      <NeonButton 
        onClick={handleSearch} 
        disabled={isLoading || !query.trim()}
        className="w-full sm:w-auto"
      >
        {isLoading ? "Searching..." : "Search"}
      </NeonButton>
    </div>
  );
};
