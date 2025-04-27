




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
      const res = await axios.get('http://garland.mohitsasane.tech/backend/api/products/products', {
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
      const response= await axios.delete(`http://garland.mohitsasane.tech/backend/api/products/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // setProducts(products.filter(p => p.id !== id));
      fetchProducts()

      console.log(response.data,"response.data")
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
                <button onClick={() => 
                navigate(`/admin/update/${product.product_id}`)

                // console.log(product.product_id,"this is product")

                } className='update'>✏️ Update</button>
                <button className="delete" onClick={() => handleDelete(product.product_id)}>🗑️ Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
