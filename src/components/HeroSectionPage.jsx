import React from "react";
import retro from "../Images/retro.jpg";

export const HeroSectionPage = () => {
  return (
    <div className="hero-section">
      <div className="left-side">
        <div className="hero-left-up">
          <div className="bg-image"></div>
          <div className="bg-text">
            <h1 className="name">Pedro Rivas</h1>
            <p className="pro">SoftWare Developer</p>
          </div>
        </div>
        <div className="hero-left-down d-flex justify-content-around hero-left-right animate__animated animate__slideInUp">
          <div className="background box">Background</div>
          <div className="tech box">Tech stack</div>
          <div className="projects box">Go to Projects</div>
        </div>
      </div>

      <div className="hero-left-right animate__animated animate__slideInRight">
        <h2 className="name">About Me</h2>
      </div>
    </div>
  );
};
