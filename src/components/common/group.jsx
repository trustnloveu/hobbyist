import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import styled from "styled-components";

import GroupModal from "../modal/groupModal";
import filterOptions from "../../objects/filterOptions";

// service
// import * as groupService from "./../../services/groupService";
import authService from "./../../services/authService";
import { joinGroup, signOutGroup } from "../../utilities/signInOut";

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

  // return
  return (
    <>
      <GroupModal
        visible={visible}
        joined={joined}
        group={data}
        modalToggle={modalToggle}
        joinGroup={() => joinGroup(userToken, data)}
        signOutGroup={() => signOutGroup(userToken, data)}
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
              <FontAwesomeIcon
                icon={faSignInAlt}
                onClick={() => joinGroup(userToken, data)}
              />
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
