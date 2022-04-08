import React from "react";
import { useEffect } from "react/cjs/react.development";
import { ContactMePage } from "./ContactMePage";
import { HeroSectionPage } from "./HeroSectionPage";
import { Projects } from "./Projects";
import Swal from "sweetalert2";

export const Home = () => {
  useEffect(() => {
    Swal.fire({
      icon: "warning",
      title: "Currently this porfolio is being updated...",
      text: "Not all sections are available, but you can enjoy most of them!",
      confirmButtonColor: "	#2e74d6",
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <HeroSectionPage />
      <Projects />
      <ContactMePage />
    </>
  );
};
