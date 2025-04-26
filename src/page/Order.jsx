












// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { ecomContext } from "../router/Home";
// import "./Order.css";

// const Order = () => {
//   const [orders, setOrders] = useState([]);
//   const { products } = useContext(ecomContext);

//   useEffect(() => {
//     console.log("Products from context:", products); // <-- Add this
//   }, [products]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://garland.mohitsasane.tech/backend/api/orders", {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         const fetchedOrders = response.data?.map(order => ({
//           id: order.order_id,
//           items: order.items,
//           date: order.placed_at,
//           total_amount: order.total_amount,
//           status: order.status,
//         }));

//         setOrders(fetchedOrders || []);
//       } catch (error) {
//         console.error("Failed to fetch orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="orders">
//       <h2>Your Orders</h2>
//       {orders.length === 0 || !products || products.length === 0 ? (
//         <p> Product data is loading...</p>
//        ) : (
//         orders.map((order) => (
//           <div className="order" key={order.id}>
//             <h3>Order ID: {order.id}</h3>
//             <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
//             <p><strong>Status:</strong> {order.status}</p>
//             <p><strong>Total:</strong> ₹{order.total_amount}</p>

//             {order.items && order.items.length > 0 ? (
//               order.items.map((item, idx) => {
//                 const product = products.find(p => p.id === item.product_id);



//                 return product ? (
//                   <div className="order-item" key={idx}>
//                     <img src={product.image} alt={product.name} />
//                     <div>
//                       <h4>{product.name}</h4>
//                       <p>Quantity: {item.quantity}</p>
//                       <p>Price: ₹ {product.price}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <p key={idx}>Product not found for Product ID: {item.product_id}</p>
//                 );
//               })
//             ) : (
//               <p>No items in this order.</p>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Order;















import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ecomContext } from "../router/Home";
import "./Order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const { products } = useContext(ecomContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const [orderRes, subRes] = await Promise.all([
          axios.get("http://garland.mohitsasane.tech/backend/api/orders", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://garland.mohitsasane.tech/backend/api/subscriptions", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const fetchedOrders = orderRes.data?.map(order => ({
          id: order.order_id,
          items: order.items,
          date: order.placed_at,
          total_amount: order.total_amount,
          status: order.status,
        }));

        const fetchedSubscriptions = subRes.data?.map(sub => ({
          id: sub.subscription_id,
          product_ids: sub.product_ids, // assuming it's an array
          plan: sub.type,
          start_date: sub.start_date,
        }));

        setOrders(fetchedOrders || []);
        setSubscriptions(fetchedSubscriptions || []);
      } catch (error) {
        console.error("Failed to fetch orders or subscriptions:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <h2>Your Orders</h2>

      {/* Regular Orders */}
      {orders.length === 0 && subscriptions.length === 0 ? (
        <p>Loading orders and subscriptions...</p>
      ) : (
        <>
          {orders.map((order) => (
            <div className="order" key={`order-${order.id}`}>
              <h3>Order ID: {order.id}</h3>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> ₹{order.total_amount}</p>

              {order.items?.length > 0 ? (
                order.items.map((item, idx) => {
                  const product = products.find(p => p.id === item.product_id);
                  return product ? (
                    <div className="order-item" key={idx}>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <h4>{product.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ₹ {product.price}</p>
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
          ))}

          {/* Subscriptions */}
          {subscriptions.length > 0 && (
            <div className="subscriptions">
              <h2>Your Subscriptions</h2>
              {subscriptions.map((sub) => (
                <div className="order subscription-order" key={`sub-${sub.id}`}>
                  <h3>Subscription ID: {sub.id}</h3>
                  <p><strong>Plan:</strong> {sub.plan}</p>
                  <p><strong>Start Date:</strong> {new Date(sub.start_date).toLocaleString()}</p>
                  <p><strong>Included Products:</strong></p>
                  <div className="subscription-products">
                    {sub.product_ids?.map((pid, idx) => {
                      const product = products.find(p => p.id === pid);
                      return product ? (
                        <div className="order-item" key={idx}>
                          <img src={product.image} alt={product.name} />
                          <div>
                            <h4>{product.name}</h4>
                            <p>Price: ₹{product.price}</p>
                          </div>
                        </div>
                      ) : (
                        <p key={idx}>Product not found for ID: {pid}</p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Order;
