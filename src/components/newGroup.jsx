import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

// filter option list
import filterOptions from "../objects/filterOptions";

// components
import Form from "./common/form";

class NewGroup extends Form {
  // state
  state = {
    data: {
      title: "",
      categoryId: "",
      location: "",
      description: "",
      startTime: "",
      endTime: "",
      meetingDate: "",
      launchedDate: "",
    },
    errors: {},
  };

  // {
  //   "string.empty": `최소 1글자 이상의 그룹명을 적어주세요.`,
  //   "string.min": `최소 1글자 이상의 그룹명을 적어주세요.`,
  //   "string.max": `최대 20자 이내의 그룹명을 적어주세요.`,
  //   "any.required": `그룹명을 적어주세요.`,
  // }

  // schema
  schema = {
    title: Joi.string().min(1).max(20).required().label("그룹명"),
    categoryId: Joi.string().required().label("카테고리"),
    location: Joi.string().required().label("지역"),
    description: Joi.string().min(1).max(500).required().label("그룹 소개"),
    startTime: Joi.string().required().label("시작 시간"),
    endTime: Joi.string().required().label("끝나는 시간"),
    meetingDate: Joi.string().required().label("모임 날짜"),
    launchedDate: Joi.date().default(new Date()),
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
    // const categories = async () => {
    //   await
    // }

    return (
      <div className="NewGroup">
        <form onSubmit={this.handleSub}>
          {this.renderTitle("form_title", "새로운 그룹 만들기")}
          {this.renderInput("", "title", "그룹명", "그룹명을 입력해주세요.")}
          {/* {this.renderSelect(
            "",
            "categoryId",
            "카테고리",
            "모임 카테고리를 선택해주세요."
          )} */}
          {this.renderSelect(
            "",
            "location",
            "모임 지역",
            "지역을 선택해주세요.",
            filterOptions.regionFilter
          )}
          {this.renderInput(
            "",
            "description",
            "그룹소개",
            "모임에 대한 설명을 적어주세요."
          )}
          <input type="date" placeholder="시작 시간" />
          <input type="date" placeholder="끝나는 시간" />
          {this.renderButton(
            "new_group_btn_con",
            "new_group_btn",
            "그룹 만들기"
          )}
        </form>
      </div>
    );
  }
}

export default NewGroup;
