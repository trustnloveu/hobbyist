import React from "react";
import styled from "styled-components";

// Main
const RightInfo = ({ userGroupInfo }) => {
  // _id, hostingGroups, joinedGroups
  console.log(userGroupInfo);

  return <Container>{userGroupInfo && <div>1</div>}</Container>;
};

const Container = styled.div`
  width: 70%;
`;

export default RightInfo;
