
import React from 'react';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
  publishDate: string;
  author: string;
}

interface CategorySectionProps {
  title: string;
  categoryColor: string;
  articles: Article[];
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  categoryColor,
  articles
}) => {
  // Get the correct CSS variable for border color
  const getBorderClass = () => {
    switch (categoryColor) {
      case 'news-politics':
        return 'border-news-politics';
      case 'news-technology':
        return 'border-news-technology';
      case 'news-health':
        return 'border-news-health';
      case 'news-sports':
        return 'border-news-sports';
      case 'news-arts':
        return 'border-news-arts';
      case 'news-environment':
        return 'border-news-environment';
      case 'news-breaking':
        return 'border-news-breaking';
      default:
        return 'border-news-primary';
    }
  };
  
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center">
        <h2 className={`section-title ${getBorderClass()}`}>
          {title}
        </h2>
        <Link to={`/category/${title.toLowerCase()}?page=1`} className="flex items-center text-sm hover:text-news-primary transition-colors">
          View All <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            excerpt={article.excerpt}
            category={article.category}
            categoryColor={article.categoryColor}
            imageUrl={article.imageUrl}
            publishDate={article.publishDate}
            author={article.author}
            articleUrl={`/article/${article.id}`}
            size="medium"
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
