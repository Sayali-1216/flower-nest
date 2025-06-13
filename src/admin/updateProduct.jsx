import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateProduct.css"; 

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image_url: ""
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`https://garland.mohitsasane.tech/backend/api/products/products/${id}`, { headers: { Authorization: `Bearer ${token}` } });

        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`https://garland.mohitsasane.tech/backend/api/products/products/${id}`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Product updated successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Check console for details.");
    }
  };

  return (
    <div className="update-product-container">
      <h2>Update Product</h2>
      <form className="update-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image_url}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
