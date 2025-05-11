
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {isOpen ? (
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="border border-gray-300 rounded-l-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-news-primary"
            autoFocus
          />
          <button 
            type="submit"
            className="bg-news-primary text-white p-2 rounded-r-md hover:bg-opacity-90 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Open search"
        >
          <Search className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
