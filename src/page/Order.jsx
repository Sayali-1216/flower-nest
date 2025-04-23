import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ecomContext } from "../router/Home";
import "./Order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { products } = useContext(ecomContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://garland.mohitsasane.tech/backend/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log("Orders API response:", response.data);

        // Correct the mapping of orders data
        const fetchedOrders = response.data?.map(order => ({
          id: order.order_id,
          items: order.items,
          date: order.placed_at,
          total_amount: order.total_amount,
          status: order.status,
        }));

        setOrders(fetchedOrders || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []); // Remove the dependency on `products` for initial loading

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div className="order" key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total:</strong> ₹{order.total_amount}</p>

            {order.items && order.items.length > 0 ? (
              order.items.map((item, idx) => {
                // Fix: Make sure the product_id is correct
                const product = products.find(p => p.product_id === item.product_id);

                // Ensure the product is found before rendering
                if (!product) {
                  return <p key={idx}>Product not found for Product ID: {item.product_id}</p>;
                }

                return (
                  <div className="order-item" key={idx}>
                    <img src={product.image_url} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹ {product.price}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No items in this order.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
