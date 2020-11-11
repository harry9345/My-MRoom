import React from "react";
import "./RegHeader.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function RegHeader() {
  return (
    <Container>
      <Row>
        <Col className="regHedCol">
          <a href={"../login/login.js"}>
            <ArrowBackIcon />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default RegHeader;
