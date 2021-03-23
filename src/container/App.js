// 3rd party libraries
import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

// user components
import NavBar from "../components/navBar";
import Home from "../components/home";
import Categories from "../components/category/categories";
import Login from "../components/user/login";
import Logout from "../components/user/logout";
import Register from "../components/user/register";
import MyPage from "../components/user/myPage";
import CategoryBoard from "../components/category/categoryBoard";
import NewGroup from "./../components/group/newGroup";
import Group from "../components/group/group";
// import Modal from "./components/modal";

// Routes
import AuthRoute from "../components/authRoute";

// module
import auth from "../services/authService";

// css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// App
const App = () => {
  // user status
  const [user, setUser] = useState();

  // useEffect
  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  // return
  return (
    <React.Fragment>
      <ToastContainer />
      <Container>
        <NavBar user={user} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/categories/:id" component={CategoryBoard} />
          <Route path="/categories" component={Categories} />
          <AuthRoute path="/createNewGroup" component={NewGroup} user={user} />
          <Route path="/group/:id" component={Group} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <AuthRoute path="/myPage" component={MyPage} />
          <Route path="/register" component={Register} />
          <Redirect from="/" exatc to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.main`
  &,
  & * {
    box-sizing: border-box;
  }

  & a {
    text-decoration: none;
  }
`;

export default App;
