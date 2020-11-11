import React from "react";
import "./Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header/Header";
import Main from "./Main";
import Footer from "../Footer/Footer";

function Login() {
  return (
    <Container className="mainCon">
      <Row>
        <Header />
      </Row>
      <Row className="mainRow">
        <Col>
          <Main />
        </Col>
      </Row>
      <div className="footerRow">
        <Col>
          <Footer />
        </Col>
      </div>
    </Container>
  );
}

export default Login;
