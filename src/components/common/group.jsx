import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GroupModal from "../modal/groupModal";
import filterOptions from "../../objects/filterOptions";

// service
import authService from "./../../services/authService";

// utilites
import { joinGroup, signOutGroup } from "../../utilities/signInOut";
import { convertTime } from "../../utilities/convertTime";

// css & icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

// Group
const Group = ({ data }) => {
  const { regionFilter } = filterOptions; // 장소 key : value

  const [visible, setVisible] = useState(false); // Modal
  const [image, setImage] = useState(); // thumbnail
  const [joined, isJoined] = useState(false);
  const userToken = authService.getCurrentUser(); // user-info from token

  // useEffect > image
  useEffect(() => {
    for (let key in data) {
      if (key === "coverImage") {
        let binary = "";
        let bytes = new Uint8Array(data[key].data);
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        setImage("data:image/png;base64" + binary);
      }
    }
  }, [data]);

  // open modal
  const modalToggle = () => {
    if (userToken) {
      const result = data.members.includes(userToken._id);
      isJoined(result);
    }
    setVisible(!visible);
  };

  // preview map (Planning)
  const openMapPreview = () => {};

  // return
  return (
    <>
      <GroupModal
        visible={visible}
        joined={joined}
        group={data}
        modalToggle={modalToggle}
        joinGroup={() => joinGroup(userToken, data)}
        signOutGroup={() => signOutGroup(userToken, data)}
      />
      <Container>
        <Thumbnail src={image} alt="" />
        <InfoWrapper>
          <TitilCon>
            <Location>{"[" + regionFilter[data.location] + "]"}</Location>
            <Title>{data.title}</Title>
            <HostName>(모임장 '{data.host.name}')</HostName>
            <IconBox>
              <FontAwesomeIcon icon={faMapMarkedAlt} onClick={openMapPreview} />
              <FontAwesomeIcon icon={faSearchPlus} onClick={modalToggle} />
              <FontAwesomeIcon
                icon={faSignInAlt}
                onClick={() => joinGroup(userToken, data)}
              />
            </IconBox>
          </TitilCon>
          <KeywordCon>
            {data.keywords.map((keyword, index) => (
              <Keyword key={index}>{"#" + keyword}</Keyword>
            ))}
          </KeywordCon>
          <DateCon>
            <SubTitle>모임 날짜</SubTitle>
            <Content>{data.meetingDate}</Content>
          </DateCon>
          <TimeCon>
            <SubTitle>모임 시작시간</SubTitle>
            <Content>{convertTime(data.startTime)}</Content>
          </TimeCon>
          <MemberCon>
            <SubTitle>참여자 수</SubTitle>
            <Content>{data.members.length} 명</Content>
          </MemberCon>
        </InfoWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
  padding: 10px;

  &:hover {
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: #eee;
  }
`;

const Thumbnail = styled.img`
  width: 270px;
  height: 180px;
  background-color: khaki;
  border-radius: 10px;
  border: transparent;
  overflow: hidden;
`;

const InfoWrapper = styled.ul`
  list-style: none;
  display: block;
  padding: 0 5px 0 20px;
  margin-top: 0;
  margin-bottom: 0;
  width: calc(100% - 270px);

  & li {
    margin-bottom: 13px;
  }
`;

const TitilCon = styled.li`
  font-size: 18pt;
  position: relative;
`;

const Location = styled.span``;

const Title = styled.span`
  margin-left: 8px;
`;

const HostName = styled.span`
  font-size: medium;
  margin-left: 10px;
  color: darkblue;
  font-weight: 500;
`;

const KeywordCon = styled.li`
  color: darkgrey;
`;

const Keyword = styled.span`
  text-decoration: underline;
  text-underline-position: under;
  margin-right: 10px;
`;

const DateCon = styled.li`
  display: flex;
`;

const TimeCon = styled.li`
  display: flex;
`;

const MemberCon = styled.li`
  display: flex;
`;

const IconBox = styled.div`
  position: absolute;
  right: 10px;
  top: 0;

  & svg {
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    padding: 5px;
    font-size: 16pt;
    margin-left: 6px;

    &:hover {
      background-color: navy;
      transition: 0.5s;
      color: white;
    }
  }
`;

const SubTitle = styled.div`
  width: 130px;
  margin-right: 5px;
`;

const Content = styled.div`
  font-weight: 500;
  margin-right: 5px; ;
`;
export default Group;
