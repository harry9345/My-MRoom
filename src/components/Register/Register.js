import React from "react";
import "./Register.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RegHeader from "./RegHeader/RegHeader";
import Member from "./Member/Member";
import Registering from "./Registring/Registering";

function Register() {
  return (
    <Container className="registerCon">
      <Row>
        <Col>
          <RegHeader />
        </Col>
      </Row>

      <Member />

      <Row>
        <Col>
          <Registering />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
