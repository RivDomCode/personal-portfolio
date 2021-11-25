import React from "react";
import { HeroSectionPage } from "./HeroSectionPage";
import { Projects } from "./Projects";

export const Home = () => {
  return (
    <div className="home">
      <HeroSectionPage />
      <Projects />
    </div>
  );
};
