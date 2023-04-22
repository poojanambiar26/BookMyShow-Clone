import React from "react";
import Navbar from "../Components/Navbar/navbar_component";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel";
const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousel/>
      <div>{props.children}</div>
    </>
  );
};

export default DefaultLayout;
