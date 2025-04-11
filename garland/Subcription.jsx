import React, { useState } from "react";
import "./Subcription.css";

const productList = [
  {
    id: 1,
    name: "Pink Rose Wedding Garland",
    image: "https://5.imimg.com/data5/GJ/DH/WH/SELLER-32786584/weddingmarriage-garland-3-.jpg",
    plans: {
      daily: 100,
      weekly: 500,
      monthly: 1800
    }
  },
  {
    id: 2,
    name: "Golden Marigold Garland",
    image: "https://c3t6b9h6.delivery.rocketcdn.me/wp-content/uploads/2021/10/Chendupoo-Needle-Garland-1.png",
    plans: {
      daily: 120,
      weekly: 600,
      monthly: 2000
    }
  },
];

const Subscription = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <div className="subscription-container">
      <h2>Step 1: Choose a Product for Subscription</h2>
      <div className="product-list">
        {productList.map((product) => (
          <div
            key={product.id}
            className={`product-card ${selectedProduct?.id === product.id ? "selected" : ""}`}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <>
          <h2>Step 2: Choose Your Plan</h2>
          <div className="plan-options">
            {["daily", "weekly", "monthly"].map((plan) => (
              <button
                key={plan}
                className={`plan-btn ${selectedPlan === plan ? "active" : ""}`}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)} - ₹{selectedProduct.plans[plan]}
              </button>
            ))}
          </div>

          {selectedPlan && (
            <div className="summary">
              <h3>📝 Subscription Summary</h3>
              <p><strong>Product:</strong> {selectedProduct.name}</p>
              <p><strong>Plan:</strong> {selectedPlan}</p>
              <p><strong>Price:</strong> ₹{selectedProduct.plans[selectedPlan]}</p>
              <button className="confirm-btn">Confirm Subscription</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Subscription;
