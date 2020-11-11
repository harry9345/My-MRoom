import React from "react";
import "./Main.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Row>
            <Col>
              <Logo />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form />
            </Col>
          </Row>

          <Row>
            <Col className="center">
              <p>
                <Link to="../../Recovering/Recover">Create</Link>or
                <Link to="../../Recovering/Recover">Recover</Link>Passworld
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="center">
              <p>
                <Link to="../Register/Register">Register</Link>
                as new costumer
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
