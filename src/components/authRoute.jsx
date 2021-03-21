import React from "react";
import { Route, Redirect } from "react-router-dom";

// get user token
import auth from "../services/authService";

// main
const AuthRoute = ({ path, user, component: Component, ...rest }) => {
  // return
  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        auth.getCurrentUser() ? (
          <Component user={user} />
        ) : (
          <Redirect to="/login" from={props.location} />
        )
      }
    />
  );
};

export default AuthRoute;
