import React from "react";
import styled from "styled-components";

// components
import MainGroupList from "./mainGroupList";

const MainGroupsByCate = ({ categories }) => {
  // return
  return (
    <Container>
      {categories.map((category) => (
        <MainGroupList key={category._id} data={category} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default MainGroupsByCate;
