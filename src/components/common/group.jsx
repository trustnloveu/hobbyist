import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import GroupModal from "../modal/groupModal";
import filterOptions from "../../objects/filterOptions";

// service
import * as groupService from "./../../services/groupService";
import authService from "./../../services/authService";

// css & icon
import "../../css/groupList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

// Group
const Group = ({ data }) => {
  const { regionFilter } = filterOptions; // 장소 key : value

  const [visible, setVisible] = useState(false); // Modal
  const [image, setImage] = useState(); // thumbnail
  const [joined, isJoined] = useState(false);
  const userToken = authService.getCurrentUser(); // user-info from token

  // useEffect > image
  useEffect(() => {
    for (let key in data) {
      if (key === "coverImage") {
        let binary = "";
        let bytes = new Uint8Array(data[key].data);
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        setImage("data:image/png;base64" + binary);
      }
    }
  }, [data]);

  // open modal
  const modalToggle = () => {
    if (userToken) {
      const result = data.members.includes(userToken._id);
      isJoined(result);
    }
    setVisible(!visible);
  };

  // preview map
  const openMapPreview = () => {};

  // join group
  const joinGroup = async () => {
    if (userToken) {
      try {
        if (window.confirm(data.title + " 모임에 참여하시겠습니까?")) {
          const group = await groupService.joinNewGroup(data._id);
          toast.info(group.title + "에 가입하였습니다.", {
            position: "top-center",
          });
          window.location.reload();
        } else return;
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          toast.error(ex.response.data, {
            position: "top-center",
          });
        }
      }
    } else {
      toast.info("로그인이 필요한 서비스입니다.", {
        position: "top-center",
      });
    }
  };

  // sign-out group
  const signOutGroup = async () => {
    if (userToken) {
      try {
        if (window.confirm(data.title + " 모임에서 나가겠습니까?")) {
          await groupService.signOutGroup(data._id);
          window.location.reload();
        } else return;
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          toast.error(ex.response.data, {
            position: "top-center",
          });
        }
      }
    } else {
      toast.info("로그인이 필요한 서비스입니다.", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <GroupModal
        visible={visible}
        joined={joined}
        group={data}
        modalToggle={modalToggle}
        joinGroup={joinGroup}
        signOutGroup={signOutGroup}
      />
      <div className="Group">
        <img className="image" src={image} alt="" />
        <ul className="info_con">
          <li className="title_con">
            <span>[{regionFilter[data.location]}]</span>
            <span className="title">{data.title}</span>
            <span className="host">(모임장 '{data.host.name}')</span>
            <div className="group_icon">
              <FontAwesomeIcon icon={faMapMarkedAlt} onClick={openMapPreview} />
              <FontAwesomeIcon icon={faSearchPlus} onClick={modalToggle} />
              <FontAwesomeIcon icon={faSignInAlt} onClick={joinGroup} />
            </div>
          </li>
          <li className="keywords">
            {data.keywords.map((keyword, index) => (
              <span className="keyword" key={index}>
                {"#" + keyword}
              </span>
            ))}
          </li>
          <li className="date">
            <div className="tag">모임 날짜</div>
            <div className="value">{data.meetingDate}</div>
          </li>
          <li className="time">
            <div className="tag">모임 시작 시간</div>
            <div className="value">{data.startTime}</div>
          </li>
          <li className="member">
            <div className="tag">참여자 수</div>
            <div className="value">{data.members.length} 명</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Group;
