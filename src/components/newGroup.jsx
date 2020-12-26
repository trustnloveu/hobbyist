import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { getCategories } from "./../services/categoryService";

// filter option list
import filterOptions from "../objects/filterOptions";

// components
import Form from "./common/form";

// css
import "../css/userService.css";

class NewGroup extends Form {
  // state
  state = {
    data: {
      title: "",
      categoryId: "",
      location: "",
      description: "",
      startTime: "",
      meetingDate: "",
      keywords: "",
      launchedDate: "",
    },
    errors: {},
    categories: [],
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
    meetingDate: Joi.string().required().label("모임 날짜"),
    keywords: Joi.string().label("키워드"),
    launchedDate: Joi.date().default(new Date()),
  };

  // componentDidMount
  componentDidMount() {
    this.populateCategories();
  }

  async populateCategories() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }

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
          {this.renderTitle("Title", "새로운 그룹 만들기")}
          {this.renderInput(
            this.inputClassName,
            "title",
            "그룹명",
            "그룹명을 입력해주세요."
          )}
          {this.renderSelect(
            this.selectClassName,
            "categoryId",
            "카테고리",
            "모임 카테고리를 선택해주세요.",
            this.state.categories
          )}
          {this.renderSelect(
            this.selectClassName,
            "location",
            "모임 지역",
            "지역을 선택해주세요.",
            filterOptions.regionFilter
          )}
          {this.renderInput(
            this.inputClassName,
            "description",
            "그룹소개",
            "모임에 대한 설명을 적어주세요."
          )}
          {this.renderInput(
            this.inputClassName,
            "meetingDate",
            "모임 날짜",
            "",
            "date"
          )}
          {this.renderInput(
            this.inputClassName,
            "meetingDate",
            "시작 시간",
            "",
            "time"
          )}
          {this.renderInput(
            this.inputClassName,
            "keywords",
            "모임 관련 키워드",
            "만드시는 모임 활동에 대한 키워드를 '#'과 함께 입력해주세요. 예) #동네친구 #커피좋아하는사람 #고민상담 ..."
          )}
          {this.renderButton(
            "new_group_btn_con",
            "new_group_btn",
            "그룹 만들기"
          )}
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

  // select classNames
  selectClassName = {
    container: "select_con",
    label: "select_label",
  };
}

export default NewGroup;
