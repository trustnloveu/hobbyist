import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../modal";
import filterOptions from "../../objects/filterOptions";

// service
import * as groupService from "./../../services/groupService";

// css & icon
import "../../css/groupList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

// keywords, launchedDate, _id, title, category, location, description, startTime, meetingDate
const Group = ({ data }) => {
  const { regionFilter } = filterOptions; // 장소 key : value

  const [visible, setVisible] = useState(false); // Modal
  const [image, setImage] = useState(); // thumbnail

  // open modal
  const modalToggle = () => {
    setVisible(!visible);
  };

  // join group
  const joinGroup = async () => {
    console.log(data._id);
    console.log("Try to join this group");
    await groupService.joinNewGroup(data._id);
  };

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

  return (
    <>
      <Modal visible={visible} group={data} onClick={modalToggle} />
      <div className="Group">
        <img className="image" src={image} alt="" />
        <ul className="info_con">
          <li className="title_con">
            <span>[{regionFilter[data.location]}]</span>
            <Link to={`/group/${data._id}`}>
              <span className="title">{data.title}</span>
            </Link>
            <span className="host">(모임장 '{data.host.name}')</span>
            <div className="group_icon">
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
            <div className="value">{data.member} 명</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Group;
