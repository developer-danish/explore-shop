import React, { useState } from 'react'
import frontImage from '../images/frontImage.jpeg'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Signin from './Signin';
import SellerSignup from './SellerSignup';
import CustomerSignup from './CustomerSignup';

const Home = () => {
  const [seller, setSeller] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSeller = () => {
    setSeller(true);
    setCustomer(false);
    setLogin(false);
  }

  const handleCustomer = () => {
    setCustomer(true);
    setSeller(false);
    setLogin(false);
  }

  const handleLogin = () => {
    setCustomer(false);
    setSeller(false);
    setLogin(true);
  }

  return (
    <div className='main-signup '>
      <div className='container-fluid p-0 d-flex justify-content-center align-items-center'>
        <div className='row w-100'>
          <Col sm={12} lg={6} className="p-0">
            <div className='front-image p-0'>
              <div className="btns">
                <Button onClick={handleSeller} className='me-4 btn' variant="outline-info">Seller</Button>
                <Button onClick={handleCustomer} className='btn' variant="outline-info">Customer</Button>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6} className="p-5 d-flex align-items-center ">
              {login && <Signin />}
              {seller && <SellerSignup handleLogin={handleLogin} />}
              {customer && <CustomerSignup handleLogin={handleLogin}  />}
          </Col>
        </div>
      </div>
    </div>
  )
}

export default Home