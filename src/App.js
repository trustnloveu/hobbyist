// 3rd party libraries
import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// user components
import NavBar from "./components/navBar";
import Home from "./components/home";
import Categories from "./components/categories";
import Login from "./components/user/login";
import Logout from "./components/user/logout";
import Register from "./components/user/register";
import MyPage from "./components/user/myPage";

// module
import auth from "./services/authService";

// css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// user info from the server
// const user = auth.getCurrentUser();

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/categories" component={Categories} />
          <Route path="/register" component={Register} />
          <Route path="/myPage" component={MyPage} />
          <Redirect from="/" exatc to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
