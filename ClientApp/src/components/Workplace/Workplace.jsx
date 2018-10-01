import React from "react";
import CheckboxTree from "react-checkbox-tree";
import WorkplaceNav from "./WorplaceNav";
import { Grid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const nodes = [
  {
    value: "göteborg",
    label: "Göteborg",
    children: [
      { value: "dagis", label: "Dagis" },
      { value: "sjukhus", label: "Sjukhus" },
      { value: "sjukhus1", label: "Sjukhus1" },
      { value: "sjukhus2", label: "Sjukhus2" },
      {
        value: "sjukhus3",
        label: "Sjukhus3",
        children: [
          { value: "dagis", label: "Dagis" },
          { value: "sjukhus", label: "Sjukhus" },
          { value: "sjukhus1", label: "Sjukhus1" },
          { value: "sjukhus2", label: "Sjukhus2" },
          { value: "sjukhus3", label: "Sjukhus3" }
        ]
      }
    ]
  }
];

class Workplace extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: [],
      expanded: []
    };
  }

  onLeafClick = () => {
    console.log("hej");
  };

  render() {
    return (
      <Grid>
        <h1>Organisation</h1>
        <Row>
          <Col sm={3}>
            <CheckboxTree
              nodes={nodes}
              checked={this.state.checked}
              expanded={this.state.expanded}
              onCheck={checked => this.setState({ checked })}
              onExpand={expanded => this.setState({ expanded })}
              icons={{
                check: <span className="far fa-check-square" />,
                uncheck: <span className="rct-icon rct-icon-uncheck" />,
                halfCheck: <span className="rct-icon rct-icon-half-check" />,
                expandClose: <span className="fas fa-angle-right" />,
                expandOpen: <span className="fas fa-angle-down" />,
                expandAll: <span className="rct-icon rct-icon-expand-all" />,
                collapseAll: (
                  <span className="rct-icon rct-icon-collapse-all" />
                ),
                parentClose: <span className="far fa-folder" />,
                parentOpen: <span className="far fa-folder-open" />,
                leaf: <span className="far fa-folder" />
              }}
            />
          </Col>
          <Col sm={9}>
            <WorkplaceNav />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Workplace;

/*
      <CheckboxTree
        nodes={nodes}
        checked={this.state.checked}
        expanded={this.state.expanded}
        onCheck={checked => this.setState({ checked })}
        onExpand={expanded => this.setState({ expanded })}
        icons={{
          check: <span className="far fa-check-square" />,
          uncheck: <span className="rct-icon rct-icon-uncheck" />,
          halfCheck: <span className="rct-icon rct-icon-half-check" />,
          expandClose: <span className="fas fa-angle-right" />,
          expandOpen: <span className="fas fa-angle-down" />,
          expandAll: <span className="rct-icon rct-icon-expand-all" />,
          collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
          parentClose: <span className="rct-icon rct-icon-parent-close" />,
          parentOpen: <span className="rct-icon rct-icon-parent-open" />,
          leaf: <span className="rct-icon rct-icon-leaf" />
        }}
      />*/
