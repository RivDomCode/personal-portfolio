import React, { useEffect } from "react";
import { ContactMePage } from "./ContactMePage";
import { HeroSectionPage } from "./HeroSectionPage";
import { Projects } from "./Projects";
import Swal from "sweetalert2";

export const Home = () => {
  useEffect(() => {
    Swal.fire({
      icon: "warning",
      title: "This porfolio is deprecated...",
      text: "Not all sections are available and contact form is not working anymore....",
      confirmButtonColor: "	#2e74d6",
    });
  }, []);

  return (
    <>
      <HeroSectionPage />
      <Projects />
      <ContactMePage />
    </>
  );
};
