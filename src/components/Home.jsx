import React from "react";
import { HeroSectionPage } from "./HeroSectionPage";
import { ModalComponent } from "./ModalComponent";

export const Home = () => {
  return (
    <div className="home">
      <ModalComponent />
      <HeroSectionPage />
    </div>
  );
};
