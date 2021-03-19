import React from "react";

const Input = ({ name, label, error, classNameObj, ...rest }) => {
  return (
    <div className={classNameObj.container}>
      <div className={classNameObj.labelCon}>
        <label htmlFor={name} className={classNameObj.label}>
          {label}
        </label>
      </div>
      <input
        {...rest}
        id={name}
        name={name}
        className={classNameObj.input}
        // ref={this.username}
      />
      {error && <div className="invalid_msg alert_mark">{error}</div>}
    </div>
  );
};

export default Input;
