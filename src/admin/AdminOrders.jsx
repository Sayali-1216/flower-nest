import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://your-api.com/api/orders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
      });
      setOrders(res.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>
            User: {o.user_id} | Products: {JSON.stringify(o.products)} | Total: ${o.total_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminOrders;
