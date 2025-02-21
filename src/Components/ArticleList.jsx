import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../APIRequests";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  // Setting states
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null); // Defaults to null when no state detected

  useEffect(() => {
    // invoke api request (get articles) => update state (articles) => set is loading (false) =>
    getArticles()
      .then((data) => {
        // Destructure 'articles' => use articles to set state
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErr("ERROR: Article not found");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p> Loading articles ... </p>;
  }
  if (err) {
    return <p> {err} </p>;
  }

  return (
    <ul className="article-list">
      <h2> All articles: </h2>

      {articles.map((article) => (
        <Link to={`/articles/${article.article_id}`} key={article.article_id}>
          <ArticleCard article={article} /> {/* Sending article via props*/}
        </Link>
      ))}
    </ul>
  );
}

export default ArticleList;
