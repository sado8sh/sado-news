
import React, { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import NewsHeader from '../components/NewsHeader';
import NewsFooter from '../components/NewsFooter';
import ArticleCard from '../components/ArticleCard';
import { 
  breakingNews, 
  politicsNews, 
  technologyNews, 
  healthNews,
  sportsNews,
  artsNews,
  featuredArticle
} from '../utils/mockData';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import BackToTop from '../components/BackToTop';

const CategoryPage: React.FC = () => {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const articlesPerPage = 6; // Number of articles to display per page
  
  // Function to get category color
  const getCategoryColor = (categoryName: string): string => {
    const lowerCaseName = categoryName.toLowerCase();
    switch (lowerCaseName) {
      case 'breaking':
        return 'bg-news-breaking';
      case 'politics':
        return 'bg-news-politics';
      case 'technology':
        return 'bg-news-technology';
      case 'health':
        return 'bg-news-health';
      case 'sports':
        return 'bg-news-sports';
      case 'arts':
        return 'bg-news-arts';
      case 'environment':
        return 'bg-news-environment';
      default:
        return 'bg-news-primary';
    }
  };
  
  // Get the category color
  const categoryColor = name ? getCategoryColor(name) : 'bg-news-primary';
  
  // Combine all articles and filter by category
  const allArticles = [
    featuredArticle,
    ...breakingNews,
    ...politicsNews,
    ...technologyNews,
    ...healthNews,
    ...sportsNews,
    ...artsNews
  ];
  
  const categoryArticles = name 
    ? allArticles.filter((article) => article.category.toLowerCase() === name.toLowerCase())
    : [];

  // Calculate total pages
  const totalPages = Math.ceil(categoryArticles.length / articlesPerPage);
  
  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = categoryArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Change page
  const paginate = (pageNumber: number) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setSearchParams({ page: pageNumber.toString() });
  };

  // Update URL when page changes
  useEffect(() => {
    // This ensures the page param is set on initial load
    if (!searchParams.has('page')) {
      setSearchParams({ page: '1' });
    }
  }, [searchParams, setSearchParams]);
  
  if (!name || categoryArticles.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <NewsHeader />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <h1 className="text-3xl font-bold">Category not found</h1>
          <Link to="/" className="text-news-primary hover:underline mt-4 inline-block">
            Return to home page
          </Link>
        </div>
        <NewsFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NewsHeader />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link to="/" className="text-gray-600 hover:text-news-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{name}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6 border-b pb-4">
            {name} News
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentArticles.map((article) => (
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
          
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => paginate(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                
                {Array.from({ length: Math.min(3, totalPages) }).map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink 
                        onClick={() => paginate(pageNumber)}
                        isActive={currentPage === pageNumber}
                        className="cursor-pointer"
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => paginate(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      
      <BackToTop />
      <NewsFooter />
    </div>
  );
};

export default CategoryPage;
