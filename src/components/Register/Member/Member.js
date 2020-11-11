import React from "react";
import "./Member.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Member() {
  return (
    <Container className="s-Header ">
      <Row>
        <Col>
          <h1> Register</h1>
          <p>Get credentials immediately by filling the form below.</p>
          <div className="inline">
            <div className="cline">
              <h4>Note! Are you already an M&nbsp;Room customer?</h4>
              <p className="ClineP">
                Create or recover a password to My&nbsp;M&nbsp;Room instead of
                registering as a new customer.
              </p>
              <div className="link">
                <Link className="Alink " to="../../Recovering/Recover">
                  Create or recover password
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Member;
