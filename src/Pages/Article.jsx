import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../../APIRequests";
import ViewAllArticles from "../Components/ViewAllArticles";
import moment from "moment";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voteCount, setVoteCount] = useState(0);

  const { article_id } = useParams(); // Accessing parameters from route

  // Updating states on rendering specific article
  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setVoteCount(articleData.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("ERROR: The article has failed to load! We are fixing this🔧");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <>
      <ViewAllArticles />
      <div className="articleContainer">
        <p className="subreddit-text">r/{article.topic}</p>
        <h1 className="articleTitle">{article.title}</h1>

        <div>
          <p className="articleAuthor">
            Posted by {article.author} on{" "}
            {moment(article.created_at).calendar()}
          </p>
        </div>

        {article.article_img_url && (
          <img
            className="articleImages" // Managing sizing
            src={article.article_img_url}
            alt={`Image for ${article.title}`}
          />
        )}

        <div className="article-body">
          <p>{article.body}</p>
        </div>

        {/* Vote section */}
        <main>
          <p>Votes: {voteCount}</p>
          <section>
            <button
              className="upvoteBTN"
              onClick={() => setVoteCount((current) => current + 1)}
            >
              ⬆
            </button>
            <button
              className="downvoteBTN"
              onClick={() => setVoteCount((current) => current - 1)}
            >
              ⬇
            </button>
          </section>
        </main>

        <section>
          <p>{article.comment_count} comments</p>
        </section>
        {/* COMMENT SECTION GOES HERE */}
      </div>
    </>
  );
}
