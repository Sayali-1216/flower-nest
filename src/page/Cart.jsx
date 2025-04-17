import React, { useContext, useState, useEffect } from 'react';
import { ecomContext } from '../router/Home';
import "./Cart.css";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, setCart,isLoggedIn } = useContext(ecomContext);



  const calculateSubTotal = () => {
    return cart.reduce((acc, item) => {
      // const price = parsePrice(item.price);
      const price = item.price;
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
    setShipping(cart.length > 0 ? 50 : 0);
    setTax(Math.round(newSubTotal * 0.1));
  }, [cart]);

  const handleRemoveFromCart = (idToRemove) => {
    const updatedCart = cart.filter(item => item.id !== idToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, amount) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = (item.quantity || 1) + amount;
        return {
          ...item,
          quantity: newQuantity < 1 ? 1 : newQuantity
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <h1 className='cart-title'>Shopping Cart</h1>
      <div className="cart-container">
        <div className="left">
          {cart.length > 0 ? cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image_url} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>

              </div>
              <button className="removebtn" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          )) : (
            <div className="empty-msg">
              <p>Your cart is empty...</p>
              <p>Browse our products and add items to your cart.</p>
              <a href='/shop'>Continue Shopping</a>
            </div>
          )}
        </div>
        { cart.length > 0 ?(
        <div className="right">
          
          <p><strong>Subtotal:</strong> <span>₹{subTotal}</span></p>
          <p><strong>Shipping:</strong> <span>₹{shipping}</span></p>
          <p><strong>Tax:</strong> <span>₹{tax}</span></p>
          <hr />
          <p><strong>Total:</strong> <span>₹{subTotal + shipping + tax}</span></p>
          {/* <button onClick={() => window.location.href = "/checkout"}>Proceed To Checkout</button> */}

          {isLoggedIn ? (
            <Link to="/checkout">
              <button >
                Checkout Now
              </button>
            </Link>
          ) : (
            <div >
              <p >Please log in to checkout</p>
              <Link to="/login" >
              <button>
                Login
                </button>
              </Link>
            </div>
          )}
        </div>
): ""}
      </div>
    </>
  );
};

export default Cart;
























// import React, { useContext, useState, useEffect } from 'react';
// import { ecomContext } from '../router/Home';
// import "./Cart.css";
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const Cart = () => {
//   const { cart, setCart, isLoggedIn } = useContext(ecomContext);
//   const [subTotal, setSubTotal] = useState(0);
//   const [shipping, setShipping] = useState(0);
//   const [tax, setTax] = useState(0);

//   // ✅ Fetch Cart Items from API
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (token) {
//           const response = await axios.get("http://garland.mohitsasane.tech/api/cart", {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//           setCart(response.data.cart || []);
//         }
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     fetchCart();
//   }, []);

//   // ✅ Subtotal, Shipping, Tax calculation
//   const calculateSubTotal = () => {
//     return cart.reduce((acc, item) => {
//       const price = item.price;
//       const quantity = item.quantity || 1;
//       return acc + price * quantity;
//     }, 0);
//   };

//   useEffect(() => {
//     const newSubTotal = calculateSubTotal();
//     setSubTotal(newSubTotal);
//     setShipping(cart.length > 0 ? 50 : 0);
//     setTax(Math.round(newSubTotal * 0.1));
//   }, [cart]);

//   // ✅ Update Quantity (frontend only for now)
//   const updateQuantity = (id, amount) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === id) {
//         const newQuantity = (item.quantity || 1) + amount;
//         return {
//           ...item,
//           quantity: newQuantity < 1 ? 1 : newQuantity
//         };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // ✅ Remove from Cart (frontend only for now)
//   const handleRemoveFromCart = (idToRemove) => {
//     const updatedCart = cart.filter(item => item.id !== idToRemove);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <>
//       <h1 className='cart-title'>Shopping Cart</h1>
//       <div className="cart-container">
//         <div className="left">
//           {cart.length > 0 ? cart.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.image} alt={item.name} />
//               <div>
//                 <h4>{item.name}</h4>
//                 <p>Price: ₹{item.price}</p>
//                 <div className="quantity-control">
//                   <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                   <span>{item.quantity || 1}</span>
//                   <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//                 </div>
//               </div>
//               <button className="removebtn" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//             </div>
//           )) : (
//             <div className="empty-msg">
//               <p>Your cart is empty...</p>
//               <p>Browse our products and add items to your cart.</p>
//               <a href='/shop'>Continue Shopping</a>
//             </div>
//           )}
//         </div>

//         <div className="right">
//           <p><strong>Subtotal:</strong> <span>₹{subTotal}</span></p>
//           <p><strong>Shipping:</strong> <span>₹{shipping}</span></p>
//           <p><strong>Tax:</strong> <span>₹{tax}</span></p>
//           <hr />
//           <p><strong>Total:</strong> <span>₹{subTotal + shipping + tax}</span></p>

//           {isLoggedIn ? (
//             <Link to="/checkout">
//               <button>Checkout Now</button>
//             </Link>
//           ) : (
//             <div>
//               <p>Please log in to checkout</p>
//               <Link to="/login">
//                 <button>Login</button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;




