import React from "react";
import { Route, Redirect } from "react-router-dom";

// main
const AuthRoute = ({ path, user, component: Component, ...rest }) => {
  console.log(user);
  // return
  return (
    <Route
      {...rest}
      path={path}
      render={() =>
        user ? <Component user={user} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthRoute;
