import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const GroupModal = ({
  visible,
  group,
  modalToggle,
  joinGroup,
  signOutGroup,
  joined,
}) => {
  // Prevent background scroll
  //   useEffect(() => {
  //     document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
  //     return () => {
  //       const scrollY = document.body.style.top;
  //       document.body.style.cssText = `position: ""; top: "";`;
  //       window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //     };
  //   }, []);

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0">
          <CloseButton onClick={modalToggle}>&times;</CloseButton>
          {group.title}
          {group.keywords}
          {group.meetingDate}
          {group.startTime}
          {group.host.name}
          {group.host.phone}
          {group.host.email}
          {group.description}
          {group.launchedDate}
          {group.member}
          <button onClick={joinGroup}>모임 참가</button>
          {joined && <button onClick={signOutGroup}>모임 나가기</button>}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

// protoTypes
GroupModal.propTypes = {
  visible: propTypes.bool,
};

// styled component
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

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  width: 900px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const CloseButton = styled.div`
  text-align: right;
  cursor: pointer;
  font-size: 25pt;
  font-weight: 600;
  position: absolute;
  right: 20px;
  top: 0px;
`;

export default GroupModal;
