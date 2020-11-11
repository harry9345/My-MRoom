import React from "react";
import "./Logo.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../asset/logo.png";

function Logo() {
  return (
    <Container>
      <Row>
        <Col>
          <img className="img" src={logo} alt={""} />
        </Col>
      </Row>
    </Container>
  );
}

export default Logo;
