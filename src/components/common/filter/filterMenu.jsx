import React from "react";

import Dropdown from "../../dropdown/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterMenu = (props) => {
  return (
    <div className="filter_option" onClick={props.onClick}>
      {props.label}
      <FontAwesomeIcon icon={props.icon} />
      <Dropdown options={props.options} visible={props.visible} />
    </div>
  );
};

export default FilterMenu;
