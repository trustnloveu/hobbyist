import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import MyHostingGroup from "./myHostingGroup";
import MyJoinedGroup from "./myJoinedGroup";

// Main
const RightInfo = ({ userGroupInfo }) => {
  // _id, hostingGroups, joinedGroups
  console.log(userGroupInfo);

  // state
  const [hostList, setHostList] = useState();
  const [joinList, setJoinList] = useState();

  const [hostPage, setHostPage] = useState(0);
  const [joinPage, setJoinPage] = useState(0);

  // useEffect
  useEffect(() => {
    // load hosting group index
    function loadHostList(pageNum) {
      const idArray = [];

      for (let i = 0; i < 4; i++) {
        const id = userGroupInfo.hostingGroups[pageNum * 4 + i];
        idArray.push(id);
      }

      setHostList(idArray);
    }

    // load joined group index
    function loadJoinList(pageNum) {
      const idArray = [];

      for (let i = 0; i < 4; i++) {
        const id = userGroupInfo.joinedGroups[pageNum * 4 + i];
        idArray.push(id);
      }

      setJoinList(idArray);
    }

    // execute
    if (userGroupInfo) {
      loadHostList(hostPage);
      loadJoinList(joinPage);
    }
  }, [userGroupInfo, hostPage, joinPage]);

  // index & i
  // 0   0  1  2  3
  // 1   4  5  6  7
  // 2   8  9 10 11
  // 3  12 13 14 15
  // 4  16 17 18 19

  // index * 4 + i

  // return
  return (
    <Container>
      <UpperBlock>
        <HostingGroup>
          <Title>
            호스팅하고 있는 그룹
            {hostList && "(" + userGroupInfo.hostingGroups.length + ")"}
            <ViewAll>전체보기</ViewAll>
          </Title>
          <GroupList>
            {hostList &&
              hostList.map((groupId, index) => (
                <MyHostingGroup key={index} id={groupId} />
              ))}
          </GroupList>
        </HostingGroup>
      </UpperBlock>
      <LowerBlock>
        <JoinedGroup>
          <Title>
            현재 참여중인 그룹
            {hostList && "(" + userGroupInfo.joinedGroups.length + ")"}
            <ViewAll>전체보기</ViewAll>
          </Title>
          <GroupList>
            {joinList &&
              joinList.map((groupId, index) => (
                <MyJoinedGroup key={index} id={groupId} />
              ))}
          </GroupList>
        </JoinedGroup>
      </LowerBlock>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 65%;
  display: block;
  overflow: hidden;
  border: 1px solid #95e1d3;
  border-radius: 10px;
  background-color: #eee;

  &:hover {
    transition: all 1s;
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  }
`;

const UpperBlock = styled.div`
  height: 50%;
`;

const LowerBlock = styled.div`
  height: 50%;
`;

const HostingGroup = styled.div``;

const JoinedGroup = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 15pt;
`;

const ViewAll = styled.div`
  font-size: 12pt;
  align-self: flex-end;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const GroupList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  margin: auto;
`;

export default RightInfo;
