import React from "react";
import Joi from "joi-browser";

import Form from "../common/form";

import "../../css/userService.css";

class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
      phone: "",
      agree: false,
    },
    errors: {},
  };

  // schema
  schema = {
    email: Joi.string().email().required().label("아이디(Email)"),
  };

  // submit
  doSubmit = async () => {
    try {
    } catch (ex) {}
  };

  render() {
    return (
      <div className="user_service_con">
        <form onSubmot={this.doSubmit}>
          {this.renderInput("email", "아이디(Email)", this.inputClassName)}
          {/* {renderInput("password", "비밀번호", "password")}
          {renderInput("name", "이름")}
          {renderInput("phone", "전화번호")}
          {renderInput("name", "이름")}
        {renderButton("회원가입")} */}
        </form>
      </div>
    );
  }

  // input classNames
  inputClassName = {
    container: "input_con",
    input: "input_target",
    label: "input_label",
  };
}

export default Register;
