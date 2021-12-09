import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">Portfolio</h1>
      <div>
        {projects.map((value) => (
          <Project />
        ))}
      </div>
    </section>
  );
};
