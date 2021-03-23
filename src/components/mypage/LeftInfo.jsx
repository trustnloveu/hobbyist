import React from "react";
import styled from "styled-components";

// components
import PrivateInfo from "./privateInfo";
import Loader from "../common/loader/loader";

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
        <ImageLabel htmlFor="profilePhoto">
          {!userPrivateInfo && <Image src={defaultPhoto} />}
          {userPrivateInfo && <Image src={defaultPhoto} />}
          <ImageInput id="profilePhoto" type="file" />
        </ImageLabel>
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
        {!userPrivateInfo && <Loader type="balls" color="navy" width="50px" />}
      </LowerBlock>
    </Container>
  );
};

// styled
const Container = styled.div`
  position: relative;
  display: block;
  width: 30%;
  overflow: hidden;
  border: 1px solid #95e1d3;
  border-radius: 10px;

  &:hover {
    transition: all 1s;
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  }
`;
// box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
// transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

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

const ImageLabel = styled.label`
  margin: auto;
  cursor: pointer;
  z-index: 10;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: transparent;
`;

const ImageInput = styled.input`
  display: none;
`;

const EditButtonCon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 15pt;
`;

export default LeftInfo;
