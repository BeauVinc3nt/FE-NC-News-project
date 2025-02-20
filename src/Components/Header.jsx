import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Navigating user to the home page on link click */}
      <h1 className="BeauNewsHomeLink">
        <Link to={"/"}>BeauNews 💬</Link>
      </h1>
    </>
  );
}

