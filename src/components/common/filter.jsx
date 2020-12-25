import React, { useState } from "react";

// filter option list
import filterOptions from "../../objects/filterOptions";

// icon
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

// css
import "../../css/filter.css";
import FilterMenu from "./filterMenu";

const Filter = () => {
  // dropdown contents
  const filters = { ...filterOptions };

  // dropdown visibility default
  const [visibleDate, setVisibleDate] = useState(false);
  const [visibleRegion, setVisibleRegion] = useState(false);
  const [visibleGroup, setVisibleGroup] = useState(false);

  // dropdown visibility switch
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
      default:
        return null;
    }
  };

  // return
  return (
    <div className="filter_container">
      <FilterMenu
        className="filter_option"
        options={filters.dateFilter}
        onClick={() => filterToggleHandler("date")}
        visible={visibleDate}
        icon={faCalendarDay}
        label="날짜"
      />
      <FilterMenu
        className="filter_option"
        options={filters.regionFilter}
        onClick={() => filterToggleHandler("region")}
        visible={visibleRegion}
        icon={faMapMarkedAlt}
        label="지역"
      />
      <FilterMenu
        className="filter_option"
        options={filters.groupFilter}
        onClick={() => filterToggleHandler("group")}
        visible={visibleGroup}
        icon={faUserFriends}
        label="참여자 수"
      />
    </div>
  );
};

export default Filter;
