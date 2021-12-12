import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context/AppContext";
import logo from "../Images/logo2.jpg";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { openAside } = useGlobalContext();

  return (
    <nav className="navbar navbar-expand " id="navbar">
      <div className="container-fluid">
        <div className="logo d-flex">
          {/* <img src={logo} alt="" className="logo-img" /> */}
          <div className="logo d-flex">
            <NavLink to="/" className="name">
              <h1 className="name">RivDom</h1>
            </NavLink>
          </div>
        </div>
      </div>
      <AiOutlineMenu className="menu-btn-bar" onClick={openAside} />
    </nav>
  );
};
