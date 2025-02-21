import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import CommentCard from "../Components/CommentCard";
import { getCommentsByArticleID } from "../../APIRequests";
import ArticleCard from "../Components/ArticleCard";
import { symbols } from "../assets/symbols";

export default function ArticleCommentsPage() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCommentsByArticleID(article_id)
      .then((commentsData) => {
        console.log(commentsData); // Comments loaded
        setComments(commentsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "ERROR: The articles comments have failed to load! We are fixing this🔧"
        );
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;
  if (error) return <p> {error} </p>;
  if (!comments)
    return (
      <p>
        No comments found {symbols.emptyComments} Be the first to create a
        comment
      </p>
    );

  return (
    <>
      <Header />
      <div className="article-comments-container">
        <h2>Comments:</h2>
        <div className="comments-list">
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}
