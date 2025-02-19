import { NavLink } from "react-router-dom";
import Beaunews from "../assets/";

export default function NavBar({ activeUser }) {
    const NavLinks = [
      {
        src: BeauNews,
        to: "/api",
        label: "Home",
      },
      {
        src: ,
        to: "/api/articles",
        label: "View all articles",
      },
      {
        src: ,
        to: "",
        label: "Search article",
      },
      {
        src: ProfileIcon,
        to: `/users/${activeUser}`,
        label: "My Profile",
      },
      {
        src: SellersIcon,
        to: "/users",
        label: "View all sellers",
      },
    ];

    return (
      <nav className="navBar">
        <ul>
          {NavLinks.map((icon) => {
            return (
              <li key={icon.label}>
                <NavLink to={icon.to}>
                  <img className="navBarIcons" src={icon.src} />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
  