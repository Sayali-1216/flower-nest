import React, { useState } from 'react';
import "./DeleteProduct.css";


const DeleteProduct = () => {
  const [productId, setProductId] = useState('');

  const handleDelete = () => {
    console.log('Deleting product with ID:', productId);
    // Make delete request here
    alert('Product deleted (mock)');
  };

  return (
    <div className="delete-form-container">
      <h2>Delete Product</h2>
      <form className="delete-form" onSubmit={(e) => { e.preventDefault(); handleDelete(); }}>
        <label>Product ID:</label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Enter Product ID"
          required
        />
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default DeleteProduct;
