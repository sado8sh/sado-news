
import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';

const NewsHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-playfair font-bold text-news-primary">
            Sado News
          </Link>
          <div className="flex items-center gap-4">
            <SearchBar />
            <button className="bg-news-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        <NavMenu />
      </div>
    </header>
  );
};

export default NewsHeader;
