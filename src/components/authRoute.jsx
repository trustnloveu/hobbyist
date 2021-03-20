import React from "react";
import { Route, Redirect } from "react-router-dom";

// main
const AuthRoute = ({ path, user, component: Component, ...rest }) => {
  // return
  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        user ? (
          <Component user={user} />
        ) : (
          <Redirect to="/login" from={props.location} />
        )
      }
    />
  );
};

export default AuthRoute;
