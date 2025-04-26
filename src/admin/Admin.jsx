




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaPlusCircle, FaTrashAlt, FaEdit } from "react-icons/fa";
// import "./admin.css";

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="admin-wrapper">
//       <h2 className="admin-heading">Admin Dashboard</h2>
//       <div className="admin-cards">
//         <div className="admin-card" onClick={() => navigate("/admin/add-product")}>
//           <FaPlusCircle className="admin-icon" />
//           <p>Add Product</p>
//         </div>
//         <div className="admin-card" onClick={() => navigate("/admin/delete-product")}>
//           <FaTrashAlt className="admin-icon" />
//           <p>Delete Product</p>
//         </div>
//         <div className="admin-card" onClick={() => navigate("/admin/update-product")}>
//           <FaEdit className="admin-icon" />
//           <p>Update Product</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://garland.mohitsasane.tech/backend/api/products', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://garland.mohitsasane.tech/backend/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <button className="add-btn" onClick={() => navigate('/admin/add')}>➕ Add Product</button>
      <div className="product-list" >
        {products.map(product => (
          <div className="product-card1" key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>₹{product.price}</p>
              <div className="admin-actions">
                <button onClick={() => navigate(`/admin/update/${product.id}`)} className='update'>✏️ Update</button>
                <button className="delete" onClick={() => handleDelete(product.id)}>🗑️ Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
