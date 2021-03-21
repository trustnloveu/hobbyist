import React from "react";
import styled from "styled-components";

// components
import PrivateInfo from "./privateInfo";

// main
const LeftInfo = ({ userPrivateInfo }) => {
  // _id, name, phone, isAdmin, userImage
  console.log(userPrivateInfo);

  // return
  return (
    <Container>
      <ProfileImageCon>{userPrivateInfo && <Image></Image>}</ProfileImageCon>
      <UpperBlock></UpperBlock>
      <LowerBlock>
        {userPrivateInfo && (
          <>
            <PrivateInfo label="이름(닉네임)" data={userPrivateInfo.name} />
            <PrivateInfo label="계정(이메일)" data={userPrivateInfo.email} />
            <PrivateInfo label="연락처" data={userPrivateInfo.phone} />
          </>
        )}
      </LowerBlock>
    </Container>
  );
};

// styled
const Container = styled.div`
  position: relative;
  display: block;
  width: 30%;
  border: 1px solid black;
`;

const UpperBlock = styled.div`
  width: 100%;
  height: 200px;
  background-color: #eee;
  border: 1px solid black;
`;

const LowerBlock = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 22%;
  text-align: center;
  border: 1px solid black;
`;

const ProfileImageCon = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 250px;
  margin-top: 10%;
  border: 1px solid black;
`;

const Image = styled.img`
  margin: auto;
  width: 250px;
  height: 250px;
`;

export default LeftInfo;
