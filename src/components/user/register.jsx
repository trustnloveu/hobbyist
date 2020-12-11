import React from "react";
import Joi from "joi-browser";

// components
import Form from "../common/form";
import Button from "../common/button";

// css
import "../../css/userService.css";

class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      repeat_password: "",
      name: "",
      phone: "",
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
    repeat_password: Joi.ref("password"),
    name: Joi.string().required().min(2).max(10).label("닉네임"),
    phone: Joi.string().required().label("전화번호"),
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
          {this.renderTitle("form_title", "회원가입")}
          {this.renderInput(
            this.inputClassName,
            "email",
            "아이디(Email)",
            "아이디로 사용할 이메일"
          )}
          {this.renderInput(
            this.inputClassName,
            "password",
            "비밀번호",
            "7~20자의 비밀번호 입력",
            "password"
          )}
          {this.renderInput(
            this.inputClassName,
            "repeat_password",
            "비밀번호 확인",
            "입력하신 비밀번호 재입력",
            "password"
          )}
          {this.renderInput(
            this.inputClassName,
            "name",
            "닉네임",
            "닉네임 설정"
          )}
          {this.renderInput(
            this.inputClassName,
            "phone",
            "전화번호",
            "Ex) 010-1234-1234"
          )}
          <Button
            conClass="input_con"
            btnClass="form_button"
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

export default Register;
