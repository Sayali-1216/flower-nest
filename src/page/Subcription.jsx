import React, { useState } from 'react';
import './Subcription.css';
import { toast } from 'react-toastify'; 

const plans = ['Daily', 'Weekly', 'Monthly'];

const Subscription = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showStep2, setShowStep2] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Jasmine Gajra',
      price: { Daily: 20, Weekly: 120, Monthly: 400 },
      image: 'https://i.pinimg.com/736x/fb/50/ed/fb50ed60c6368d0bb501671dd366e09f.jpg'
    },
    {
      id: 2,
      name: 'Fresh  Betal Leaves (paan)',
      price: { Daily: 15, Weekly: 90, Monthly: 300 },
      image: 'https://www.shahigrocery.com/image/cache/catalog/product/paan%20leaves-700x700.jpg'
    },
    {
      id: 3,
      name: 'Puja Coconuts',
      price: { Daily: 25, Weekly: 140, Monthly: 450 },
      image: 'https://5.imimg.com/data5/DK/MQ/TE/SELLER-47860490/pooja-coconut-500x500.jpg'
    },
    {
      id: 4,
      name: 'Temple Marigold Garland',
      price: { Daily: 10, Weekly: 60, Monthly: 200 },
      image: 'https://c3t6b9h6.delivery.rocketcdn.me/wp-content/uploads/2023/08/Chendupoo-Needle-Garland-4.png'
    },
    {
      id: 5,
      name: 'Red Rose',
      price: { Daily: 30, Weekly: 180, Monthly: 600 },
      image: 'https://i.pinimg.com/736x/4c/0e/fd/4c0efdd7be898125de1a6bf83f041f67.jpg'
    },
    {
      id: 6,
      name: 'Puja Agarbatti',
      price: { Daily: 18, Weekly: 100, Monthly: 350 },
      image: 'https://rukminim3.flixcart.com/image/850/1000/kqo3onk0/incense-stick/y/r/v/agarbatti-for-pooja-incense-sticks-natural-aroma-jasmine-original-imag4m57fzsc783q.jpeg?q=90&crop=false'
    },
  ];


  const handleSubscribe = (plan) => {
    if (selectedProducts.length === 0) {
      toast.warning("Please select products to subscribe.");
      return;
    }

    toast.success(`Subscribed to ${plan} plan successfully!`, {
      position: "top-center",
      autoClose: 3000,
    });

  };

  const toggleProduct = (product) => {
    const isSelected = selectedProducts.find(p => p.id === product.id);
    const updated = isSelected
      ? selectedProducts.filter(p => p.id !== product.id)
      : [...selectedProducts, product];

    setSelectedProducts(updated);
    setShowStep2(updated.length > 0);
  };

  return (
    <div className="subscription-wrapper">
      <h1 className="main-heading">Fresh Blooms, Delivered Regularly</h1>
      <p className="quote">"Flowers are the music of the ground." 🌸</p>

      <div className="discount-banner">🎉 Get 20% OFF on Monthly Plans!</div>

      {/* Step 1 */}
      <div className="step-section">
        <h2>Step 1: Choose Your Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <div
              key={product.id}
              className={`product-card ${selectedProducts.find(p => p.id === product.id) ? 'selected' : ''}`}
              onClick={() => toggleProduct(product)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      {showStep2 && (
        <div className="step-section fade-in">
          <h2>Step 2: Choose Your Subscription Plan</h2>
          <div className="plans-container">
            {plans.map(plan => (
              <div key={plan} className="plan-card">
                <h3>{plan} Plan</h3>
                {selectedProducts.map(product => (
                  <p key={product.id}>
                    {product.name}: ₹{product.price[plan]}
                  </p>
                ))}
                <button
                  className="subscribe-btn"
                  onClick={() => handleSubscribe(plan)} 
                >
                  Subscribe to {plan}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;







// import React, { useState, useContext } from "react"; 
// import axios from "axios";
//  import "./Subcription.css";
//  import { ecomContext } from '../router/Home';


// const Subscription = () => {
//   const { userToken } = useContext(comContext);

//   const [selectedPlan, setSelectedPlan] = useState(null); const [loading, setLoading] = useState(false); const [responseMsg, setResponseMsg] = useState("");

//   const handlePlanSelect = (plan) => { setSelectedPlan(plan); setResponseMsg(""); };

//   const handleSubscribe = async () => {
//     if (!selectedPlan) { setResponseMsg("Please select a subscription plan."); return; }


//     if (!userToken) {
//       setResponseMsg("Please login to subscribe.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://garland.mohitsasane.tech/api/subscription",
//         {
//           type: selectedPlan,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setResponseMsg(res.data.message || "Subscription successful!");
//     } catch (error) {
//       console.error("Subscription Error:", error);
//       setResponseMsg("Failed to subscribe. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (<section className="subscription-container"> <h2 className="subscription-title">Choose Your Subscription</h2>


//     <div className="subscription-options">
//       <div
//         className={`plan-card ${selectedPlan === "daily" ? "selected" : ""}`}
//         onClick={() => handlePlanSelect("daily")}
//       >
//         <h3>Daily</h3>
//         <p>₹30/day</p>
//       </div>
//       <div
//         className={`plan-card ${selectedPlan === "weekly" ? "selected" : ""}`}
//         onClick={() => handlePlanSelect("weekly")}
//       >
//         <h3>Weekly</h3>
//         <p>₹180/week</p>
//       </div>
//       <div
//         className={`plan-card ${selectedPlan === "monthly" ? "selected" : ""}`}
//         onClick={() => handlePlanSelect("monthly")}
//       >
//         <h3>Monthly</h3>
//         <p>₹700/month</p>
//       </div>
//     </div>

//     <button
//       className="subscribe-btn"
//       onClick={handleSubscribe}
//       disabled={loading}
//     >
//       {loading ? "Subscribing..." : "Confirm Subscription"}
//     </button>

//     {responseMsg && <p className="subscription-msg">{responseMsg}</p>}
//   </section>
//   );
// };

// export default Subscription;














