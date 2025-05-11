
import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Mail, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const NewsFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-news-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-6 w-6" />
              <h2 className="text-xl font-playfair font-bold">Sado News</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Delivering the most important news of the day with integrity, clarity, and context.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/breaking" className="hover:underline">Breaking News</Link></li>
              <li><Link to="/category/politics" className="hover:underline">Politics</Link></li>
              <li><Link to="/category/technology" className="hover:underline">Technology</Link></li>
              <li><Link to="/category/environment" className="hover:underline">Environment</Link></li>
              <li><Link to="/category/health" className="hover:underline">Health</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/ethics" className="hover:underline">Ethics Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Get the latest news delivered to your inbox.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l text-black focus:outline-none flex-grow"
              />
              <button type="submit" className="bg-news-breaking px-4 py-2 rounded-r hover:bg-opacity-90 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>&copy; {currentYear} Sado News. All rights reserved.</p>
            <div className="space-x-4 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;
