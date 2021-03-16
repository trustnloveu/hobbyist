import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

// utilities
import { convertTime } from "../../utilities/convertTime";

// components
import ContentInfo from "../common/modal/ContentInfo";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
          <CloseButton onClick={modalToggle}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <ModalTitle>
            <Category>{group.category.name}</Category>
            <Arrow>
              <FontAwesomeIcon icon={faChevronRight} />
            </Arrow>
            <Name>{group.title}</Name>
          </ModalTitle>
          <ContentWrapper>
            <ModalLeft>
              <GroupInfo>
                <ContentTitle>그룹 정보</ContentTitle>
                <ContentInfo title="소개글" data={group.description} />
                <ContentInfo title="키워드" data={group.keywords} />
                <ContentInfo
                  title="그룹원"
                  data={group.members.length + "명"}
                />
                <ContentInfo title="모임날짜" data={group.meetingDate} />
                <ContentInfo
                  title="모임시간"
                  data={convertTime(group.startTime)}
                />
                <ContentInfo title="모임장소" data={group.address} />
              </GroupInfo>
              <HostInfo>
                <ContentTitle>호스트 정보</ContentTitle>
                <ContentInfo title="이름" data={group.host.name} />
                <ContentInfo title="연락처" data={group.host.phone} />
                <ContentInfo title="이메일" data={group.host.email} />
              </HostInfo>
            </ModalLeft>
            <ModalRight>
              <ContentTitle>사진</ContentTitle>
              <CoverImage src={Buffer.from(group.coverImage, "base64")} />
            </ModalRight>
          </ContentWrapper>
          <ButtonWrapper>
            {!joined && (
              <ButtonButton
                style={{ backgroundColor: "#95e1d3" }}
                onClick={joinGroup}
              >
                모임 참가
              </ButtonButton>
            )}
            {joined && (
              <ButtonButton
                style={{ backgroundColor: "#f38181" }}
                onClick={signOutGroup}
              >
                모임 나가기
              </ButtonButton>
            )}
          </ButtonWrapper>
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
  width: 1000px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 30px 20px;
`;

const CloseButton = styled.div`
  cursor: pointer;
  font-size: 20pt;
  position: absolute;
  right: 20px;
  top: 10px;

  &:hover {
    transition: all 0.5s;
    color: #fc5185;
  }
`;

const ModalTitle = styled.div`
  display: flex;
  font-size: 20pt;
  letter-spacing: 2px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Category = styled.div``;

const Arrow = styled.div`
  margin: 0 10px;
  font-size: 15pt;
  align-self: center;
`;

const Name = styled.div`
  letter-spacing: 0px !important;
`;

const ModalLeft = styled.div`
  width: 65%;
`;

const ModalRight = styled.div`
  width: 300px;
  height: 300px;
`;

const CoverImage = styled.img`
  width: 100%;
  margin-top: 20px;
`;

const GroupInfo = styled.div`
  margin-bottom: 30px;
`;

const HostInfo = styled.div`
  margin-bottom: 50px;
`;

const ContentTitle = styled.div`
  font-size: 15pt;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  text-align: right;
`;

const ButtonButton = styled.span`
  cursor: pointer;
  padding: 10px 15px;
  color: white;
  border-radius: 5px;

  &:hover {
    transition: all 0.5s;
    background-color: navy !important;
    color: white;
  }
`;

export default GroupModal;
