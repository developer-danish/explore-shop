import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import { React } from "react";

function SellerSignup({handleLogin}) {
  return (
    <Form className=" w-100">
      <Row>
        <Col>
        <h4> Create Your Account (Seller)</h4>
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
            label="Shop Address"
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
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            />
          <label class="form-check-label" htmlFor="inlineRadio1">
            Male
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
            />
          <label className="form-check-label" htmlFor="inlineRadio2">
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
        <p className="m-0">Already have an account? <span onClick={handleLogin}>Login</span></p>
        </Col>
      </Row>
    </Form>
  );
}

export default SellerSignup;
