import React from "react";
import { NavLink } from "react-router-dom";

export const Aside = () => {
  return (
    <aside>
      <NavLink
        to="/"
        className="nav-link animate__animated animate__slideInLeft"
        exact
        activeClassName="my-active"
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        className="nav-link animate__animated animate__bounce"
        exact
        activeClassName="my-active"
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-link animate__animated animate__jackInTheBox"
        exact
        activeClassName="my-active"
      >
        Contact
      </NavLink>
      <NavLink
        to="/blog"
        className="nav-link animate__animated animate__slideInRight"
        exact
        activeClassName="my-active"
      >
        Blog
      </NavLink>
    </aside>
  );
};
