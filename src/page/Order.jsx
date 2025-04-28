












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
  const [loading, setLoading] = useState(true);
  const { products } = useContext(ecomContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const orderRes = await axios.get("http://garland.mohitsasane.tech/backend/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setOrders(orderRes.data || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchSubscriptions = () => {
      try {
        const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
        const selectedPlan = localStorage.getItem("selectedPlan");

        if (selectedProducts.length > 0 && selectedPlan) {
          const subscription = {
            subscription_id: Date.now(), // fake subscription ID
            type: selectedPlan,
            start_date: new Date().toISOString(), // today's date
            product_ids: selectedProducts.map((p) => p.id),
          };

          setSubscriptions([subscription]);
        } else {
          setSubscriptions([]);
        }
      } catch (error) {
        console.error("Failed to fetch subscription from localStorage:", error);
        setSubscriptions([]);
      }
    };
    

    fetchOrders();
    fetchSubscriptions();
  }, []);

  if (loading) {
    return <div className="orders"><p>Loading your orders...</p></div>;
  }

  return (
    <div className="orders">
      <h2>Your Orders</h2>

      {/* Regular Orders */}
      {orders.length === 0 && <p>No orders found.</p>}

      {orders.map((order) => (
        <div className="order" key={`order-${order.order_id}`}>
          <h3>Order ID: {order.order_id}</h3>
          <p><strong>Date:</strong> {new Date(order.placed_at).toLocaleString()}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> ₹{order.total_amount}</p>

          {order.items?.length > 0 ? (
            order.items.map((item, idx) => {
              const product = products.find(p => p.id === item.product_id);
              return product ? (
                <div className="order-item" key={`orderitem-${idx}`}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h4>{product.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price per unit: ₹{product.price?.Daily || product.price}</p>
                  </div>
                </div>
              ) : (
                <p key={`missingproduct-${idx}`}>Product not found (ID: {item.product_id})</p>
              );
            })
          ) : (
            <p>No items in this order.</p>
          )}
        </div>
      ))}

      {/* Subscriptions */}
      <h2>Your Subscriptions</h2>
      {subscriptions.length === 0 && <p>No subscriptions found.</p>}

      {subscriptions.map((sub, idx) => (
        <div className="order subscription-order" key={`sub-${idx}`}>
          <h3>Subscription ID: {sub.subscription_id}</h3>
          <p><strong>Plan:</strong> {sub.type}</p>
          <p><strong>Start Date:</strong> {new Date(sub.start_date).toLocaleString()}</p>
          <p><strong>Included Products:</strong></p>

          <div className="subscription-products">
            <div className="products-list">
              {sub.product_ids?.map((pid, pidx) => {
                const product = products.find(p => p.id === pid);
                return product ? (
                  <div className="order-item" key={`subproduct-${pidx}`}>
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                      <p>Price ({sub.type}): ₹{product.price?.[sub.type] || product.price}</p>
                    </div>
                  </div>
                ) : (
                  <p key={`missing-subproduct-${pidx}`}>Product not found (ID: {pid})</p>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;

