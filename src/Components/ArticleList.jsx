import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getArticles } from "../../APIRequests";

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
      {articles.map((article) => (
        // Linking specific article to a parametric endpoint
        <Link to={"/articles/" + article.article_id} key={article.article_id}>
          <li className="articleTitleLink">{article.title}</li>
        
          {/* Replace this li element with article card component and pass each article as a prop */}
        </Link>
      ))}
    </ul>
  );
}

export default ArticleList;
