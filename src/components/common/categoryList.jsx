import React, { useState } from "react";

const Li = ({ context }) => {
  // const [hover, setHover] = useState(false);

  const styleSheet = {
    normal: {
      width: "150px",
      display: "inline-block",
      textAlign: "center",
      height: "50px",
      border: "1px solid #eee",
      borderRadius: "5px",
      margin: "10px",
      lineHeight: "50px",
      backgroundColor: "#eee",
    },
    hover: {
      transition: "1.0s",
      backgroundColor: "#ccc",
      cursor: "pointer",
    },
  };
  const [style, setStyle] = useState({ ...styleSheet.normal });

  return (
    <li
      style={style}
      onMouseOver={() => {
        setStyle({ ...styleSheet.normal, ...styleSheet.hover });
        // setHover(true);
      }}
      onMouseLeave={() => {
        setStyle({ ...styleSheet.normal });
        // setHover(false);
      }}
      onClick={() => console.log(`clicked`)}
    >
      {context}
    </li>
  );
};

export default Li;
