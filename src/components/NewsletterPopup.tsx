
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user hasn't already subscribed
      const hasSubscribed = localStorage.getItem('newsletter-subscribed');
      if (!hasSubscribed) {
        setIsVisible(true);
      }
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email.trim() && isValidEmail(email)) {
      localStorage.setItem('newsletter-subscribed', 'true');
      setIsVisible(false);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        duration: 3000,
      });
    }
  };
  
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleClose = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-fade-in">
        <button 
          onClick={handleClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-playfair font-bold mb-2">Stay Informed</h2>
          <p className="text-gray-600">
            Subscribe to our newsletter and never miss the latest news.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-news-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-news-primary text-white font-medium py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
          >
            Subscribe
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive email newsletters from The Daily Chronicle.
            You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
