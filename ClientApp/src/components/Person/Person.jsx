import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { getPersons } from "../../services/personService";
import PersonNav from "./PersonNav";
import ListOfPersons from "./ListOfPersons";

export default class Person extends Component {
  state = {
    persons: [],
    selectedPerson: {
      id: 0,
      firstName: "",
      lastName: "",
      shortName: "",
      password: "",
      roleId: 0
    }
  };

  async componentDidMount() {
    const { data: persons } = await getPersons();
    this.setState({ persons });
  }

  handlePersonClick = person => {
    this.setState({ selectedPerson: person });
  };

  handlePersonSaved = person => {
    let listOfPersons = [...this.state.persons];
    listOfPersons.push(person);
    this.setState({ persons: listOfPersons });
  };

  handlePersonDeleted = person => {
    let listOfPersons = [...this.state.persons].filter(x => x.id !== person.id);
    this.setState({ persons: listOfPersons });
    this.resetForm();
  }

  resetForm = () => {
    const newPerson = {
      id: 0,
      firstName: "",
      lastName: "",
      shortName: "",
      password: "",
      roleId: 0
    };
    this.setState({ selectedPerson: newPerson });

  }

  render() {
    const { persons, selectedPerson } = this.state;
    return (
      <Grid>
        <Row>
          <Col sm={3}>
            <Button bsStyle="primary" onClick={this.resetForm}>
              New person
            </Button>
            <Button onClick={() => this.handlePersonDeleted(this.state.selectedPerson)}>
              Delete person
            </Button>
            <ListOfPersons persons={persons} onClick={this.handlePersonClick} />
          </Col>
          <Col sm={9}>
            <PersonNav
              onSubmit={this.handlePersonSaved}
              selectedPerson={selectedPerson}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
