import React, { useState } from "react";

const Li = ({ context }) => {
  const [hover, setHover] = useState(false);
  // const [style, setStyle] = useState();
  const style = {
    width: "150px",
    display: "inline-block",
    textAlign: "center",
    height: "50px",
    border: "1px solid #eee",
    borderRadius: "5px",
    margin: "10px",
    lineHeight: "50px",
    backgroundColor: "#eee",
  };

  return (
    <li
      style={style}
      // onMouseOver={() => {
      //   setHover(true);
      // }}
      // onMouseLeave={() => {
      //   setHover(false);
      // }}
    >
      {context}
    </li>
  );
};

export default Li;
