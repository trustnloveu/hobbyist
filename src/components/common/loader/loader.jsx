import React from "react";
import styled from "styled-components";
import Loading from "react-loading";

const Loader = ({ type, color, message, width }) => {
  return (
    <Container>
      <Loading type={type} color={color} width={width} />
      {message && <Message></Message>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;

  & div {
    margin: 20px auto;
    padding: 100px 0;

    & svg {
      opacity: 0.7;
    }
  }
`;

const Message = styled.div`
  font-size: 15pt;
`;

export default Loader;
