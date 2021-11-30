import React from "react";

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
        >
          Aqui va
        </div>
        <div className="project-card-top-text">
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            excepturi ipsam minus inventore id assumenda doloribus, eos
            voluptatibus magni nam rem, consequuntur consectetur, voluptate
            nisi. Odit corrupti aperiam, facilis sapiente excepturi voluptas
            mollitia ducimus, quas optio deleniti praesentium obcaecati dolore.
            Obcaecati numquam et eos totam non vero dolorum voluptate nobis!
          </p>
          <button className="visit-btn">Visit</button>
          <button className="more-info-btn">Read more</button>
        </div>
      </div>
      Tech Stack used
      <div className="project-card-bottom"></div>
    </div>
  );
};
