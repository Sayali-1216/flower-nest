













import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ecomContext } from "../router/Home";
import "./Order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { products } = useContext(ecomContext);

  useEffect(() => {
    console.log("Products from context:", products); 
  }, [products]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://garland.mohitsasane.tech/backend/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const fetchedOrders = response.data?.map(order => ({
          id: order.order_id,
          items: order.items,
          date: order.placed_at,
          total_amount: order.total_amount,
          status: order.status,
        }));
        console.log("Fetch order  ",fetchedOrders);

        setOrders(fetchedOrders || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      {orders.length === 0 || !products || products.length === 0 ? (
        <p> Product data is loading...</p>
       ) : (
        orders.map((order) => (
          <div className="order" key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total:</strong> ₹{order.total_amount}</p>h                                                  

            {order.items && order.items.length > 0 ? (
              order.items.map((item, idx) => {
                const product = products.find(p => p.product_id === item.product_id);


                    console.log("product in order  ",product);

                return product ? (
                  <div className="order-item" key={idx}>
              <img src={product.image_url} alt={product.name} />

                    <div>
                      <h4>{product.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹ {item.price}</p>
                    </div>
                  </div>
                ) : (
                  <p key={idx}>Product not found for Product ID: {item.product_id}</p>
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








