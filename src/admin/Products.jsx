import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://your-api.com/api/products");
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://your-api.com/api/products/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
    });
    fetchProducts();
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <button onClick={() => window.location.href = "/admin/add-product"}>Add Product</button>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price}
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
            <button onClick={() => window.location.href = `/admin/edit-product/${p.id}`}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProducts;
