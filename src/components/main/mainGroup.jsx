import React from "react";
import styled from "styled-components";

const MainGroup = ({ data: group }) => {
  console.log(group);
  console.log(group.coverImage);

  const region = "[" + group.address.split(" ")[0].substring(0, 2) + "]";

  const title =
    group.title.length >= 10
      ? group.title.substring(0, 7) + "..."
      : group.title;

  return (
    <Container>
      <CoverImage src={Buffer.from(group.coverImage, "base64")}></CoverImage>
      <GroupNameCon>
        <GroupRegion>{region}</GroupRegion>
        <GroupName>{title}</GroupName>
      </GroupNameCon>
    </Container>
  );
};

const Container = styled.div`
  width: 220px;
  background-color: skyblue;
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: calc(100% - 30px);
`;

const GroupNameCon = styled.div`
  letter-spacing: 1px;
`;

const GroupRegion = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;

const GroupName = styled.span``;

export default MainGroup;
