import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { savePerson } from "../../services/personService";
import { getRoles } from "../../services/roleService";
import { toast } from "react-toastify";

class PersonalDataForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      shortName: "",
      password: "",
      roleId: ""
    },
    roles: [],
    errors: {}
  };

  schema = {
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

  componentWillReceiveProps(nextProps) {
    const newValue = this.mapToViewModel(nextProps.selectedPerson);
    if (newValue !== this.state.data) {
      this.setState({ data: newValue });
    }
  }

  async componentDidMount() {
    const { data } = await getRoles();
    const roles = [...data];
    this.setState({ roles });
  }

  mapToViewModel(person) {
    return {
      id: person.id,
      firstName: person.firstName,
      lastName: person.lastName,
      shortName: person.shortName,
      password: person.password,
      roleId: person.roleId
    };
  }

  doSubmit = async () => {
    const { data } = this.state;
    try {
      await savePerson(data);
      this.props.onSubmit(data);
      toast.success(
        "Person with name " + data.firstName + " saved successfully"
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error(
          "Person with name " + data.firstName + " could not be saved"
        );
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Person information</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First name")}
          {this.renderInput("lastName", "Last name")}
          {this.renderInput("shortName", "Short Name")}
          {this.renderSelect("roleId", "Role", this.state.genres)}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default PersonalDataForm;
