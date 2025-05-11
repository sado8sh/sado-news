
import React from 'react';
import NewsHeader from '../components/NewsHeader';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';
import CategorySection from '../components/CategorySection';
import NewsFooter from '../components/NewsFooter';
import BackToTop from '../components/BackToTop';
import { 
  featuredArticle, 
  breakingNews, 
  politicsNews, 
  technologyNews, 
  healthNews,
  sportsNews,
  artsNews
} from '../utils/mockData';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NewsHeader />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Featured Article */}
          <FeaturedArticle
            title={featuredArticle.title}
            excerpt={featuredArticle.excerpt}
            category={featuredArticle.category}
            categoryColor={featuredArticle.categoryColor}
            imageUrl={featuredArticle.imageUrl}
            publishDate={featuredArticle.publishDate}
            author={featuredArticle.author}
            articleUrl={`/article/${featuredArticle.id}`}
          />
          
          {/* Breaking News Section */}
          <section className="mb-12">
            <h2 className="section-title border-news-breaking" style={{ borderColor: 'var(--tw-color-news-breaking)' }}>
              Breaking News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {breakingNews.map((article) => (
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
                />
              ))}
            </div>
          </section>
          
          {/* Main Content with Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2">
              {/* Politics Section */}
              <CategorySection
                title="Politics"
                categoryColor="news-politics"
                articles={politicsNews}
              />
              
              {/* Technology Section */}
              <CategorySection
                title="Technology"
                categoryColor="news-technology"
                articles={technologyNews}
              />
              
              {/* Health Section */}
              <CategorySection
                title="Health"
                categoryColor="news-health"
                articles={healthNews}
              />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Editor's Picks */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="font-playfair text-xl font-bold mb-4 pb-2 border-b">
                  Editor's Picks
                </h3>
                <div className="space-y-6">
                  {[...breakingNews, ...politicsNews].slice(0, 4).map((article) => (
                    <div key={`editor-${article.id}`} className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <span className={`category-badge ${article.categoryColor} mb-2 text-xs`}>
                          {article.category}
                        </span>
                        <h4 className="font-playfair font-medium text-sm">
                          <a href={`/article/${article.id}`} className="hover:text-news-primary transition-colors">
                            {article.title}
                          </a>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sports Section */}
              <div className="mb-8">
                <h3 className="section-title border-news-sports" style={{ borderColor: 'var(--tw-color-news-sports)' }}>
                  Sports
                </h3>
                <div className="space-y-6">
                  {sportsNews.map((article) => (
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
                      size="small"
                    />
                  ))}
                </div>
              </div>
              
              {/* Arts & Culture */}
              <div className="mb-8">
                <h3 className="section-title border-news-arts" style={{ borderColor: 'var(--tw-color-news-arts)' }}>
                  Arts & Culture
                </h3>
                <div className="space-y-6">
                  {artsNews.map((article) => (
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
                      size="small"
                    />
                  ))}
                </div>
              </div>
              
              {/* Newsletter Subscription */}
              <div className="bg-news-primary text-white p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-bold mb-3">
                  Stay Updated
                </h3>
                <p className="mb-4 text-gray-200">
                  Get the latest news delivered straight to your inbox.
                </p>
                <form>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full mb-3 px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-news-breaking"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-news-breaking text-white px-4 py-2 rounded font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <BackToTop />
      <NewsFooter />
    </div>
  );
};

export default Index;
