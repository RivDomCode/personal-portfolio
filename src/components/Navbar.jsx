import React from "react";
import { FaBars } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { useGlobalContext } from "../context/AppContext";
import logo from "../Images/logo.jpg";

export const Navbar = () => {
  const { openAside } = useGlobalContext();

  return (
    <nav className="navbar navbar-expand ">
      <div className="container-fluid">
        <div className="logo d-flex">
          <img src={logo} alt="" className="logo-img" />
          <div className="logo d-flex">
            <h3 className="name animate__animated animate__heartBeat">
              RivDomDev
            </h3>
            <VscJson className="json" />
          </div>
        </div>
      </div>
      <div className="menu-btn-container">
        <FaBars className="menu-btn" onClick={openAside} />
      </div>
    </nav>
  );
};
