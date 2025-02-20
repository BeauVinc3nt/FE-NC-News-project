import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const [voteCount, setVoteCount] = useState(0); // Initializing vote count to 0 on app load.
  const [article, setArticle] = useState();

  const params = useParams(); // Getting hold of article_id parameter
  console.log(useParams);
  return (
    <>
      <p> Article {params.article_id}</p>

      <div className="voteSection">
        Votes: {voteCount}
        <div className="upvoteBox">
          <button onClick={() => setVoteCount((voteCount) => voteCount + 1)}>
            ⬆
          </button>
        </div>
        <div className="downvoteBox">
          <button onClick={() => setVoteCount((voteCount) => voteCount - 1)}>
            ⬇
          </button>
        </div>
      </div>
    </>
  );
}
