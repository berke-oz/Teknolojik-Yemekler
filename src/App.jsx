import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import PizzaOrderForm from './components/PizzaOrderForm';
import OrderConfirmation from './components/OrderConfirmation';




function App() {
  const [orderData, setOrderData] = useState(null);

  const handleOrderSubmit = (formData) => {
    setOrderData(formData)
  }

  return (
    <div>
      {!orderData ? (
        <PizzaOrderForm onSubmitOrder={handleOrderSubmit} />
      ) : (
        <OrderConfirmation orderData={orderData} />
      )}
    </div>
  );
}


export default App
