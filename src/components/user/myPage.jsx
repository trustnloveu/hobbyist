import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import LeftInfo from "../mypage/leftInfo";
import RightInfo from "../mypage/rightInfo";

// services
import { getUserInfo } from "../../services/userService";

// Main
const MyPage = () => {
  // states
  const [userPrivateInfo, setUserPrivateInfo] = useState(); // _id, name, phone, isAdmin, userImage
  const [userGroupInfo, setUserGroupInfo] = useState(); // _id, hostingGroups, joinedGroups

  // useEffect
  useEffect(() => {
    async function loadUserInfo() {
      const { data } = await getUserInfo(); // I'll get token user id with JSON Web Token at the server
      console.log(data);
      setUserPrivateInfo({
        id: data._id,
        name: data.name,
        phone: data.phone,
        email: data.email,
        isAdmin: data.isAdmin,
      });

      setUserGroupInfo({
        id: data._id,
        hostingGroups: data.hostingGroups,
        joinedGroups: data.joinedGroups,
      });
    }

    loadUserInfo();
  }, []);

  // return
  return (
    <Container>
      <LeftInfo userPrivateInfo={userPrivateInfo} />
      <RightInfo userGroupInfo={userGroupInfo} />
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  display: flex;
  margin: 50px auto;
  justify-content: space-evenly;
`;

export default MyPage;
