import { Link } from "react-router-dom";

export default function ViewArticleComments({ article_id }) {
  // Prop passed down from Article
  return (
    <>
      <button>
        {/* Navigates user to the articles page*/}
        <Link to={`/articles/${article_id}/comments`}>
          View all article comments
        </Link>
      </button>
    </>
  );
}
