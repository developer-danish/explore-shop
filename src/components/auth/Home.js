import React from 'react'
import frontImage from '../images/frontImage.jpeg'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Signin from './Signin';
import SellerSignup from './SellerSignup';
import CustomerSignup from './CustomerSignup';

const Home = () => {
  return (
    <div className='main-signup '>
      <div className='container-fluid p-0 d-flex justify-content-center align-items-center'>
        <div className='row w-100'>
          <Col sm={12} lg={7} className="p-0">
            <div className='front-image p-0'>
              <div className="btns">
                <Button className='me-4 btn' variant="outline-info">Seller</Button>
                <Button className='btn' variant="outline-info">Customer</Button>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={5} className="p-5 d-flex align-items-center ">
            {/* <SellerSignup /> */}
            <Signin />
            {/* <CustomerSignup /> */}
          </Col>
        </div>
      </div>
    </div>
  )
}

export default Home