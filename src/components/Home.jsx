import React from "react";
import { HeroSectionPage } from "./HeroSectionPage";
import { AsideComponent } from "./AsideComponent";
import { Projects } from "./Projects";

export const Home = () => {
  return (
    <div className="home">
      <AsideComponent />
      <HeroSectionPage />
      <Projects />
    </div>
  );
};
