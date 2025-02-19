import { useState } from "react";
import "./App.css";

function App() {
  const [voteCount, setVoteCount] = useState(0); // Initializing vote count to 0 on app load.
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Setting current page to home.

  return (
    <>
      <div className="card">
        <h1>BeauNews 💬 </h1>

        <div className="upvoteBox">
          <button onClick={() => setVoteCount((voteCount) => voteCount + 1)}>
            ⬆ {voteCount}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
