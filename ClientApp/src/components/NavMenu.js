import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavMenu.css";

export default props => (
  <Navbar fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={"/"}>TimePool 2.0</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={"/"} exact>
          <NavItem>
            <i class="fas fa-home" /> Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to={"/personnel"}>
          <NavItem>
            <i className="fas fa-users" /> Personnel
          </NavItem>
        </LinkContainer>
        <LinkContainer to={"/workplace"}>
          <NavItem>
            <i class="fas fa-building" /> Workplace
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
