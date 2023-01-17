import React from 'react'
import frontImage from '../images/frontImage.jpeg'
import Form from "react-bootstrap/Form";
import { MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Signin = () => {
  return (
    <Form className=" w-100">
      <Row>
        <Col>
          <h4> Login</h4>
        </Col>
      </Row>
      <Row className='mt-4'>
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

      <Row className='mt-4'>
        <Col>
          <MDBInput
            label="Password"
            className="mt-3"
            id="formControlLg"
            type="password"
            size="lg"
          />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col className="mt-3 d-flex align-items-center  ">
          <Button className="me-2" variant="primary">
            Login
          </Button>
          <p className="m-0">Forget Password?</p>
        </Col>
      </Row>
    </Form>
  );
};

export default Signin;
