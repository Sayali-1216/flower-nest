import axios from 'axios';
import { toast } from 'react-toastify';

export const cartPostCall = async (product_id, quantity = 1) => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please log in to add items to your cart!");
    return;
  }

  try {
    const response = await axios.post(
      "https://garland.mohitsasane.tech/backend/api/cart",
      { product_id, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    toast.success("Product added to cart!", { autoClose: 2000 });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    toast.error("Failed to add to cart!");
  }
};








export const orderPostCall = async (items) => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please log in to place an order!");
    return;
  }

  try {
    const response = await axios.post(
      "https://garland.mohitsasane.tech/backend/api/orders",
      { items },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/json"
        }
      }
    );

    toast.success("Order placed successfully!", { autoClose: 2000 });
    return response.data; // Assuming API returns order data
  } catch (error) {
    console.error("Error placing order:", error);
    toast.error("Failed to place order!");
  }
};
