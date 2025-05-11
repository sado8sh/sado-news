
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NewsHeader from '../components/NewsHeader';
import NewsFooter from '../components/NewsFooter';
import { Clock, ChevronLeft } from 'lucide-react';
import { 
  breakingNews, 
  politicsNews, 
  technologyNews, 
  healthNews,
  sportsNews,
  artsNews,
  featuredArticle
} from '../utils/mockData';

const ArticleDetail: React.FC = () => {
  // Get the article ID from the URL
  const { id } = useParams();
  
  // Combine all articles to find the one with matching ID
  const allArticles = [
    featuredArticle,
    ...breakingNews,
    ...politicsNews,
    ...technologyNews,
    ...healthNews,
    ...sportsNews,
    ...artsNews
  ];
  
  const article = allArticles.find((article) => article.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <NewsHeader />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <Link to="/" className="text-news-primary hover:underline mt-4 inline-block">
            Return to home page
          </Link>
        </div>
        <NewsFooter />
      </div>
    );
  }
  
  // Find related articles from the same category
  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <NewsHeader />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-news-primary mb-6 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          
          <span className={`category-badge ${article.categoryColor} mb-3`}>
            {article.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4">
            {article.title}
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="font-medium mr-2">{article.author}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{article.publishDate}</span>
          </div>
          
          <div className="mb-8">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-2 italic">Photo: The Daily Chronicle</p>
          </div>
          
          <div className="prose lg:prose-xl max-w-none">
            <p className="text-lg font-medium mb-6">
              {article.excerpt}
            </p>
            
            {/* Generate some mock content for the full article */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
            </p>
            
            <p>
              Vestibulum nec mattis nisl, eget iaculis massa. Praesent vel consequat est, id dapibus nisi. Praesent dictum, est at varius tempor, tellus nibh pretium nisl, at fringilla ante elit eu magna. Donec egestas vestibulum tellus ac tincidunt. Integer pharetra aliquam diam, a cursus leo posuere eget.
            </p>
            
            <h2>Key Points from the Story</h2>
            
            <p>
              Ut vestibulum velit in fermentum faucibus. Nulla facilisi. Mauris ac pulvinar dolor. Phasellus vitae ullamcorper velit, eget aliquet elit. Suspendisse nisl tellus, efficitur quis elementum in, interdum ac purus. Nullam nec finibus eros.
            </p>
            
            <ul>
              <li>Cras mattis consectetur purus sit amet fermentum.</li>
              <li>Sed posuere consectetur est at lobortis.</li>
              <li>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
              <li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li>
            </ul>
            
            <p>
              Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>
            
            <h2>What This Means for the Future</h2>
            
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
          </div>
        </article>
        
        {/* Related Articles section */}
        {relatedArticles.length > 0 && (
          <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-playfair font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <div key={relatedArticle.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="h-48">
                      <img 
                        src={relatedArticle.imageUrl} 
                        alt={relatedArticle.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className={`category-badge ${relatedArticle.categoryColor} mb-2`}>
                        {relatedArticle.category}
                      </span>
                      <h3 className="font-playfair font-bold text-lg mb-2">
                        <Link to={`/article/${relatedArticle.id}`} className="hover:text-news-primary transition-colors">
                          {relatedArticle.title}
                        </Link>
                      </h3>
                      <div className="text-xs text-gray-500">
                        <span>{relatedArticle.publishDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default ArticleDetail;
