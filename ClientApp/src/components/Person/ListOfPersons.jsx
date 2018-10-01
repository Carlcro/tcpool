import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class ListOfPersons extends Component {
  render() {
    const { persons, onClick } = this.props;
    return (
      <div>
        <Table className="clickable"  bordered condensed hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {persons.map(person => (
              <tr key={person.id} onClick={() => onClick(person)}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
