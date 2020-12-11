import React from "react";
import Joi from "joi-browser";

import Form from "../common/form";
class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  // schema
  // .pattern(new RegExp("^[a-zA-Z0-9]{7,20}$"))
  schema = {
    email: Joi.string().email().required().label("아이디(Email)"),
    password: Joi.string().required().label("비밀번호"),
  };

  doSubmit = () => {
    console.log("login clicked");
  };

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
            "비밀번호",
            "비밀번호 입력",
            "password"
          )}
          <div>
            <label>
              <input type="checkbox" name="storeAccount" />
              <span>아이디 기억하기</span>
            </label>
          </div>
          {this.renderButton("input_con", "login_btn", "로그인")}
          {this.renderButton("input_con", "register_btn", "회원가입")}
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
