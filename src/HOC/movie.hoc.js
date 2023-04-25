import React from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../layouts/movie_layout";

const MovieHOC = ({ component: Component, ...rest }) => {
  return (
    
    <Route
      {...rest}
      render={(props) => (
        <MovieLayout>
          <Component {...props} />
        </MovieLayout>
      )}
    />
    
  );
};

export default MovieHOC;
