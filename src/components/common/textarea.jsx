import React from "react";

const Textarea = ({ classNameObj, error, name, label, ...rest }) => {
  return (
    <div className={classNameObj.container}>
      <div className={classNameObj.labelCon}>
        <label htmlFor={name} className={classNameObj.label}>
          {label}
        </label>
      </div>
      <textarea
        {...rest}
        id={name}
        name={name}
        className={classNameObj.textarea}
      ></textarea>
      {error && <div className="invalid_msg alert_mark">{error}</div>}
    </div>
  );
};

export default Textarea;
