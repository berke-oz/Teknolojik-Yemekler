import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import PizzaOrderForm from './components/PizzaOrderForm';
import OrderConfirmation from './components/OrderConfirmation';
import Home from './components/Home';




function App() {
  const [orderData, setOrderData] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");


  const handleOrderSubmit = (formData) => {
    setOrderData(formData);
    setCurrentPage("confirmation");
  };

  const handlePageChange = () => {
    setCurrentPage("order");
  };

  return (
    <div>
      {currentPage === "home" && <Home onButtonClick={handlePageChange} />} {Home}
      {currentPage === "order" && <PizzaOrderForm onSubmitOrder={handleOrderSubmit} />} {PizzaOrderForm}
      {currentPage === "confirmation" && <OrderConfirmation orderData={orderData} />} {OrderConfirmation}
    </div>
  );
}

export default App;
