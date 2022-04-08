import React from "react";
import { useEffect } from "react/cjs/react.development";
import { ContactMePage } from "./ContactMePage";
import { HeroSectionPage } from "./HeroSectionPage";
import { Projects } from "./Projects";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

export const Home = () => {
  // useEffect(() => {
  //   const MySwal = withReactContent(Swal);
  //   return MySwal.fire({
  //     icon: "warning",
  //     title: "Currently this porfolio is being updated...",
  //     text: "Not all sections are available, but you can enjoy most of them!",
  //     confirmButtonColor: "	#2e74d6",
  //   });
  // }, []);

  return (
    <>
      <HeroSectionPage />
      <Projects />
      <ContactMePage />
    </>
  );
};
