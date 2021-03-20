import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import LeftInfo from "../mypage/LeftInfo";
import RightInfo from "../mypage/RightInfo";

// services
import auth from "../../services/authService";

// Main
const MyPage = () => {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   setUser(auth.getCurrentUser());
  // }, []);

  // console.log(user);

  // return
  return (
    <Container>
      <LeftInfo />
      <RightInfo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default MyPage;
