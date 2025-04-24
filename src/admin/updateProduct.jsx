import React, { useState } from 'react';
import './UpdateProduct.css';

const UpdateProduct = () => {
  const [productId, setProductId] = useState('');
  const [updates, setUpdates] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleUpdate = () => {
    console.log('Updating product:', { productId, updates });
    // Make update request here
    alert('Product updated (mock)');
  };

  return (
    <div className="update-form-container">
      <h2>Update Product</h2>
      <form className="update-form" onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <label>Product ID:</label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Enter Product ID"
          required
        />

        <label>New Name:</label>
        <input
          type="text"
          value={updates.name}
          onChange={(e) => setUpdates({ ...updates, name: e.target.value })}
        />

        <label>New Price:</label>
        <input
          type="number"
          value={updates.price}
          onChange={(e) => setUpdates({ ...updates, price: e.target.value })}
        />

        <label>New Description:</label>
        <textarea
          value={updates.description}
          onChange={(e) => setUpdates({ ...updates, description: e.target.value })}
        ></textarea>

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
