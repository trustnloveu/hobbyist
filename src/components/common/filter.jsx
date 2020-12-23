import React, { useState } from "react";

// component
import Dropdown from "../dropdown/dropdown";

// icon
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

// css
import "../../css/filter.css";
import FilterMenu from "./filterMenu";

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
      anywhere: "상관없음",
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
      anygroup: "상관없음",
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
        setVisibleRegion(false);
        setVisibleGroup(false);
        break;
      case "region":
        setVisibleRegion(!visibleRegion);
        setVisibleDate(false);
        setVisibleGroup(false);
        break;
      case "group":
        setVisibleGroup(!visibleGroup);
        setVisibleDate(false);
        setVisibleRegion(false);
        break;
    }
  };

  return (
    <div className="filter_container">
      <FilterMenu
        className="filter_option"
        options={filterOptions.dateFilter}
        onClick={() => filterToggleHandler("date")}
        visible={visibleDate}
        icon={faCalendarDay}
        label="날짜"
      />
      <FilterMenu
        className="filter_option"
        options={filterOptions.regionFilter}
        onClick={() => filterToggleHandler("region")}
        visible={visibleRegion}
        icon={faMapMarkedAlt}
        label="지역"
      />
      <FilterMenu
        className="filter_option"
        options={filterOptions.groupFilter}
        onClick={() => filterToggleHandler("group")}
        visible={visibleGroup}
        icon={faUserFriends}
        label="참여자 수"
      />
    </div>
  );
};

export default Filter;
