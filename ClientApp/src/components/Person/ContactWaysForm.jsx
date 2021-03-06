import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { savePerson } from "../../services/personService";
import { getRoles } from "../../services/roleService";
import { toast } from "react-toastify";

class ContactWaysForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      shortName: "",
      password: "",
      roleId: ""
    },
    genres: [],
    errors: {}
  };

  /*  schema = {
    id: Joi.number().required(),
    firstName: Joi.string()
      .required()
      .label("First name"),
    lastName: Joi.string()
      .required()
      .label("Last name"),
    shortName: Joi.string()
      .required()
      .label("Short name"),
    roleId: Joi.string()
      .required()
      .label("Role"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  */

  componentWillReceiveProps(nextProps) {
    const newValue = this.mapToViewModel(nextProps.selectedPerson);
    if (newValue !== this.state.data) {
      this.setState({ data: newValue });
    }
  }

  mapToViewModel(person) {
    return {
      id: person.id,
      firstName: person.firstName,
      lastName: person.lastName,
      shortName: person.shortName,
      password: person.password
    };
  }

  doSubmit = async () => {
    const { data } = this.state;
    await savePerson(data);
    this.props.onSubmit(data);
    toast.success("Person with name " + data.firstName + " saved successfully");
  };

  componentDidReceiveProps() {
    this.setState({ data: this.mapToViewModel(this.props.selectedPerson) });
  }

  render() {
    return (
      <div>
        <h1>Person information</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("workTele", "Work - telephone")}
          {this.renderInput("workCel", "Work - cellphone")}
          {this.renderInput("workEmail", "Work - Email")}
          {this.renderInput("privateTele", "Private - telephone")}
          {this.renderInput("privateCell", "Private - cellphone")}
          {this.renderInput("privateEmail", "Private - Email")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default ContactWaysForm;
