import React from "react";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${total.toFixed(2)}</p>
      <button>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
