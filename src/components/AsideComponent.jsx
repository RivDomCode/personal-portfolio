import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";

export const AsideComponent = () => {
  const { isAsideOpen, closeAside } = useGlobalContext();

  return (
    <div
      className={`${
        isAsideOpen ? "aside-overlay show-aside" : "aside-overlay"
      } `}
    >
      <div className="aside-container">
        <div className="left-aside-container"></div>
        <div className="right-aside-container ">
          <div className="menu-links-left d-flex justify-content-between">
            <div className="top-menu">
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
            <div className="close-btn" onClick={closeAside}>
              <FaTimes />
            </div>
          </div>
          <div className="bottom-social">SOCIAL</div>
        </div>
      </div>
    </div>
  );
};
