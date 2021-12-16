import React from "react";

export const AboutMePage = () => {
  return (
    <section className="about">
      <h1>
        Mor<span className="letter-e">e</span> About me
      </h1>
      <div className="about-main-container">
        <div className="about-container-left">
          <h3>FACTS</h3>
          <ul>
            <li>Software Developer from Spain</li>
            <li>Bootcamp Grad</li>
            <li>4 years living in Scotland</li>
            <li>Quality, Environment and H&S background</li>
            <li>Lifelong learner</li>
            <li>Organic Agriculture</li>
            <li>...</li>
            <li></li>
          </ul>
        </div>
        <div className="about-container-right">
          <h3>What do I do?</h3>
          <li>Web applications</li>
          <li>Web design</li>
          <li>Landing pages</li>
          <li>SEO</li>
          <li>...</li>
        </div>
      </div>
    </section>
  );
};
