



import React, { useContext, useState, useEffect } from 'react';
import { ecomContext } from './Home';
import "./Cart.css";

const Cart = () => {
  const { cart, setCart } = useContext(ecomContext);

  const parsePrice = (priceString) => {
    return Number(priceString.replace(/[₹,]/g, ''));
  };

  const calculateSubTotal = () => {
    return cart.reduce((acc, item) => {
      const price = parsePrice(item.price);
      const quantity = item.quantity || 1;
      return acc + (price * quantity);
    }, 0);
  };

  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    const newSubTotal = calculateSubTotal();
    setSubTotal(newSubTotal);
    setShipping(cart.length > 0 ? 50 : 0); // Flat ₹50 shipping
    setTax(Math.round(newSubTotal * 0.1)); // 10% tax
  }, [cart]);

  const handleRemoveFromCart = (idToRemove) => {
    const updatedCart = cart.filter(item => item.id !== idToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // optional: persist update
  };

  return (
    <>
      <h1 className='cart-title'>Cart</h1>
      <div className="cart-container">
        <div className="left">
          {cart.length > 0 ? cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="100" />
              <div>
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity || 1}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          )) : (
            <p className="empty-msg">Your cart is empty...</p>
          )}
        </div>
        <div className="right">
          <p><strong>Subtotal:</strong> <span>₹{subTotal}</span></p>
          <p><strong>Shipping:</strong> <span>₹{shipping}</span></p>
          <p><strong>Tax:</strong> <span>₹{tax}</span></p>
          <hr />
          <p><strong>Total:</strong> <span>₹{subTotal + shipping + tax}</span></p>
        </div>
      </div>
    </>
  );
};

export default Cart;

