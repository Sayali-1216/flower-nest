import React, { useState } from "react";
import "./CustomOrder.css";
import axios from "axios";

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    reference_image_url: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://garland.mohitsasane.tech/api/custom-orders", formData)
      .then((response) => {
        console.log("Custom order success:", response.data);
        alert("Order confirmed!");
        setFormData({
          title: "",
          description: "",
          reference_image_url: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Custom order error:", error);
        alert("Something went wrong while submitting your order.");
      });
  };

  return (
    <section className="custom-order">
      <div className="custom-order-container">
        <h2 className="custom-order-title">Create Your Custom Garland</h2>
        <p className="custom-order-subtitle">
          Tell us your requirements, and we’ll craft the perfect garland for you.
        </p>

        <form className="custom-order-form" onSubmit={handleSubmit}>
          <label>Enter Title :</label>
          <input
            type="text"
            name="title"
            // placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <label>Describe your custom garland (colors, flowers, size, etc.) :</label>
          <input
            type="text"
            name="description"
            // placeholder="Describe your custom garland (colors, flowers, size, etc.)"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <label>Reference image URL :</label>
          <input
            type="text"
            name="reference_image_url"
            // placeholder="Reference image URL"
            value={formData.reference_image_url}
            onChange={handleChange}
          />
          <label>Any additional message :</label>
          <input
            type="text"
            name="message"
            // placeholder="Any additional message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="custom-order-btn">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomOrder;
