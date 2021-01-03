import React from "react";

const FileInput = () => {
  return (
    <div className={classNameObj.container}>
      <div className={classNameObj.label}>{label}</div>
      <input id={id} type="file" {...rest} />
      <img src={src} alt="" />
      {error && <div className="invalid_msg alert_mark">{error}</div>}
      <label htmlFor={id}>
        <div>이미지 업로드</div>
      </label>
    </div>
  );
};

export default FileInput;
