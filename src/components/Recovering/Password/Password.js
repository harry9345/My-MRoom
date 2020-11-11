import React from "react";
import "./Password.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RegHeader from "../../Register/RegHeader/RegHeader";

class PassRecover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 122,
    };
  }
  render() {
    return (
      <Container className="passCon">
        <Row>
          <Col className="passCol">
            <RegHeader />
          </Col>
        </Row>
        <Row className="passHeader">
          <Col>
            <h1 class="passH1">Password recovery</h1>
            <p class="pPassSbtitle">
              With this form you can create or recover a password if you are
              already a M&nbsp;Room customer.
            </p>
            <h4>{this.state.number}</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PassRecover;
