import React, { useEffect, useState } from "react";

import "../../css/filter.css";

const Dropdown = ({ options, visible }) => {
  // <select {...props}>
  //   {props.filters &&
  //     props.filters.map((filter) => (
  //       <option key={filter.key} value={filter.value}></option>
  //     ))}
  // </select>

  // dropdown display option
  const [display, setDisplay] = useState("block");

  //   useEffect(() => {
  //     setDisplay(visible ? "block" : "none");
  //   }, [visible]);

  return (
    <div className="dropdown" style={{ display }}>
      dropdown
    </div>
  );
};

export default Dropdown;
