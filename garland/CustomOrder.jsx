import React, { useState } from "react";
import "./CustomOrder.css";

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We received your custom order request.`);
    setFormData({ name: "", email: "", details: "" });
  };

  return (
    <section className="custom-order">
      <div className="custom-order-container">
        <h2 className="custom-order-title">Create Your Custom Garland</h2>
        <p className="custom-order-subtitle">Tell us your requirements, and we’ll craft the perfect garland for you.</p>

        <form className="custom-order-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="details"
            placeholder="Describe your custom garland (colors, flowers, size, etc.)"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="custom-order-btn">Submit Request</button>
        </form>
      </div>
    </section>
  );
};

export default CustomOrder;
