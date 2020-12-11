import React from "react";

import Form from "../common/form";
import Button from "../common/button";
// classNameObj, name, label, placeholder, type = "text"
class Login extends Form {
  render() {
    return (
      <div className="user_service_con">
        <form>
          {this.renderTitle("form_title", "로그인")}
          {this.renderInput(
            this.inputClassName,
            "email",
            "아이디(email)",
            "아이디 입력"
          )}
          {this.renderInput(
            this.inputClassName,
            "password",
            "아이디(email)",
            "아이디 입력",
            "password"
          )}
          <Button conClass="input_con" btnClass="form_button" label="title" />
        </form>
      </div>
    );
  }

  // input classNames
  inputClassName = {
    container: "input_con",
    input: "input_target",
    labelCon: "input_label_con",
    label: "input_label",
  };
}

export default Login;
