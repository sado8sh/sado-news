
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsHeader from '../components/NewsHeader';
import NewsFooter from '../components/NewsFooter';
import ArticleCard from '../components/ArticleCard';
import { breakingNews, politicsNews, technologyNews, healthNews, sportsNews, artsNews, featuredArticle } from '../utils/mockData';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Combine all articles
  const allArticles = [
    featuredArticle,
    ...breakingNews,
    ...politicsNews,
    ...technologyNews,
    ...healthNews,
    ...sportsNews,
    ...artsNews
  ];
  
  // Filter articles based on search query
  const searchResults = allArticles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <NewsHeader />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
            Search Results
          </h1>
          <p className="text-gray-600 mb-6">
            {searchResults.length} results for "{query}"
          </p>
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {searchResults.map((article) => (
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
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-playfair mb-4">No results found</h2>
              <p className="text-gray-600 mb-6">
                Try searching with different keywords or browse our categories
              </p>
            </div>
          )}
        </div>
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default SearchPage;
