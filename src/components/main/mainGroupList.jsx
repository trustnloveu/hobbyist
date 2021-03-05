import React, { useState, useEffect } from "react";
import styled from "styled-components";

// services
import { getGroupsByCategory } from "../../services/groupService";

// components
import MainGroup from "./mainGroup";

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

  console.log(groups);

  // return
  return (
    <Container>
      <GroupListTitle>{title}</GroupListTitle>
      <GroupListCon>
        {groups.map((group) => (
          <MainGroup key={group._id} data={group} />
        ))}
      </GroupListCon>
    </Container>
  );
};

// styled components
const Container = styled.div``;
const GroupListTitle = styled.div``;
const GroupListCon = styled.div``;

export default MainGroupList;
