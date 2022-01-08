import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  const projects = [1, 2, 3];

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">
        Portf<span className="letter-e">o</span>lio
      </h1>
      <div>
        {projects.map((value) => (
          <Project />
        ))}
      </div>
    </section>
  );
};
