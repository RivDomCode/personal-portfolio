import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNode,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase } from "react-icons/si";
import { Projects } from "./Projects";

export const HeroSectionPage = () => {
  return (
    <div className="hero-section">
      <div className="bg-text">
        <div className="hero-section-top">
          <h1 className="hero-name">RivDom</h1>
          <p className="pro">Software Developer</p>
          <button className="projects-btn-container animate__animated animate__fadeInLeft">
            <a href="#projects" className="projects-btn">
              Go To My Projects
            </a>
          </button>
          <br />
          <button className="contact-btn-container animate__animated animate__fadeInLeft">
            <NavLink to="/contact" className="contact-btn" exact>
              Let's Talk
            </NavLink>
          </button>
        </div>
      </div>
      <div className="hero-section-aboutMe">
        <div className="aboutMe-leftCard">
          <p>I am a software developer</p>
          <p>skilled in problem solving</p>
          <p>with this tech-stack:</p>
          <div className="aboutMe-leftCard-tech">
            <FaHtml5 /> <FaCss3Alt />
            <FaSass />
            <FaBootstrap />
            <SiTailwindcss />
            <SiJavascript />
            <FaReact />
            <SiFirebase />
            <FaNode />
          </div>
        </div>
        <div className="aboutMe-rightCard">
          <h3>You can reach me here:</h3>
          <span className="linkedin">
            <FaLinkedin />
          </span>
          <span className="github">
            <FaGithubSquare />
          </span>
          <p>
            ...or maybe you wanna say hi:{" "}
            <a
              href="mailto:rivdomdev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              rivdomdev@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Projects />
    </div>
  );
};
