import React from "react";
import { ContactMePage } from "./ContactMePage";
import { Footer } from "./Footer";
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
