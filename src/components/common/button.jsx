import React from "react";

const Button = ({ conClass, btnClass, label }) => {
  return (
    <div className={conClass}>
      <button className={btnClass}>{label}</button>
    </div>
  );
};

export default Button;
