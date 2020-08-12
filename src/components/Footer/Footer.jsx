/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">Lorem Ipsum</h1>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Lorem Ipsum
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Lorem Ipsum
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" tag={Link}>
                    Lorem Ipsum
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
