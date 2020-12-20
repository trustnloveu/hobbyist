import React, { useState } from "react";

// component
import Dropdown from "../dropdown/dropdown";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

// css
import "../../css/filter.css";

const Filter = () => {
  const filterOptions = {
    dateFilter: {
      anytime: "상관없음",
      today: "오늘",
      tomorrow: "내일",
      thisWeek: "이번주",
      nextWeek: "다음주",
      thisMonth: "이번달",
    },
    regionFilter: {
      seoul: "서울",
      busan: "부산",
      daegu: "대구",
      incheon: "인천",
      gwangju: "광주",
      daejeon: "대전",
      ulsan: "울산",
      jeju: "제주",
      gyeonggi: "경기",
      gangwon: "강원",
      chungcheon: "충청",
      jeolla: "전라",
      gyeongsang: "경상",
    },
    groupFilter: {
      small: "소그룹(5명 이하)",
      medium: "중그룹(5~20명)",
      large: "대그룹(20명 이상)",
    },
  };

  const [visibleDate, setVisibleDate] = useState(false);
  const [visibleRegion, setVisibleRegion] = useState(false);
  const [visibleGroup, setVisibleGroup] = useState(false);

  const filterToggleHandler = (option) => {
    switch (option) {
      case "date":
        setVisibleDate(!visibleDate);
        break;
      case "region":
        setVisibleRegion(!visibleRegion);
        break;
      case "group":
        setVisibleGroup(!visibleGroup);
        break;
    }
  };

  return (
    <>
      <div className="filter_container">
        <div
          className="filter_option"
          onClick={() => filterToggleHandler("date")}
        >
          날짜
          <FontAwesomeIcon icon={faCalendarDay} />
        </div>
        <div
          className="filter_option"
          onClick={() => filterToggleHandler("region")}
        >
          지역
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </div>
        <div
          className="filter_option"
          onClick={() => filterToggleHandler("group")}
        >
          참여자 수
          <FontAwesomeIcon icon={faUserFriends} />
        </div>
      </div>
      <div className="dropdown_container">
        <Dropdown options={filterOptions.dateFilter} visible={visibleDate} />
        <Dropdown options={filterOptions.regionFilter} />
        <Dropdown options={filterOptions.memberFilter} />
      </div>
    </>
  );
};

export default Filter;
