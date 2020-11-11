import React from "react";
import "./HTextBox.css";
import PhoneBox from "./PhoneBox";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function HTextBox() {
  return (
    <Container>
      <Row>
        <Col>
          <PhoneBox />
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}
