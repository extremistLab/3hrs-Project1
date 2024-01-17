import React, { useState } from 'react';
import './App.css';
import TableOrder from './components/TableOrder';
import MenuList from './components/MenuList';

function App() {
  const [orders, setOrders] = useState([]);

  const handleOrderSubmit = (formData) => {
    setOrders((prevOrders) => [...prevOrders, { ...formData, id: formData.uid }]);
  };
  const handleDeleteOrder = (table, orderId) => {
    // Implement your logic to delete the order from the state
    const updatedOrders = orders.filter((order) => !(order.table === table && order.uid === orderId));
    setOrders(updatedOrders);
  };

  return (
   
    <div className="App">
       <h2>Resturant App</h2>
      <TableOrder onOrderSubmit={handleOrderSubmit} />
      <MenuList orders={orders} onDeleteOrder={handleDeleteOrder} />
    </div>
  );
}

export default App;
