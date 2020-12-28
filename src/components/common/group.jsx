import React from "react";

import "../../css/groupList.css";

// keywords, launchedDate, _id, title, category, location, description, startTime, meetingDate
const Group = ({ data }) => {
  return (
    <div className="Group">
      <img className="image" src="" alt="" />
      <ul className="info_con">
        <li className="title">{data.title}</li>
        <li className="keywords">
          {data.keywords.map((keyword) => (
            <span className="keyword">{"#" + keyword}</span>
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
          <div className="value">16명(임시)</div>
        </li>
      </ul>
    </div>
  );
};

export default Group;
