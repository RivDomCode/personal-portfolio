import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";
import finalLogo from "../Images/logo other version.jpg";

export const Navbar = () => {
  const { openAside } = useGlobalContext();

  return (
    <nav className="navbar navbar-expand " id="navbar">
      <div className="container-fluid">
        <div className="logo d-flex">
          <div className="logo d-flex">
            <NavLink to="/" className="name">
              <img src={finalLogo} alt="logo" className="name__logo" />
            </NavLink>
          </div>
        </div>
      </div>
      <AiOutlineMenu className="menu-btn-bar" onClick={openAside} />
    </nav>
  );
};
