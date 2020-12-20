import React from "react";

import Filter from "./filter";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FilterList = ({ label }) => {
  const style = {
    container: {
      width: "60%",
      margin: "20px auto",
      minWidth: "800px",
    },
    icon: {
      margin: "0 10px",
    },
    font: {
      fontSize: "14pt",
      fontWeight: "600",
      color: "#364f6b",
    },
  };

  const { container, icon, font } = style;

  return (
    <div style={container}>
      <p style={font}>
        취미
        <FontAwesomeIcon style={icon} icon={faChevronRight} />
        {label}
      </p>
      <Filter />
    </div>
  );
};

export default FilterList;
