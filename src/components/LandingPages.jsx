import React from "react";
import { IoConstructOutline } from "react-icons/io5";

export const LandingPages = () => {
  return (
    <section className="landing">
      <h1>
        Landing Pag<span className="letter-e">e</span>s
      </h1>
      <div className="under-construction">
        <IoConstructOutline className="construct-icon" />
        <p>Sorry for the inconvenience...</p>
        <p> ...but this section is under construction</p>
      </div>
    </section>
  );
};
