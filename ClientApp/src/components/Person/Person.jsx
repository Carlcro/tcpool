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
      roleId: null
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

  newPerson = () => {
    const newPerson = {
      id: 0,
      firstName: "",
      lastName: "",
      shortName: "",
      password: "",
      roleId: 3
    };
    this.setState({ selectedPerson: newPerson });
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={3}>
            <Button bsStyle="primary" onClick={this.newPerson}>
              New person
            </Button>
            <ListOfPersons
              persons={this.state.persons}
              onClick={this.handlePersonClick}
            />
          </Col>
          <Col sm={9}>
            <PersonNav
              onSubmit={this.handlePersonSaved}
              selectedPerson={this.state.selectedPerson}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
