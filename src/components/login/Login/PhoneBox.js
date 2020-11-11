import React from "react";
import "./PhoneBox.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";

class PhoneBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
    };
  }
  render() {
    return (
      <>
        <Container className="mainConSetting">
          <Col className="formCol">
            <Form>
              <Form.Group>
                <Form.Label className="lable" for="phone">
                  Phone number
                </Form.Label>
                <Form.Control className="control" as="select">
                  <option value="+358">Finland</option>
                  <option value="+46">Sweden</option>
                  <option value="+45" selected="">
                    Denmark
                  </option>
                  <option value="+47">Norway</option>
                  <option value="+1">United States</option>
                  <option value="+372">Estonia</option>
                </Form.Control>
                <FormControl
                  aria-describedby="basic-addon1"
                  className="inputClass"
                  type="number"
                  value={this.state.phoneNumber}
                />
              </Form.Group>
            </Form>
          </Col>
        </Container>
      </>
    );
  }
}
export default PhoneBox;
