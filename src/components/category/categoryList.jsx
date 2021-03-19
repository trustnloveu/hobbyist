import React, { useState } from "react";
import { Link } from "react-router-dom";

const Li = ({ pathId, context, onClick }) => {
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
      color: "black",
    },
    hover: {
      transition: "1.0s",
      backgroundColor: "#ccc",
      cursor: "pointer",
    },
  };
  const [style, setStyle] = useState({ ...styleSheet.normal });

  return (
    <Link to={`/categories/${pathId}`}>
      <li
        style={style}
        onMouseOver={() => {
          setStyle({ ...styleSheet.normal, ...styleSheet.hover });
        }}
        onMouseLeave={() => {
          setStyle({ ...styleSheet.normal });
        }}
      >
        {context}
      </li>
    </Link>
  );
};

export default Li;
