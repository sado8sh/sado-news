
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
  publishDate: string;
  author: string;
  articleUrl: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  excerpt,
  category,
  categoryColor,
  imageUrl,
  publishDate,
  author,
  articleUrl
}) => {
  return (
    <div className="featured-article relative rounded-lg overflow-hidden shadow-lg mb-8">
      <div className="md:grid md:grid-cols-2 h-full">
        <div className="featured-image h-64 md:h-full">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="featured-content p-6 bg-white flex flex-col justify-between">
          <div>
            <span className={`category-badge ${categoryColor} mb-3`}>
              {category}
            </span>
            <Link to={articleUrl} className="block">
              <h2 className="text-2xl md:text-3xl lg:text-4xl article-title mb-4">
                {title}
              </h2>
            </Link>
            <p className="article-excerpt mb-6">
              {excerpt}
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium mr-2">{author}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
