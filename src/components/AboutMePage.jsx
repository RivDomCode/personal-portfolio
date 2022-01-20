import React from "react";

export const AboutMePage = () => {
  return (
    <section className="about">
      <h1>
        Mor<span className="letter-e">e</span> About me
      </h1>
      <div className="about-main-container">
        <div className="about-container">
          <h2>Who am I?</h2>
          <ul>
            <li>
              I am Software Developer from Spain, Bootcamp Grad and longlife
              learner.
            </li>
            <li>
              I am problem solver oriented guy who believes the language is just
              a tool to get a job done...just try to choose the right one for
              each project!
            </li>
          </ul>
          <h2>What do i do?</h2>
          <ul>
            <li>Landing Pages</li>
            <li>Web Apps</li>
            <li>Mobile Apps</li>
            <li>Web Design</li>
            <li>SEO</li>
            <li>...</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
