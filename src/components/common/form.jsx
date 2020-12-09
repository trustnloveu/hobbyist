import React, { Component } from "react";
// import Joi from "joi-browser";

// components
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  // handle events
  handleChange = () => {
    console.log("123");
  };

  // render components
  renderInput(type, label, classNameObj, name = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
        classNameObj={classNameObj}
        // placeholder={placeholder}
      />
    );
  }
}

export default Form;
