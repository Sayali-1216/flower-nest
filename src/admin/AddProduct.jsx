
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./addProduct.css"; 
import Dropdown from "../component/Dropdown";
import { category_options } from "../data/constant";
import InputField from "../component/InputField";
import TextAreaField from "../component/TextAreafield";

const AddProduct = () => {
  const [categoryId,setCategoryId]=useState(0);
  console.log(categoryId,'categoryid');
  console.log("name= ",category_options.value);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: '',
    image_url: "",
    stock:50,
    category_id:0,
  });



  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response= await axios.post("https://garland.mohitsasane.tech/backend/api/products/products", 
        {
          ...product,price:Number(product.price),category_id:Number(categoryId)
        }
        , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Product added successfully!");
      console.log(response.data,"postCall data")
      // setProduct({ name: "", description: "", price: "", image: "" }); // Reset form
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Check console for details.");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
      
        <InputField 
        //  label="Name"
         name="name"
         value={product.value}
         onChange={handleChange}
         placeholder="Enter Product Name"

        />
        <TextAreaField
         name="description"
         value={product.description}
         onChange={handleChange}
         placeholder="Product Description"

        />
         <InputField 
        //  label="Name"
         name="price"
         value={product.value}
         onChange={handleChange}
         placeholder="Enter Price"

        />
         <InputField 
        //  label="Name"
         name="image_url"
         value={product.value}
         onChange={handleChange}
         placeholder="Enter image url"

        />
      
        <Dropdown options={category_options} onChange={setCategoryId} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
