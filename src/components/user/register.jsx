import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

// server
import * as userService from "../../services/userService";

// components
import Form from "../common/form";

// css
import "../../css/userService.css";
import auth from "../../services/authService";

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
    email: Joi.string().min(5).max(255).required().label("아이디(Email)"),
    password: Joi.string().required().min(5).max(1024).label("비밀번호"),
    repeat_password: Joi.string()
      .required()
      .min(5)
      .max(1024)
      .label("비밀번호 확인"),
    name: Joi.string().required().min(2).max(50).label("닉네임"),
    phone: Joi.string().required().min(9).max(20).label("전화번호"),
  };

  // submit
  doSubmit = async () => {
    try {
      // 비밀번호 일치 검사
      const { password } = this.state.data;
      const { repeat_password } = this.state.data;
      if (password !== repeat_password)
        return toast("입력하신 두 비밀번호가 일치하지 않습니다.");

      // registration > login with token > home
      const response = await userService.registerUser(this.state.data);
      console.log(response);
      console.log(response.headers["x-auth-token"]);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.invalidInfo = ex.response.data;
        this.setState({ errors });
        toast(`${this.state.errors.invalidInfo}`);
      }
    }
  };

  // render
  render() {
    return (
      <div className="user_service_con">
        <form onSubmit={this.handleSubmit}>
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

export default Register;
