import React, { useState } from "react";

const TableOrder = ({ onOrderSubmit }) => {
  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    price: "",
    table: "Table 1", // Default table value
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
      // Optionally, you can reset the form data after submission
      setFormData({
        uid: "",
        name: "",
        price: "",
        table: "Table 1",
      });
    } else {
      alert("Please provide Unique Id, Dish Name, and Price before adding an order.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Unique Id:
          <input
            type="text"
            name="uid"
            value={formData.uid}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Dish Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Table:
          <select
            name="table"
            value={formData.table}
            onChange={handleChange}
          >
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
          </select>
        </label>
        <br />

        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default TableOrder;
