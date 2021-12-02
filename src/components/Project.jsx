import React from "react";
import { SiHtml5, SiSass, SiCss3, SiReact, SiFirebase } from "react-icons/si";

export const Project = () => {
  return (
    <div className="project-card">
      <div className="project-card-top">
        <div
          className="project-card-top-img"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_960_720.jpg)",
          }}
        ></div>
        <div className="project-card-top-text">
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            excepturi ipsam minus inventore id assumenda doloribus, eos
            voluptatibus magni nam rem, consequuntur consectetur, voluptate
            nisi. Odit corrupti aperiam, facilis sapiente excepturi voluptas
            dolore. Obcaecati numquam et eos totam non vero dolorum voluptate
            nobis!
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
  );
};
