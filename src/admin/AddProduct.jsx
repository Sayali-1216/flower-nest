import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [form, setForm] = useState({ title: "", price: "", image: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://your-api.com/api/products", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
    });
    alert("Product added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddProduct;
