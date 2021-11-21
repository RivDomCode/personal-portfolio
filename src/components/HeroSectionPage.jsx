import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";

export const HeroSectionPage = () => {
  const { openModal } = useGlobalContext();

  return (
    <div className="hero-section">
      <div className="left-side">
        <div className="hero-left-up">
          <div className="bg-text">
            <div className="left">
              <h1 className="hero-name">RivDomDev</h1>
              <p className="pro">SoftWare Developer</p>
              <button className="projects-btn-container animate__animated animate__heartBeat">
                <NavLink
                  to="/projects"
                  className="projects-btn"
                  exact
                  activeClassName="my-active"
                >
                  Go To My Projects
                </NavLink>
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
        </div>
        <div className="hero-left-down d-flex justify-content-around animate__animated animate__fadeInUp">
          <div className="background box">
            <span className="box-title"> Background</span>
            <button className="btn btn-outline-light" onClick={openModal}>
              Check this out
            </button>
          </div>
          <div className="tech box">
            <span className="box-title"> Tech stack</span>
            <button className="btn btn-outline-light">See More</button>
          </div>
          <div className="projects box">
            <span className="box-title"> Projects</span>
            <button className="btn btn-outline-light">Have a look</button>
          </div>
        </div>
      </div>
    </div>
  );
};
