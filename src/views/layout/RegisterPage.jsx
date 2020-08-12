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
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <>

        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col>

                    <Card className="card-register">
                      <CardHeader>
                        <h4 color="primary" className="text-center">Registrieren</h4>
                      </CardHeader>
                      <CardBody>
                        <Form className="form"
                              action="http://127.0.0.1:8080/users"
                              method="post"
                              onSubmit={this.handleSubmit}
                        >
                            <InputGroup>
                            <Input
                              placeholder="Vorname"
                              type="text"
                              label="firstName"
                              value={this.state.firstName}
                              onChange={this.handleChange}
                            />
                            </InputGroup>
                            <InputGroup>
                             <Input
                              placeholder="Nachname"
                              type="text"
                              label="lastName"
                              value={this.state.lastName}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                          <InputGroup>
                            <Input
                              placeholder="Email"
                              type="text"
                              label="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                          <InputGroup>
                            <Input
                              placeholder="Password"
                              type="text"
                              label="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button className="btn-round" color="primary" size="lg">
                          Bestätigen
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RegisterPage;
