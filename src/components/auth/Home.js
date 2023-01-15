import React from 'react'
import Signup from './Signup'
import frontImage from '../images/frontImage.jpeg'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='main-signup '>
      <div className='container-fluid p-0 d-flex justify-content-center align-items-center'>
        <div className='row w-100'>
          <Col sm={12} lg={6} className="p-0">
            <div className='front-image p-0'>
              <div className="btns">
                <Button className='me-4 btn' variant="outline-info">Seller</Button>
                <Button className='btn' variant="outline-info">Customer</Button>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6} className="p-5 ">
            <Signup />
          </Col>
        </div>
      </div>
    </div>
  )
}

export default Home