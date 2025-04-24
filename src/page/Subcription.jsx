import React, { useState } from 'react';
import './Subcription.css';
import { toast } from 'react-toastify'; 
import axios from 'axios';

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


  // const handleSubscribe = (plan) => {
  //   if (selectedProducts.length === 0) {
  //     toast.warning("Please select products to subscribe.");
  //     return;
  //   }

  //   toast.success(`Subscribed to ${plan} plan successfully!`, {
  //     position: "top-center",
  //     autoClose: 3000,
  //   });

  // };


  const handleSubscribe = async (plan) => {
    if (selectedProducts.length === 0) {
      toast.warning("Please select products to subscribe.");
      return;
    }
  
    const token = localStorage.getItem('token');
  
    try {
      for (const product of selectedProducts) {
        await axios.post(
          'http://your-api-url.com/backend/api/subscription',
          {
            product_id: product.id,
            plan: plan
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      }
  
      toast.success(`Subscribed to ${plan} plan successfully!`, {
        position: "top-center",
        autoClose: 3000,
      });
  
      // Optional: reset selection after successful subscription
      setSelectedProducts([]);
      setShowStep2(false);
  
    } catch (error) {
      console.error('Subscription failed:', error);
      toast.error("Subscription failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
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





















