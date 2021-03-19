import React from "react";

const FileInput = ({ label, src, id, onChange, error, name }) => {
  // onMouseEnter > Preview with wider size
  const tepFunction = () => {
    console.log("123");
  };

  return (
    <div className="input_con">
      <div className="input_label_con">{label}</div>
      <input
        id={id}
        name={name}
        type="file"
        accept=".jpg, .png, .jpeg"
        style={{ display: "none" }}
        onChange={onChange}
      />
      <div className="preview">
        <img src={src} alt="" onMouseEnter={tepFunction} />
        <label htmlFor={id}>
          <div className="open_upload">사진 찾기</div>
        </label>
      </div>
      {error && <div className="invalid_msg alert_mark">{error}</div>}
    </div>
  );
};

export default FileInput;
