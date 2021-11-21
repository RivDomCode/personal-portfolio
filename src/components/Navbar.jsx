import React from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand ">
      <div className="container-fluid">
        <div className="logo">
          <h3 className="name animate__animated animate__heartBeat">
            Pedro Rivas
            <i className="fab fa-angellist letter"></i>
          </h3>
        </div>
      </div>
      <div className="menu-btn-container">
        <div className="menu-btn ">
          <FaBars />
        </div>
      </div>
    </nav>
  );
};
