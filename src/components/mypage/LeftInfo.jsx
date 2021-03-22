import React from "react";
import styled from "styled-components";

// components
import PrivateInfo from "./privateInfo";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

// default image
import defaultPhoto from "../../images/defaultPhoto.jpg";

// main
const LeftInfo = ({ userPrivateInfo }) => {
  // _id, name, phone, isAdmin, userImage
  // console.log(userPrivateInfo);

  // return
  return (
    <Container>
      <ProfileImageCon>
        {userPrivateInfo && (
          <ImageLabel>
            <Image src={defaultPhoto} />
          </ImageLabel>
        )}
      </ProfileImageCon>
      <UpperBlock></UpperBlock>
      <LowerBlock>
        <EditButtonCon>
          <FontAwesomeIcon icon={faCog} />
        </EditButtonCon>
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
`;

const UpperBlock = styled.div`
  width: 100%;
  height: 200px;
  background-color: #eee;
`;

const LowerBlock = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  padding-top: 22%;
  text-align: center;
  background-color: #cca8e9;
`;
// background-color: #cadefc;

const ProfileImageCon = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 250px;
  margin-top: 10%;
`;
// background-color: #defcf9;

const ImageLabel = styled.label``;

const Image = styled.img`
  margin: auto;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: transparent;
  z-index: 10;
`;

const EditButtonCon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 15pt;
`;

export default LeftInfo;
