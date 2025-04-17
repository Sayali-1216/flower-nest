import React from 'react';
import './CustomBanner.css';

const CustomOrderBanner = () => {
  return (
    <div className="custom-order-banner">
      <div className="custom-order-overlay">
        <div className="custom-order-content">
          <h1>Create Your Own Custom Garland</h1>
          <p>Have something unique in mind? Share your idea, and we'll craft the perfect garland just for you!</p>
          <button onClick={() => window.location.href = "/custom"}>Start Custom Order</button>
        </div>
      </div>
    </div>
  );
};

export default CustomOrderBanner;
