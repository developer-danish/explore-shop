import React from "react";
import Home from "./auth/Home";
import { Routes, Route } from "react-router-dom";
import CustomerDashboard from './customer/CustomerDashboard';
import SellerDashboard from './seller/SellerDashboard';
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
        </Routes>
      </div>
  );
}

export default App;
