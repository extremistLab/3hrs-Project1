import React, { useState } from "react";

const TableOrder = ({ onOrderSubmit }) => {
  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    price: "",
    table: "Electronic Items", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.uid && formData.name && formData.price) {
      onOrderSubmit(formData);
      // Optionally, we can reset the form data after submission
      setFormData({
        uid: "",
        name: "",
        price: "",
        table: "Electronic Items",
      });
    } else {
      alert("Please provide Product Id, Product Name, and Selling Price before adding a product.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product Id: 
          <input
            type="text"
            name="uid"
            value={formData.uid}
            onChange={handleChange}
          />
        </label>
        
        <label>
          Product Name: 
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
       
        <label>
          Selling Price: 
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        
        <label>
          Category: 
          <select
            name="table"
            value={formData.table}
            onChange={handleChange}
          >
            <option value="Electronic Items">Electronics</option>
            <option value="Food Items">Food</option>
            <option value="Skin Care Items">Skin Care</option>
          </select>
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default TableOrder;
