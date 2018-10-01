import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const WorkplaceNav = () => {
  return (
    <div>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Allmänt" />
        <Tab eventKey={2} title="Adress" />
        <Tab eventKey={3} title="Kontakpersoner" />
        <Tab eventKey={4} title="Yrkeskategorier" />
        <Tab eventKey={5} title="Kompetenskrav" />
        <Tab eventKey={6} title="Time Care" />
      </Tabs>
    </div>
  );
};

export default WorkplaceNav;
