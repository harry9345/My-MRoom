import React from "react";
import "./Recover.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RegHeader from "../Register/RegHeader/RegHeader";
import PhoneBox from "../login/Login/PhoneBox";
import { Link } from "react-router-dom";

function Recover() {
  return (
    <Container className="registerCon">
      <Row>
        <Col className="recCol">
          <RegHeader />

          <div className="s-settings__header">
            <h1>Password Recovery</h1>
            <p class="s-settings__subtitle">
              With this form you can create or recover a password if you are
              already a M&nbsp;Room customer.
            </p>
          </div>
          <div className="s-settings__content">
            <p className="pClass">
              First, input your phone number and we'll send you a confirmation
              code via SMS.
            </p>
            <PhoneBox />
            <div class="c-recovery-form__submit">
              <button class="c-btn c-btn--regular">
                <Link to="../Password/Password">Send</Link>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Recover;
