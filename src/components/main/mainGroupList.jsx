import React, { useState, useEffect } from "react";
import styled from "styled-components";

// services
import { getGroupsByCategory } from "../../services/groupService";

// components

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

  return (
    <Container>
      <GroupListTitle>{title}</GroupListTitle>
    </Container>
  );
};

const Container = styled.div``;
const GroupListTitle = styled.div``;

export default MainGroupList;
