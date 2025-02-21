import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ArticleList from "./Components/ArticleList.jsx";
import Article from "./Pages/Article.jsx";
import Header from "./Components/Header.jsx";
import ArticleCommentsPage from "./Pages/ArticleCommentsPage.jsx";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("tickle122"); // Setting to an existing user in the db, or use 'null'

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
        <Route
          path="/articles/:article_id/comments"
          element={<ArticleCommentsPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
