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
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { Projects } from "./Projects";
import Typing from "react-typing-animation";

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
          <Typing>
            <p>I am a software developer</p>
            <p>skilled in problem solving</p>
            <p>with this tech-stack:</p>
          </Typing>
          <div className="aboutMe-leftCard-tech animate__animated animate__rollIn animate__delay-5s">
            <FaHtml5 className="tech-icons" />
            <FaCss3Alt className="tech-icons" />
            <FaSass className="tech-icons" />
            <FaBootstrap className="tech-icons" />
            <SiTailwindcss className="tech-icons" />
            <SiJavascript className="tech-icons" />
            <FaReact className="tech-icons" />
            <FaNode className="tech-icons" />
          </div>
        </div>
        <div className="aboutMe-rightCard ">
          <div className="content animate__animated animate__fadeIn animate__delay-5s">
            <h3>You can reach me here:</h3>
            <p className="linkedin">
              <FaLinkedin /> Linkedin
            </p>
            <p className="github">
              <FaGithubSquare />
              GitHub
            </p>
            <p>
              ...or maybe you wanna say hi:
              <br />
              <a
                href="mailto:rivdomdev@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="email"
              >
                rivdomdev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
