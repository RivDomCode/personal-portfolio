import React from "react";
import { NavLink } from "react-router-dom";
import { Projects } from "./Projects";

export const HeroSectionPage = () => {
  return (
    <div className="hero-section">
      <div className="bg-text">
        <div className="left">
          <h1 className="hero-name">RivDomDev</h1>
          <p className="pro">SoftWare Developer</p>
          <button className="projects-btn-container animate__animated animate__heartBeat">
            <a href="#projects" className="projects-btn">
              Go To My Projects
            </a>
          </button>
          <br />
          <button className="contact-btn-container animate__animated animate__heartBeat">
            <NavLink
              to="/contact"
              className="contact-btn"
              exact
              activeClassName="my-active"
            >
              Let's Talk
            </NavLink>
          </button>
        </div>
        <div className="right"></div>
      </div>
      <Projects />
    </div>
  );
};
