import React from "react";
import { ContactMePage } from "./ContactMePage";
import { HeroSectionPage } from "./HeroSectionPage";
import { Projects } from "./Projects";

export const Home = () => {
  return (
    <>
      <HeroSectionPage />
      <Projects />
      <ContactMePage />
    </>
  );
};
