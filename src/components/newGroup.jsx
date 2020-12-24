import React from "react";
import Joi from "joi";
import { toast } from "react-toastify";

import Form from "./common/form";

class NewGroup extends Form {
  // state
  state = {
    data: {
      title: "",
      category: "",
      location: "",
      description: "",
      startTime: "",
      endTime: "",
      meetingDate: "",
      launchedDate: "",
    },
    errors: {},
  };

  // schema
  schema = Joi.object({
    title: Joi.string().min(1).max(20).required().messages({
      "string.empty": `최소 1글자 이상의 그룹명을 적어주세요.`,
      "string.min": `최소 1글자 이상의 그룹명을 적어주세요.`,
      "string.max": `최대 20자 이내의 그룹명을 적어주세요.`,
      "any.required": `그룹명을 적어주세요.`,
    }),
    category: Joi.string().required().messages({
      "any.required": `그룹 카테고리를 지정해주세요.`,
    }),
    location: Joi.string().required().messages({
      "any.required": `모임 지역을 선택해주세요.`,
    }),
    description: Joi.string().required().messages({
      "any.required": `모임에 대한 자세한 내용을 적어주세요.`,
    }),
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    meetingDate: Joi.string().required(),
    launchedDate: Joi.date().default(() => new Date()),
  });

  // submit
  doSubmit = async () => {
    try {
      // launch group
      // const reqponse = await groupService.createGroup(this.state.data);
      // window.location = "/";
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
      <div className="NewGroup">
        <form onSubmit={this.handleSub}>
          {this.renderTitle("form_title", "새로운 그룹 만들기")}
          {this.renderInput("", "text", "그룹명", "그룹명을 입력해주세요.")}
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          {this.renderInput(
            "",
            "text",
            "그룹소개",
            "모임에 대한 설명을 적어주세요."
          )}
          <input type="date" placeholder="시작 시간" />
          <input type="date" placeholder="끝나는 시간" />
          {this.renderButton("", "", "그룹 만들기")}
        </form>
      </div>
    );
  }
}

export default NewGroup;
