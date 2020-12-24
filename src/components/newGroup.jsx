import React from "react";
import * as Yup from "yup";
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
  schema = {
    title: Yup.string()
      .min(1, "최소 1글자 이상의 그룹명을 적어주세요.")
      .max(20, "최대 20자 이내의 그룹명을 적어주세요.")
      .required("그룹명을 적어주세요."),
    category: Yup.string().required("그룹 카테고리를 지정해주세요."),
    location: Yup.string().required("모임 지역을 선택해주세요."),
    description: Yup.string().required("모임에 대한 자세한 내용을 적어주세요."),
    startTime: Yup.string().required(),
    endTime: Yup.string().required(),
    meetingDate: Yup.string().required(),
    launchedDate: Yup.date().default(() => new Date()),
  };

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
        </form>
      </div>
    );
  }
}

export default NewGroup;
