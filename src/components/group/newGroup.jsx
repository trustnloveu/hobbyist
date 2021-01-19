import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

// services
import { getCategories } from "../../services/categoryService";
import * as userService from "../../services/userService";
import * as groupService from "../../services/groupService";
import auth from "../../services/authService";

// filter option list
import filterOptions from "../../objects/filterOptions";

// components
import Form from "../common/form";
import PostcodeModal from "../modal/postcodeModal";

// css
import "../../css/userService.css";

// image
import defaultPhoto from "../../images/defaultPhoto.jpg";

// class
class NewGroup extends Form {
  // state
  state = {
    data: {
      title: "",
      userId: "",
      categoryId: "",
      location: "",
      mainAddress: "",
      detailAddress: "",
      description: "",
      startTime: "",
      meetingDate: "",
      keywords: "",
      coverImage: "",
    },
    errors: {},
    categories: [],
    visible: false,
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
    userId: Joi.string().required("현재 유저 아이디"),
    categoryId: Joi.string().required().label("카테고리"),
    location: Joi.string().required().label("지역"),
    mainAddress: Joi.string().required().label("주소"),
    detailAddress: Joi.string().max(100).label("상세주소"),
    description: Joi.string().min(1).max(500).required().label("그룹 소개"),
    startTime: Joi.string().required().label("시작 시간"),
    meetingDate: Joi.string().required().label("모임 날짜"),
    keywords: Joi.string().label("키워드"),
    coverImage: Joi.string().label("모임 대표사진"),
  };

  // componentDidMount
  async componentDidMount() {
    this.populateCategories();
    this.populateUserId();
  }

  //componentDidUpdate
  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  // get categories form DB
  async populateCategories() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }

  populateUserId() {
    const data = { ...this.state.data };
    data.userId = auth.getCurrentUser()._id;
    this.setState({ data });
  }

  modalToggle = (e) => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  };

  setMainAddress = (address) => {
    const data = { ...this.state.data };
    data.mainAddress = address;
    this.setState({ data });

    const visible = !this.state.visible;
    this.setState({ visible });
  };

  // submit
  doSubmit = async () => {
    try {
      // create new group
      const { data: group } = await groupService.createNewGroup(
        this.state.data
      );
      // update user info about group activity with his role
      await userService.createNewGroup({
        groupId: group._id,
        userId: auth.getCurrentUser()._id,
      });
      // redirect
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
      <>
        <div className="NewGroup">
          <form onSubmit={this.handleSubmit}>
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
              "모임지역",
              "지역을 선택해주세요.",
              filterOptions.regionFilter
            )}
            {this.renderAddressInput(
              this.state.data.mainAddress,
              "mainAddress",
              "detailAddress",
              "모임장소",
              this.modalToggle
            )}
            {this.renderTextarea(
              this.textareaClassName,
              "description",
              "그룹소개",
              "모임에 대한 설명을 적어주세요."
            )}
            {this.renderInput(
              this.inputClassName,
              "meetingDate",
              "모임날짜",
              "",
              "date"
            )}
            {this.renderInput(
              this.inputClassName,
              "startTime",
              "시작시간",
              "",
              "time"
            )}
            {this.renderTextarea(
              this.textareaClassName,
              "keywords",
              "모임 관련 키워드",
              "만드시는 모임 활동에 대한 키워드를 '#'과 함께 입력해주세요. 예) #동네친구 #커피좋아하는사람 #고민상담 ..."
            )}
            {this.renderFileInput(
              "image-upload",
              "coverImage",
              "모임 대표 사진 업로드(썸네일)",
              this.handleUploadPhoto,
              this.state.data.coverImage === ""
                ? defaultPhoto
                : this.state.data.coverImage
            )}
            {this.renderButton("그룹 만들기")}
          </form>
        </div>
        <PostcodeModal
          visible={this.state.visible}
          onClick={this.modalToggle}
          setAddress={this.setMainAddress}
        />
      </>
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

  // textarea classNames
  textareaClassName = {
    container: "input_con",
    textarea: "textarea_target",
    labelCon: "input_label_con",
    label: "input_label",
  };
}

export default NewGroup;
