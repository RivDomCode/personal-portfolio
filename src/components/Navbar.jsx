import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <div className="logo">
          <h3 className="name">
            P<span className="letter">e</span>dro Riv
            <span className="letter">a</span>s
            <i className="fab fa-angellist"></i>
          </h3>
        </div>
      </div>
      <div className="navbar-nav">
        <NavLink to="/" className="nav-link" exact activeClassName="my-active">
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className="nav-link"
          exact
          activeClassName="my-active"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          exact
          activeClassName="my-active"
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className="nav-link"
          exact
          activeClassName="my-active"
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};
