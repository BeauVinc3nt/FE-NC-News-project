import { useState } from "react";
import { symbols } from "../assets/symbols";
import ViewAllArticles from "../Components/ViewAllArticles";

export default function Home() {
  return (
    <>
      <p> Welcome to BeauNews!</p>
      <p> It's quiet around here {symbols.emptyArticlesMsg}</p>
      <p> We have loads of articles for you to search!</p>
      <ViewAllArticles />
    </>
  );
}

// Solve why /api isn't loading to home. Moved div card section from 'app.jsx' => 'home'
