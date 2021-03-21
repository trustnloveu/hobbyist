import React from "react";
import styled from "styled-components";

const PrivateInfo = ({ label, data }) => {
  // return
  return (
    <Container>
      <Title>{label}</Title>
      <Content>{data}</Content>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0;
`;

const Title = styled.div`
  font-size: 15pt;
  margin-bottom: 7px;
`;

const Content = styled.div`
  font-size: 20pt;
`;

export default PrivateInfo;
