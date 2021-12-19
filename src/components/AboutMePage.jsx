import React from "react";

export const AboutMePage = () => {
  return (
    <section className="about">
      <h1>
        Mor<span className="letter-e">e</span> About me
      </h1>
      <div className="about-main-container">
        <div className="about-container-left">
          <h3>Who am I?</h3>
          <ul>
            <li>Software Developer from Spain</li>
            <li>Bootcamp Grad</li>
            <li>Spanish and English speaker</li>
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
          <li>Mobile apps</li>
          <h3>What tools do I use?</h3>
          <p>Just the one nedeed to get job done!</p>
        </div>
      </div>
    </section>
  );
};
