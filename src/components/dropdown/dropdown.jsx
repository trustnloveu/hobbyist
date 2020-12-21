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
  const [filters, setFilters] = useState([...Object.values(options)]);

  // useEffect(() => {
  //   setDisplay(visible ? "block" : "none");
  // }, [visible]);

  console.log(filters);
  console.log(filters.length);

  const filter = filters.map((filter) => <div>{filter}</div>);

  return (
    <div className="dropdown" style={{ display }}>
      {filter}
    </div>
  );
};

export default Dropdown;
