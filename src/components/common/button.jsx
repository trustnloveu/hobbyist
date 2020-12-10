import React from "react";

const Button = (props) => {
  return (
    <div className={props.conClass}>
      <button className={props.btnClass}>{props.label}</button>
    </div>
  );
};

export default Button;
