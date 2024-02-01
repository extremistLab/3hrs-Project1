import React from "react";

const ProductList = ({ orders, onDeleteOrder }) => {
  const groupedOrders = {};

  orders.forEach((order) => {
    const table = order.table;
    if (!groupedOrders[table]) {
      groupedOrders[table] = [];
    }
    groupedOrders[table].push(order);
  });

  const handleDeleteOrder = (table, orderId) => {
    // Call the onDeleteOrder prop to notify the parent component about the deletion
    onDeleteOrder(table, orderId);
  };

  return (
    <div>
      <h2>Product List</h2>
      {Object.entries(groupedOrders).map(([table, tableOrders]) => (
        <div key={table}>
          <h3>{table}</h3>
          <ul>
            {tableOrders.map((order) => (
              <li key={order.uid}>
                <strong>Product: </strong> {order.name}, <strong>Price: </strong> ₹{order.price}
                <button
                  onClick={() => handleDeleteOrder(table, order.uid)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete Product
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
