import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import PersonalDataForm from "./PersonalDataForm";

const PersonNav = ({ selectedPerson, onSubmit }) => {
  return (
    <div>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Personal data">
          <PersonalDataForm
            onSubmit={onSubmit}
            selectedPerson={selectedPerson}
          />
        </Tab>
        <Tab eventKey={2} title="Adress" />
        <Tab eventKey={3} title="Contact ways" />
      </Tabs>
    </div>
  );
};

export default PersonNav;
