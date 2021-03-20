import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import LeftInfo from "../mypage/LeftInfo";
import RightInfo from "../mypage/RightInfo";

// services
import { getUserInfo } from "../../services/userService";

// Main
const MyPage = () => {
  // state
  const [user, setUser] = useState();

  // useEffect
  useEffect(() => {
    async function getUserData() {
      const { data } = await getUserInfo();
      setUser(data);
    }

    // execute
    getUserData();
  }, []);

  // return
  return (
    <Container>
      <LeftInfo user={user} />
      <RightInfo user={user} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default MyPage;
