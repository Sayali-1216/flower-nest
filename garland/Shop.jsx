import React, { useContext, useState } from "react";
import "./Shop.css";
import { ecomContext } from "./Home.jsx";
import { Link } from "react-router-dom";

const categories = [
  "All", "Wedding Garlands", "Festival Garlands", "Temple Garlands",
  "Home Decor Garlands", "Custom Garlands", "Floral Accessories"
];

const Shop = () => {
  const { products, handleAddToCart } = useContext(ecomContext);


  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cat === selectedCategory ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* <div className="product-grid" style={}> */}
      <div className="" style={{display:"flex",justifyContent:"space-around", flexWrap:'wrap', gap:"1rem",borderRadius:"0.5rem"}}>
        {filteredProducts.map((product) => (
          // <div key={product.id} className="product-card">
          <div key={product.id} className="" style={{width:"30%", height:'15rem'}}>
            <Link to={`/shop/${product.id}`}>

              <img src={product.image} alt={product.name} style={{width:'100%', height:"60%", objectFit:'cover'}} />
            </Link>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
