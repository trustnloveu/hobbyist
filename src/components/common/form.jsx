import React, { Component } from "react";
import Joi from "joi-browser";

// components
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  // validate
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }
  };

  // validateProperty
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  // handle events
  handleChange = ({ currentTarget: input }) => {
    console.log("123");

    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  // render components
  // input
  renderInput(classNameObj, name, label, placeholder, type = "text") {
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
        placeholder={placeholder}
      />
    );
  }
}

export default Form;
