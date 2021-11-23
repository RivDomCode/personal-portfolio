import React from "react";
import { HeroSectionPage } from "./HeroSectionPage";
import { AsideComponent } from "./AsideComponent";

export const Home = () => {
  return (
    <div className="home">
      <AsideComponent />
      <HeroSectionPage />
    </div>
  );
};
