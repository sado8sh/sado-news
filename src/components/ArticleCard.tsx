
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
  publishDate: string;
  author: string;
  articleUrl: string;
  size?: 'small' | 'medium' | 'large';
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  category,
  categoryColor,
  imageUrl,
  publishDate,
  author,
  articleUrl,
  size = 'medium'
}) => {
  return (
    <div className={`article-card animate-fade-in`}>
      <div className={`relative ${size === 'small' ? 'h-32' : size === 'large' ? 'h-60' : 'h-48'}`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`category-badge ${categoryColor}`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <Link to={articleUrl}>
          <h3 className={`${size === 'small' ? 'text-lg' : size === 'large' ? 'text-2xl' : 'text-xl'} article-title mb-2`}>
            {title}
          </h3>
        </Link>
        <p className={`article-excerpt ${size === 'small' ? 'text-sm mb-2' : 'mb-4'}`}>
          {excerpt}
        </p>
        <div className="flex items-center text-xs text-gray-500">
          <span className="font-medium mr-2">{author}</span>
          <span className="mx-2">•</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{publishDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
