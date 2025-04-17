// import React, { useContext, useState,useEffect } from "react";
// import "./Shop.css";
// import { ecomContext } from "../router/Home.jsx";
// import { Link } from "react-router-dom";
// import axios from "axios";
// const categories = [
//   "All", "Wedding Garlands", "Festival Garlands", "Temple Rituals",
//   "Home Decor ", "Bouquets", "Floral Accessories"
// ];

// const Shop = () => {
//   const {  handleAddToCart } = useContext(ecomContext);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('')
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.error('Error fetching products:', err);
//       });
//   }, []);




//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProducts = selectedCategory === "All"
//     ? products
//     : products.filter((product) => product.category === selectedCategory);

//   return (
//     <div className="shop-container">
//       <h1>Shop</h1>
//       <div className="category-buttons">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={cat === selectedCategory ? "active" : ""}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
//       <div className="product-grid" >
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="product-card">
//             <Link to={`/shop/${product.id}`}>

//               <img src={product.image} alt={product.name} style={{width:'100%', height:"60%", objectFit:'cover'}} />
//             </Link>
//             <h3>{product.name}</h3>
//             <p>₹{product.price}</p>
//             <button onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;



import React, { useContext, useState, useEffect } from "react";
import "./Shop.css";
import { ecomContext } from "../router/Home.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const categories = [
  "All", "Wedding Garlands", "Festival Garlands", "Temple Rituals",
  "Home Decor", "Bouquets", "Floral Accessories"
];

const categoryMap = {
  1: "Wedding Garlands",
  2: "Festival Garlands",
  3: "Temple Rituals",
  4: "Home Decor",
  5: "Bouquets",
  6: "Floral Accessories"
};

const Shop = () => {
  const { handleAddToCart } = useContext(ecomContext);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios.get("http://garland.mohitsasane.tech/api/products")
      .then((res) => {
        setProducts(res.data);
        console.log("Fetched Products:", res.data); // for debugging
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(
        (product) => categoryMap[product.category_id] === selectedCategory
      );

  return (
    <div className="shop-container">
      <h1>Shop</h1>
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

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="product-card">
            <Link to={`/shop/${product.product_id}`}>
              <img
                src={
                  product.image_url && product.image_url.startsWith("http")
                    ? product.image_url
                    : "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={product.name}
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
              />
            </Link>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;







