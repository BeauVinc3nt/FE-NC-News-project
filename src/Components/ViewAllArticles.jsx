import { Link } from "react-router-dom";

export default function ViewAllArticles() {
  return (
    <>
      <button>
        {/* Navigates user to the articles page*/}
        <Link to="/articles"> View all articles</Link>
      </button>
    </>
  );
}
