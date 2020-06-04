import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopinglist</NavbarBrand>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen}></Collapse>
          </Container>
          <Nav>
            <NavItem>
              <NavLink href="www.google.com">
                <RegisterModal />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;