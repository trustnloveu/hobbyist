import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Postcode from "./common/postcode";

const PostcodeModal = ({ setAddress: setMainAddress, visible, onClick }) => {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        tabIndex="-1"
        visible={visible}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <Postcode visible={visible} setMainAddress={setMainAddress} />
      </ModalWrapper>
    </>
  );
};

// protoTypes
PostcodeModal.propTypes = {
  visible: propTypes.bool,
};

// style
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export default PostcodeModal;
