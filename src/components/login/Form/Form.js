import React from "react";
import "./Form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "@material-ui/core/Button";
import HTextBox from "../Login/HTextBox";

export default function Form() {
  return (
    <Container>
      <Row className="formRow ">
        <Col>
          <HTextBox />
        </Col>
      </Row>

      <Row className="formRow center">
        <Col className="center">
          <Button className="button" variant="outlined">
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
