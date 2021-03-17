import React from "react";
import styled from "styled-components";

// components
import MainGroupList from "./mainGroupList";

const MainGroupsByCate = ({ categories }) => {
  console.log(categories);
  // return
  return (
    <Container>
      {categories.map((category) => (
        <MainGroupList key={category._id} data={category} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin: 10px auto;
`;

export default MainGroupsByCate;
