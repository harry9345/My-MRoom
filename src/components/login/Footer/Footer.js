import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container className="footerContainer">
      <Col className="col">
        <a href="/">what is My M Room?</a>
      </Col>
    </Container>
  );
}

export default Footer;
