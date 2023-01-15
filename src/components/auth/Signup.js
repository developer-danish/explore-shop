import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import { React } from "react";

function Signup() {
  return (
    <Form className="p-3">
      <MDBInput
        label="Name"
        className="mt-3"
        id="formControlLg"
        type="text"
        size="sm"
      />
      <MDBInput
        label="Email"
        className="mt-3"
        id="formControlLg"
        type="email"
        size="sm"
      />
      <MDBInput
        label="Phone"
        className="mt-3"
        id="formControlLg"
        type="text"
        size="sm"
      />

      <MDBInput
        label="Password"
        className="mt-3"
        id="formControlLg"
        type="password"
        size="sm"
      />
      <MDBInput
        label="Confirm Password"
        className="mt-3 "
        id="formControlLg"
        type="password"
        size="sm"
      />

      <MDBInput
        label="Email"
        className="mt-3"
        id="formControlLg"
        type="email"
        size="sm"
      />
      <MDBInput
        label="Phone"
        className="mt-3"
        id="formControlLg"
        type="text"
        size="sm"
      />
    </Form>
  );
}

export default Signup;
