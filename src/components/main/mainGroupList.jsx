import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// services
import { getGroupsByCategory } from "../../services/groupService";

// components
import MainGroup from "./mainGroup";
import Loader from "../common/loader/loader";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

  // transform: translateX(-300px);

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
      {groups.length === 0 && (
        <Loader type="spin" color="#f38181" width="50px" />
      )}
      {groups.length > 0 && (
        <GroupListWrapper>
          <GroupListCon>
            {groups.map((group) => (
              <MainGroup key={group._id} data={group} />
            ))}
          </GroupListCon>

          <LeftMover>
            <FontAwesomeIcon icon={faChevronLeft} />
          </LeftMover>
          <RightMover>
            <FontAwesomeIcon icon={faChevronRight} />
          </RightMover>
        </GroupListWrapper>
      )}
    </Container>
  );
};

// styled components
const Container = styled.div`
overflow: hidden;
  padding: 20px 0;
}
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

const GroupListWrapper = styled.div`
  width: 100%;
  padding: 5px;
`;
const GroupListCon = styled.div`
  position: relative;
  display: inline-flex;
`;

const RightMover = styled.div`
  position: absolute;
  display: flex;
  right: 10px;
  height: 100%;
  font-size: 22px;
  cursor: pointer;
  
  & svg {
    margin: auto 0;
    opacity: 0.7;
    
    &:hover {
      transition: 0.5s;
      color: #f38181;
    }
  }
}
`;

const LeftMover = styled.div`
  position: absolute;
  display: flex;
  left: 10px;
  height: 100%;
  font-size: 22px;
  cursor: pointer;

  & svg {
    margin: auto 0;
    opacity: 0.7;

    &:hover {
      transition: 0.5s;
      color: #f38181;
    }
  }
`;

export default MainGroupList;
