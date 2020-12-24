import React, { useEffect, useState } from "react";

import "../../css/filter.css";

const Dropdown = ({ options, visible }) => {
  // dropdown display option
  const [display, setDisplay] = useState("block");
  const [filters, setFilters] = useState([...Object.values(options)]);

  useEffect(() => {
    setDisplay(visible ? "block" : "none");
  }, [visible]);

  const filter = filters.map((filter, index) => (
    <div key={index} onClick={() => console.log({ filter })}>
      {filter}
    </div>
  ));

  return (
    <div className="dropdown" style={{ display }}>
      {filter}
    </div>
  );
};

export default Dropdown;
