import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { supabase } from "../supabase-client";
import DOMPurify from "dompurify"; // sanitize HTML
import "../styles/Article.css";

function Article() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 6;

  const fetchArticles = async (page) => {
    setLoading(true);
    const from = (page - 1) * limit;
    const to = page * limit - 1;

    const { data, error } = await supabase
      .from("articles_articles")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="article-container">
      <h1>Articles</h1>

      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <>
          {selectedArticle && (
            <div className="article-view">
              <h2>{selectedArticle.title}</h2>
              <img
                src={selectedArticle.cover_image}
                alt={selectedArticle.title}
                className="cover-image"
              />
              {/* Render HTML content */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(selectedArticle.content),
                }}
              />
            </div>
          )}

          <div className="article-list">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={handleArticleClick}
              />
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>Page {page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={articles.length < limit}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Article;
