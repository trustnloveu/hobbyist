import React from "react";
import styled from "styled-components";

const ContentInfo = ({ title, data }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{data}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 15pt;
  line-height: 33px;
`;

const Title = styled.div`
  width: 20%;
`;

const Content = styled.div`
  width: 75%;
  background-color: #eee;
`;
//   padding: 5px 10px;
//   border-radius: 5px;
//   margin-right: 10px;

export default ContentInfo;
