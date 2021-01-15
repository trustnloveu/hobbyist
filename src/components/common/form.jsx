import React, { Component } from "react";
import Joi from "joi-browser";

// components
import Input from "./input";
import Select from "./select";
import Textarea from "./textarea";
import FileInput from "./fileInput";
import AddressInput from "./addressInput";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  // validate
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options); // result > error
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message; // for of || map

    return errors;
  };

  // validate property
  validateProperty = ({ name: propertyName, value }) => {
    const obj = { [propertyName]: value };
    const schema = { [propertyName]: this.schema[propertyName] };

    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  // handle event
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  // Image event
  handleUploadPhoto = (event) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        const data = { ...this.state.data };
        data.coverImage = base64.toString(); // file update in status base64
        this.setState({ data });
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // read file > svae into buffer

      const data = { ...this.state.data };
      data.coverImage = event.target.files[0];
      this.setState({ data }); // update file status
    }
  };

  // submit event
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    // input error check
    // console.log(errors);

    if (errors) return;

    this.doSubmit();
  };

  // title
  renderTitle(className, label) {
    return <div className={className}>{label}</div>;
  }
  // input
  renderInput(classNameObj, name, label, placeholder = "", type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        classNameObj={classNameObj}
        placeholder={placeholder}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
      />
    );
  }

  // textarea
  renderTextarea(classNameObj, name, label, placeholder = "") {
    const { data, errors } = this.state;
    return (
      <Textarea
        name={name}
        label={label}
        classNameObj={classNameObj}
        placeholder={placeholder}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
      />
    );
  }

  // button
  renderButton(label) {
    return (
      <div className="new_group_btn_con">
        <button className="new_group_btn">{label}</button>
      </div>
    );
  }

  // select   >   NOTE: Object.entries(obj) & Object.values(obj)
  renderSelect(classNameObj, name, label, placeholder, lists) {
    const { errors } = this.state;
    return (
      <Select
        classNameObj={classNameObj}
        name={name}
        label={label}
        placeholder={placeholder}
        lists={lists}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  // input[file] > Image
  renderFileInput(id, name, label, onChange, src) {
    const { errors } = this.state;
    return (
      <FileInput
        id={id}
        name={name}
        label={label}
        onChange={onChange}
        src={src}
        error={errors[name]}
      />
    );
  }

  // input > address > Modal >Daum
  renderAddressInput(value, nameMain, detailName, label, onClick) {
    const { errors } = this.state;
    return (
      <AddressInput
        value={value}
        nameMain={nameMain}
        detailName={detailName}
        label={label}
        onClick={onClick}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
