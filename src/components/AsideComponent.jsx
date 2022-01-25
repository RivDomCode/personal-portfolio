import React from "react";
import {
  FaTimes,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";

export const AsideComponent = () => {
  //Manage menu
  const { isAsideOpen, closeAside } = useGlobalContext();

  //To change year automatically
  let today = new Date();
  let currentYear = today.getFullYear();

  return (
    <div
      className={`${
        isAsideOpen ? "aside-overlay show-aside" : "aside-overlay"
      } `}
    >
      <div className="aside-container">
        <div className="left-aside-container" onClick={closeAside}></div>
        <div className="right-aside-container ">
          <div className="menu-links-left">
            <div className="top-menu">
              <div className="close-btn text-center" onClick={closeAside}>
                <FaTimes />
              </div>
              <NavLink
                to="/"
                className="nav-link long"
                exact
                onClick={closeAside}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link long"
                exact
                onClick={closeAside}
              >
                More About Me
              </NavLink>
              <NavLink
                to="/landing"
                className="nav-link long "
                exact
                onClick={closeAside}
              >
                Landing Pages
              </NavLink>
              <a
                href="https://rivdomblog.hashnode.dev/"
                className="nav-link animate__animated animate__fadeInRight"
                target="_blank"
                rel="noreferrer"
                onClick={closeAside}
              >
                Blog
              </a>
            </div>
          </div>
          <div className="bottom-container">
            <div className="bottom-social-container d-flex justify-content-around">
              <div className="icon-container">
                <a
                  href="https://github.com/RivDomCode"
                  target="_blank"
                  className="bottom-social"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>

              <div className="icon-container">
                {" "}
                <a
                  href="https://www.linkedin.com/in/pedrorivasdominguez/"
                  target="_blank"
                  className="bottom-social"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="icon-container">
                <a
                  href="https://twitter.com/RivDomDev"
                  target="_blank"
                  className="bottom-social"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="sign-container d-flex justify-content-center">
              <p className="made">
                Made With <FaHeart className="heart" /> by RivDom {currentYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
