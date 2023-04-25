import React from "react";
import MovieNavbar from "../Components/Navbar/movieNav_component";

const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      
      <div>{props.children}</div>
    </>
  );
};

export default MovieLayout;
