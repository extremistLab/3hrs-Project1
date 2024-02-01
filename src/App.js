import React, { useState, useEffect } from "react";
import TableOrder from "./components/Product";
import MenuList from "./components/ProductList";

function App() {
  // Load orders from local storage on component mount
  const initialOrders = JSON.parse(localStorage.getItem("orders")) || [];
  const [orders, setOrders] = useState(initialOrders);

  // Update local storage whenever orders change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleOrderSubmit = (formData) => {
    // Validate the form data before adding the order
    if (formData.uid && formData.name && formData.price) {
      const newOrder = { ...formData, id: formData.uid };
      setOrders((prevOrders) => [...prevOrders, newOrder]);
    } else {
      alert("Please provide Unique Id, Dish Name, and Price before adding an order.");
    }
  };

  const handleDeleteOrder = (table, orderId) => {
    // Remove the order from the state
    const updatedOrders = orders.filter((order) => !(order.table === table && order.uid === orderId));
    setOrders(updatedOrders);

    // Update local storage with the updated orders
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="App">
      <h1>Sellers Admin Page</h1>
      <TableOrder onOrderSubmit={handleOrderSubmit} />
      <MenuList orders={orders} onDeleteOrder={handleDeleteOrder} />
    </div>
  );
}

export default App;
