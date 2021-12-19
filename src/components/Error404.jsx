import React from "react";
import { VscBracketError } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="error">
      <h1>
        4<span className="letter-e">0</span>4
      </h1>
      <h1>Error! Place not found!</h1>

      <VscBracketError className="error-icon d-flex" />
      <div className="back-home">
        <button className="projects-btn-container">
          <NavLink to="/" className="projects-btn">
            Back to Main!
          </NavLink>
        </button>
      </div>
    </div>
  );
};
