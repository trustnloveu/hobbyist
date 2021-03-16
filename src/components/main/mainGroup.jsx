import React from "react";
import styled from "styled-components";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MainGroup = ({ data: group }) => {
  const region =
    group.address.split(" ")[0] + " " + group.address.split(" ")[1];

  const title =
    group.title.length >= 10
      ? group.title.substring(0, 10) + "..."
      : group.title;

  const member = group.members.length + "명";

  return (
    <Container>
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
  );
};

const Container = styled.div`
  cursor: pointer;
  width: 220px;
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;

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
  height: 210px;
  overflow: hidden;
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
  font-size: 15pt;
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

export default MainGroup;
