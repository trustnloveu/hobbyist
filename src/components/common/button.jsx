import React from "react";

const Button = (props) => {
  return <button className={props.className}>{props.label}</button>;
};

export default Button;
