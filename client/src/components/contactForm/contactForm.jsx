import React, { Component } from "react";

import Input from "../input/input.jsx";

import { Button } from "../button/button.jsx";

import { FormError } from "../formError/formError.jsx";

import "./contactForm.css";

export class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    errors: {},
  };

  validation = {
    name: {
      isRequired: true,
    },
    email: {
      isRequired: true,
      isEmail: true,
    },
    message: {
      isRequired: true,
    },
  };

  validateField(fieldName, value) {
    const fieldValidation = this.validation[fieldName];

    let error;

    if (fieldValidation.isRequired && !value) {
      error = "This field is required";
    } else if (fieldValidation.isEmail) {
      const regexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

      if (!regexp.test(value)) {
        error = "This field should be a valid email";
      }
    }

    return error;
  }

  validate() {
    const fields = ["name", "email", "message"];
    const { errors } = this.state;
    let formIsValid = true;

    fields.forEach((fieldName) => {
      const value = this.state[fieldName];
      const error = this.validateField(fieldName, value);

      if (error) {
        errors[fieldName] = error;
        formIsValid = false;
      } else {
        delete errors[fieldName];
      }
    });

    this.setState({ errors });
    return formIsValid;
  }

  changeFormParam = (fieldName, value) => {
    const { errors } = this.state;
    this.setState({ [fieldName]: value });
    const error = this.validateField(fieldName, value);

    if (error) {
      errors[fieldName] = error;
    } else {
      delete errors[fieldName];
    }

    this.setState({ errors });
  };

  changeMessage(event) {
    this.changeFormParam("message", event.target.value);
  }

  handleSubmit() {
    const formIsValid = this.validate();
    const { name, email, message } = this.state;
    const { onSubmit } = this.props;

    if (formIsValid && onSubmit) {
      onSubmit({ name, email, message });
    }
  }

  render() {
    const { name, email, message, errors } = this.state;

    return (
      <form className="contact-form">
        <ul className="contact-form__list">
          <li className="contact-form__input">
            <div className="contact-form__field">
              <Input
                required
                type="text"
                size="large"
                value={name}
                name="name"
                placeholder="Your name"
                onChange={this.changeFormParam}
              />
              <FormError error={errors.name} />
            </div>
            <div className="contact-form__field">
              <Input
                required
                type="text"
                size="large"
                value={email}
                name="email"
                placeholder="Your Email"
                onChange={this.changeFormParam}
              />
              <FormError error={errors.email} />
            </div>
          </li>
          <li className="contact-form__textarea">
            <textarea
              required
              rows={8}
              type="text"
              value={message}
              name="message"
              placeholder="Message"
              className="textarea__element"
              onChange={(event) => this.changeMessage(event)}
            />
            <FormError error={errors.message} />
          </li>
          <li className="contact-form__button">
            <Button
              size="l"
              rounding="both"
              clickEvent={(event) => this.handleSubmit(event)}
              disabled={!this.state.formValid}
            >
              SEND MESSAGE
            </Button>
          </li>
        </ul>
      </form>
    );
  }
}
