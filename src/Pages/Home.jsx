import { useState } from "react";

export default function Home() {
  const [voteCount, setVoteCount] = useState(0); // Initializing vote count to 0 on app load.

  return (
    <>
      <div className="card">
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
      </div>
    </>
  );
}

// Solve why /api isn't loading to home. Moved div card section from 'app.jsx' => 'home'
