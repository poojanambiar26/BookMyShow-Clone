import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/default_layout.js";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
    
  );
};

export default DefaultHOC;
