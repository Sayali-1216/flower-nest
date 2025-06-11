import React, { useContext } from 'react';
import { ecomContext } from '../router/Home';
import { useNavigate } from 'react-router-dom';
import { orderPostCall } from '../util/api'; 
import { toast } from 'react-toastify';
import './CheckOut.css';
import Order from './Order';

const CheckOut = () => {
  const { cart, setCart, isLoggedIn ,subTotal,shipping,tax,total} = useContext(ecomContext);
  const navigate = useNavigate();

  // const calculateSubTotal = () => {
  //   return cart.reduce((acc, item) => {
  //     const price = item.price;
  //     const quantity = item.quantity || 1;
  //     return acc + (price * quantity);
  //   }, 0);
  // };

  // const subTotal = calculateSubTotal();
  // const shipping = cart.length > 0 ? 50 : 0;
  // const tax = Math.round(subTotal * 0.1);
  // const total = subTotal + shipping + tax;



  const handlePlaceOrder = async () => {
    if (!isLoggedIn) {
      toast.error("Please log in to place an order!");
      return;
    }
  
    if (cart.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }
  
    const items = cart.map(item => ({
      product_id: item.product_id,
      quantity: item.quantity || 1
    }));
  
// const orderPayload = {
//     items,
//     total_amount: total, // Include total here
//   };

  const response = await orderPostCall(items);
  
    if (response) {
      toast.success("Order placed successfully!");
      setCart([]);  
      localStorage.removeItem("cart"); 
      // navigate(`/order/${response.orderId}`); 
       navigate("/order");
    }
  };
  


  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <div className="checkout-summary">
          <p><strong>Subtotal:</strong> ₹{subTotal}</p>
          <p><strong>Shipping:</strong> ₹{shipping}</p>
          <p><strong>Tax:</strong> ₹{tax}</p>
          <hr />
          <p><strong>Total:</strong> ₹{total}</p>

          <button className="checkout-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      ) : (
        <p>Your cart is empty. <a href="/shop">Shop now</a></p>
      )}
    </div>
  );
};

export default CheckOut;
