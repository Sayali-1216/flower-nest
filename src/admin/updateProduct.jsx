// import React, { useState } from 'react';
// import './UpdateProduct.css';

// const UpdateProduct = () => {
//   const [productId, setProductId] = useState('');
//   const [updates, setUpdates] = useState({
//     name: '',
//     price: '',
//     description: '',
//   });

//   const handleUpdate = () => {
//     console.log('Updating product:', { productId, updates });
//     // Make update request here
//     alert('Product updated (mock)');
//   };

//   return (
//     <div className="update-form-container">
//       <h2>Update Product</h2>
//       <form className="update-form" onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
//         <label>Product ID:</label>
//         <input
//           type="text"
//           value={productId}
//           onChange={(e) => setProductId(e.target.value)}
//           placeholder="Enter Product ID"
//           required
//         />

//         <label>New Name:</label>
//         <input
//           type="text"
//           value={updates.name}
//           onChange={(e) => setUpdates({ ...updates, name: e.target.value })}
//         />

//         <label>New Price:</label>
//         <input
//           type="number"
//           value={updates.price}
//           onChange={(e) => setUpdates({ ...updates, price: e.target.value })}
//         />

//         <label>New Description:</label>
//         <textarea
//           value={updates.description}
//           onChange={(e) => setUpdates({ ...updates, description: e.target.value })}
//         ></textarea>

//         <button type="submit">Update Product</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProduct;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateProduct.css"; // Link to CSS

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://garland.mohitsasane.tech/backend/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
      await axios.put(`http://garland.mohitsasane.tech/backend/api/products/${id}`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Product updated successfully!");
      navigate("/admin"); // Redirect to admin panel
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
          value={product.image}
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
