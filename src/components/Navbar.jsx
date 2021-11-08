import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand ">
      <div className="container-fluid">
        <div className="logo">
          <h3 className="name animate__animated animate__heartBeat">
            P<span className="letter">edr</span>o R
            <span className="letter">iva</span>s
            <i className="fab fa-angellist letter"></i>
          </h3>
        </div>
      </div>
      <div className="navbar-nav animate__animated animate_zoomIn">
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
      </div>
    </nav>
  );
};
