
import React, { useEffect, useState ,useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ecomContext } from "../router/Home.jsx";

import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams(); // from URL
  const [product, setProduct] = useState(null);
  const { handleAddToCart } = useContext(ecomContext);

  useEffect(() => {
    if (id) {
      axios.get(`https://garland.mohitsasane.tech/backend/api/products/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        });
    }
  }, [id]);

  return (
    <>
      {product ? (
        <div className='singleproduct-container'>
          <div>
            <img src={product.image_url || "https://via.placeholder.com/300x200?text=No+Image"} alt={product.name} />
          </div>
          <div className='singleProduct-info'>
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category_name}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button onClick={(e) => handleAddToCart(e, product)}>Add To Cart</button>
            {/* You can add a cart button here if needed */}
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </>
  );
};

export default SingleProduct;



