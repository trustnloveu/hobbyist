import React, { useState, useEffect } from "react";
import styled from "styled-components";

// services
import { getGroupsByCategory } from "../../services/groupService";

// components
import MainGroup from "./mainGroup";

// icon
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Main
const MainGroupList = ({ data }) => {
  const [groups, setGroups] = useState([]);
  const [title, setTitle] = useState();

  // useEffect
  useEffect(() => {
    async function getGroupListData(id) {
      const { data } = await getGroupsByCategory(id);
      setGroups(data); // setGroups
    }

    // execute
    setTitle(data.name);
    getGroupListData(data._id);
  }, []);

  const emptyText = "등록된 모임이 없습니다.";

  // return
  return (
    <Container>
      <GroupListTitleCon>
        <GroupListTitle>{title}</GroupListTitle>
        <GroupAllList>전체보기</GroupAllList>
      </GroupListTitleCon>
      <GroupListCon>
        {groups.length > 0 &&
          groups.map((group) => <MainGroup key={group._id} data={group} />)}
        {groups.length === 0 && (
          <EmptyList>
            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
            &nbsp;{emptyText}
          </EmptyList>
        )}
      </GroupListCon>
    </Container>
  );
};

// styled components
const Container = styled.div`
  padding: 20px 0;
`;
const GroupListTitleCon = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GroupListTitle = styled.div`
  font-size: 17pt;
  letter-spacing: 3px;
`;

const GroupAllList = styled.div`
  cursor: pointer;
  text-decoration: underline;
  text-underline-position: under;
`;

const GroupListCon = styled.div`
  display: flex;
  height: 220px;
  border-radius: 10px;
  overflow-x: hidden;
  background-color: #eee;
`;

const EmptyList = styled.div`
  margin: auto;
  font-size: 15pt;
`;

export default MainGroupList;
