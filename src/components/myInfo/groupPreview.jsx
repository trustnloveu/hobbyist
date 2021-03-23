import React, { useState } from "react";
import styled from "styled-components";

// components
import GroupModal from "../modal/groupModal";

// services
import authService from "../../services/authService";
import { joinGroup, signOutGroup } from "../../utilities/signInOut";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Main
const GroupPreview = ({ data: group }) => {
  // states
  const [visible, setVisible] = useState(false); // Modal
  const [joined, isJoined] = useState(false);

  // user token
  const userToken = authService.getCurrentUser();

  // region info
  const region =
    group.address.split(" ")[0] + " " + group.address.split(" ")[1];

  // shorten group title if it's too long
  const title =
    group.title.length >= 8 ? group.title.substring(0, 8) + "..." : group.title;

  // member info
  const member = group.members.length + "명";

  // open modal
  const modalToggle = () => {
    if (userToken) {
      const result = group.members.includes(userToken._id);
      isJoined(result);
    }
    setVisible(!visible);
  };

  // return
  return (
    <>
      <GroupModal
        visible={visible}
        joined={joined}
        group={group}
        modalToggle={modalToggle}
        joinGroup={() => joinGroup(userToken, group)}
        signOutGroup={() => signOutGroup(userToken, group)}
      />
      <Container onClick={modalToggle}>
        <CoverImageCon>
          <Image
            src={Buffer.from(group.coverImage, "base64")}
            alt="등록된 그룹이미지"
          />
        </CoverImageCon>
        <GroupNameCon>
          <GroupRegion>{region}</GroupRegion>
          <GroupName>{title}</GroupName>
          <GroupMemberCon>
            <MemberIconCon>
              <FontAwesomeIcon icon={faUser} color="grey" />
            </MemberIconCon>
            <MemberNumber>{member}</MemberNumber>
          </GroupMemberCon>
        </GroupNameCon>
      </Container>
    </>
  );
};

const Container = styled.div`
  cursor: pointer;
  width: 170px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;

  &: hover {
    transition: all 0.5s;
    background-color: #a1eafb;
    border-color: #a1eafb;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
`;

const CoverImageCon = styled.div`
  overflow: hidden;
  height: 150px;
  display: flex;
  align-items: center;
  background-color: #eee;
`;

const Image = styled.img`
  width: 100%;
`;

const GroupNameCon = styled.div`
  padding: 15px 5px 10px 5px;
  letter-spacing: 1px;
`;

const GroupRegion = styled.div``;

const GroupName = styled.div`
  font-weight: 600;
  font-size: 13pt;
  margin: 10px 0px;
`;

const GroupMemberCon = styled.div`
  display: flex;
`;

const MemberIconCon = styled.div`
  align-self: center;
`;

const MemberNumber = styled.div`
  font-size: 13pt;
  margin-left: 8px;
`;

export default GroupPreview;
