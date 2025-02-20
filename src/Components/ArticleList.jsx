import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getArticles } from "../../APIRequests";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  // Setting states
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // invoke api request (get articles) => update state (articles) => set is loading (false) =>
    getArticles().then(({ articles }) => {
      // Destructure 'articles' => use articles to set state
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p> Loading ... </p>;
  }

  return (
    <ul className="article-list">
      <h2> All articles: </h2>
      {articles.map((article) => (
        // Linking specific article to a parametric endpoint
        <Link to={"/articles/" + article.article_id} key={article.article_id}>
          <ArticleCard article={article} />
          {/* Replace this li element with article card component and pass each article as a prop */}
        </Link>
      ))}
    </ul>
  );
}

export default ArticleList;
// return <ArticleCard key={article} article={article} />
