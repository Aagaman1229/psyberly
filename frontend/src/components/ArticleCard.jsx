import '../styles/ArticleCard.css';

function ArticleCard({ article, onClick }) {
  return (
    <div className="article-card" onClick={() => onClick(article)}>
      <img
        src={article.cover_image}
        alt={article.title}
        className="cover-image"
      />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
}

export default ArticleCard;
