import React from "react";
import "./Registering.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PhoneBox from "../../login/Login/PhoneBox";
import Form from "react-bootstrap/Form";
import BUtton from "./BUtton";

function Registering() {
  return (
    <Container className="1">
      <Row>
        <Col>
          <PhoneBox />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label className="lable">First Name</Form.Label>
                <Form.Control
                  className="inputBox"
                  type="name"
                  placeholder="Name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label className="lable">Last Name</Form.Label>
                <Form.Control
                  className="inputBox"
                  type="name"
                  placeholder="Last Name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="Email">
                <Form.Label className="lable">Email</Form.Label>
                <Form.Control
                  className="inputBox"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="Password">
                <Form.Label className="lable">Password</Form.Label>
                <Form.Control
                  className="inputBox"
                  type="password"
                  placeholder="Password"
                />
                <Form.Text className="text-muted" id="passwordHelpBlock" muted>
                  Password must be at least 8 characters and include at least
                  one uppercase letter, one lowercase letter and one number.
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Form.Group className="checkbox" controlId="termCheckbox">
              <Form.Check type="checkbox" required value="on" />
              <label for="terms_accepted">
                I agree to the
                <a href="/">terms of use</a>
              </label>
            </Form.Group>
            <Form.Group className="checkbox" controlId="promoCheckbox">
              <Form.Check type="checkbox" />
              <label for="allow_email">M&nbsp;Room can send me email</label>
            </Form.Group>
          </Form>
          <Col className="buttonClass">
            <BUtton />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default Registering;
