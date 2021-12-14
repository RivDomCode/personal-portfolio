import React from "react";
import { ContactMePage } from "./ContactMePage";
import { HeroSectionPage } from "./HeroSectionPage";
import { Projects } from "./Projects";

export const HomePage = () => {
  return (
    <div className="home">
      <HeroSectionPage />
      <Projects />
      <ContactMePage />
    </div>
  );
};