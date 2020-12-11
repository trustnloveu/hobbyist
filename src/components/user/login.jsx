import React from "react";
import Joi from "joi-browser";

import Form from "../common/form";
import Button from "../common/button";
// classNameObj, name, label, placeholder, type = "text"
class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  // schema
  schema = {
    email: Joi.string().email().required().label("아이디(Email)"),
    password: Joi.string()
      // .pattern(new RegExp("^[a-zA-Z0-9]{7,20}$"))
      .required()
      .label("비밀번호"),
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
          <Button conClass="input_con" btnClass="login_btn" label="로그인" />
          <Button
            conClass="input_con"
            btnClass="register_btn"
            label="회원가입"
          />
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
