// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AdminProducts() {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ name: '', price: '', image: '', product_id: null });

//   // Fetch all products
//   useEffect(() => {
//     axios.get('http://your-backend-url/api/products')
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   // Handle form input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Add or Update product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (form.product_id) {
//         // Update
//         await axios.put(`http://your-backend-url/api/products/${form.product_id}`, form);
//         alert('Product updated!');
//       } else {
//         // Add
//         await axios.post('http://your-backend-url/api/products', form);
//         alert('Product added!');
//       }
//       window.location.reload();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Delete product
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://your-backend-url/api/products/${id}`);
//       alert('Product deleted!');
//       setProducts(products.filter(p => p.product_id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Load product in form for editing
//   const handleEdit = (product) => {
//     setForm(product);
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Admin Product Management</h2>

//       {/* Product Form */}
//       <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
//         <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Product Name" required />
//         <input type="text" name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
//         <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Image URL" required />
//         <button type="submit">{form.product_id ? "Update" : "Add"} Product</button>
//       </form>

//       {/* Product List */}
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>ID</th><th>Name</th><th>Price</th><th>Image</th><th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(prod => (
//             <tr key={prod.product_id}>
//               <td>{prod.product_id}</td>
//               <td>{prod.name}</td>
//               <td>{prod.price}</td>
//               <td><img src={prod.image} alt="" height="50" /></td>
//               <td>
//                 <button onClick={() => handleEdit(prod)}>Edit</button>
//                 <button onClick={() => handleDelete(prod.product_id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminProducts;




import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaTrashAlt, FaEdit } from "react-icons/fa";
import "./admin.css";

const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-wrapper">
      <h2 className="admin-heading">Admin Dashboard</h2>
      <div className="admin-cards">
        <div className="admin-card" onClick={() => navigate("/admin/add-product")}>
          <FaPlusCircle className="admin-icon" />
          <p>Add Product</p>
        </div>
        <div className="admin-card" onClick={() => navigate("/admin/delete-product")}>
          <FaTrashAlt className="admin-icon" />
          <p>Delete Product</p>
        </div>
        <div className="admin-card" onClick={() => navigate("/admin/update-product")}>
          <FaEdit className="admin-icon" />
          <p>Update Product</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


