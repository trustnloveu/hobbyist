import React, { Component } from "react";
import Joi from "joi-browser";

// components
import Input from "./input";
import Button from "./button";

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
    // const { error } = this.schema.validate(obj, schema);
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

    // if (!this.validate()) {
    //   console.log(true);
    //   this.setState({ errors: {} });
    // }
  };

  // submit event
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    // if (errors) console.log(errors);

    this.doSubmit();
  };

  // render components
  // title
  renderTitle(className, label) {
    return <div className={className}>{label}</div>;
  }
  // input
  renderInput(classNameObj, name, label, placeholder, type = "text") {
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

  // button
  renderButton(conClass, btnClass, label) {
    return <Button conClass={conClass} btnClass={btnClass} label={label} />;
  }
}

export default Form;
