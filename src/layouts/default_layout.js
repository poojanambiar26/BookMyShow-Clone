import React from "react";
import Navbar from "../Components/Navbar/navbar_component";
const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      {/* <div>{props.children}</div> */}
    </>
  );
};

export default DefaultLayout;
