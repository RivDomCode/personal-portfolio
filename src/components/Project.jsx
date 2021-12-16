import React from "react";
import { SiHtml5, SiSass, SiCss3, SiReact, SiFirebase } from "react-icons/si";
import Fade from "react-reveal/Zoom";

export const Project = () => {
  return (
    <>
      <Fade>
        <div className="project-card">
          <div className="project-card-top">
            <div className="project-card-top-img">
              <img
                src="https://cdn.pixabay.com/photo/2019/04/07/08/56/network-4109223_960_720.jpg"
                alt=""
              />
            </div>
            <div className="project-card-top-text">
              <h3>Project Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                excepturi ipsam minus inventore id assumenda doloribus, eos
                voluptatibus magni nam rem, consequuntur consectetur, voluptate
                nisi. Odit corrupti aperiam, facilis sapiente excepturi voluptas
                dolore. Obcaecati numquam et eos totam non vero dolorum
                voluptate nobis!
              </p>
              <p className="icons">
                <SiHtml5 className="icon" />
                <SiSass className="icon" />
                <SiCss3 className="icon" />
                <SiReact className="icon" />
                <SiFirebase className="icon" />
              </p>
              <div className="project-card-top-btn-container">
                <button className="visit-btn">Go to Project</button>
                <button className="more-info-btn">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
