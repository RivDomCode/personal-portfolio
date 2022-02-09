import React from "react";

export const Footer = () => {
  let today = new Date();
  let currentYear = today.getFullYear();
  return (
    <footer className="footer-container">
      <hr />
      <p> © Pedro Rivas {currentYear} Portfolio Website </p>
    </footer>
  );
};
