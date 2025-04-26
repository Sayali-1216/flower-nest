// import React, { useState } from 'react';
// import axios from 'axios';
// import './addProduct.css';   

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//     imageUrl: '',
//     category: ''
//   });

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Adjust the API URL and headers as per your backend setup
//       const response = await axios.post('http://garland.mohitsasane.tech/backend/api/products', product, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       alert('Product added successfully!');
//       setProduct({ name: '', description: '', price: '', imageUrl: '', category: '' });
//     } catch (error) {
//       alert('Error adding product.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h2>Add New Product</h2>
//       <form onSubmit={handleSubmit} className="add-product-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           value={product.name}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Product Description"
//           value={product.description}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={product.price}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="imageUrl"
//           placeholder="Image URL"
//           value={product.imageUrl}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category (e.g. Wedding, Festival)"
//           value={product.category}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;








import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css"; 

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://garland.mohitsasane.tech/backend/api/products", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Product added successfully!");
      setProduct({ name: "", description: "", price: "", image: "" }); // Reset form
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Check console for details.");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
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
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
