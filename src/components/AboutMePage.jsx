import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const AboutMePage = () => {
  return (
    <section className="about">
      <h1>
        Mor<span className="letter-e">e</span> About me
      </h1>
      <div className="about-main-container">
        <div className="about-container">
          <h2>Who am I?</h2>
          <p className="whoAmI">
            I am Software Developer from Spain, Bootcamp Grad and longlife
            learner. I speak spanish and english because I was living in the UK
            for nearly 4 years. I am a problem solving oriented guy who believes
            the language/framework is just a tool to get a job done.
          </p>
          <h2>What do i do?</h2>
          <ul>
            <li>Landing Pages</li>
            <li>Web Apps</li>
            <li>Mobile Apps</li>
            <li>Web Design</li>
            <li>SEO</li>
            <li>...</li>
          </ul>
          <h2>Wanna know more?</h2>
          <ul className="wanna-list">
            <li>
              <a
                href="https://www.linkedin.com/in/pedrorivasdominguez/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> Linkedin
              </a>
            </li>
            <li className="github">
              <a
                href="https://github.com/RivDomCode"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare /> GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:rivdomdev@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="email"
              >
                rivdomdev@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
