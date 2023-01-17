import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MDBInput } from "mdb-react-ui-kit";
import { React } from "react";


const CustomerSignup = () => {
    return (
        <Form className=" w-100">
          <Row>
            <Col>
            <h4> Create Your Account (Customer)</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <MDBInput
                label="First Name"
                className="mt-3"
                id="formControlLg"
                type="text"
                size="lg"
              />
            </Col>
            <Col>
              <MDBInput
                label="Last Name"
                className="mt-3"
                id="formControlLg"
                type="text"
                size="lg"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <MDBInput
                label="Email"
                className="mt-3"
                id="formControlLg"
                type="email"
                size="lg"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <MDBInput
                label="Phone"
                className="mt-3"
                id="formControlLg"
                type="text"
                size="lg"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <MDBInput
                label=" Address"
                className="mt-3"
                id="formControlLg"
                type="text"
                size="lg"
              />
            </Col>
            <Col>
              <MDBInput
                label="Pincode"
                className="mt-3"
                id="formControlLg"
                type="text"
                size="lg"
              />
            </Col>
          </Row>
    
          <Row>
            <Col className="mt-3" >
            <div className="form-check form-check-inline ">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                />
              <label class="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>
    
            <div className="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
                </Col>
          </Row>
          <Row>
            <Col>
              <MDBInput
                label="Password"
                className="mt-3"
                id="formControlLg"
                type="password"
                size="lg"
              />
            </Col>
            <Col>
              <MDBInput
                label="Confirm Password"
                className="mt-3"
                id="formControlLg"
                type="password"
                size="lg"
              />
            </Col>
          </Row>
          <Row>
            <Col className="mt-3 d-flex align-items-center  ">
            <Button className="me-2" variant="primary">Register</Button>
            <p className="m-0">Already have an account?</p>
            </Col>
          </Row>
        </Form>
      );
  
}

export default CustomerSignup