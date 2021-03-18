import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// services
import { getGroupsByCategory } from "../../services/groupService";

// components
import MainGroup from "./mainGroup";
import Loader from "../common/loader/loader";

// icon
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Main
const MainGroupList = ({ data: group }) => {
  const [groups, setGroups] = useState([]);
  const [title, setTitle] = useState();

  // useEffect
  useEffect(() => {
    async function getGroupListData(id) {
      const { data } = await getGroupsByCategory(id);
      setGroups(data); // setGroups
    }

    // execute
    setTitle(group.name);
    getGroupListData(group._id);
  }, []);

  const emptyText = "등록된 모임이 없습니다.";

  // return
  return (
    <Container>
      <GroupListTitleCon>
        <GroupListTitle>{title}</GroupListTitle>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          activeStyle={{ color: "inherit" }}
          to={`/categories/${group._id}`}
        >
          <GroupAllList>전체보기</GroupAllList>
        </NavLink>
      </GroupListTitleCon>
      <GroupListCon>
        {groups.length > 0 &&
          groups.map((group) => <MainGroup key={group._id} data={group} />)}
        {groups.length === 0 && (
          <Loader type="spin" color="#f38181" width="50px" height="350px" />
        )}
      </GroupListCon>
      {/* <Loader type="spin" color="#f38181" width="50px" height="350px" /> */}
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
  margin-bottom: 15px;
`;

const GroupListTitle = styled.div`
  font-size: 17pt;
  letter-spacing: 3px;
`;

const GroupAllList = styled.div`
  cursor: pointer;
  padding: 3px;
  border-radius: 5px;

  &:hover {
    transition: all 1s;
    background-color: #95e1d3;
    color: navy;
  }
`;

const GroupListCon = styled.div`
  display: flex;
  overflow-x: hidden;
  padding: 5px;
`;

// const EmptyListCon = styled.div`
//   display: flex;
//   overflow-x: hidden;
//   border: 1px solid #ccc;
//   height: 200px;
// `;

const EmptyList = styled.div`
  margin: auto;
  font-size: 15pt;
`;

export default MainGroupList;
