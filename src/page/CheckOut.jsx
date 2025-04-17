import React from "react";
// import { useCart } from "./CartContext";
import { useContext } from "react";
import { ecomContext } from "../router/Home";

const Checkout = () => {
  // const { cartItems } = useCart();
    const { cart, setCart } = useContext(ecomContext);
  

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${total.toFixed(2)}</p>
      <h1>Order Confirmed</h1>
      <button>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
