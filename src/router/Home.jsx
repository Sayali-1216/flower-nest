import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Header";
import Header from "../component/Header.jsx";
import Main from "../page/Main.jsx";
import About from "../page/About.jsx";
import Contact from "../page/Contact.jsx";
import Shop from "../page/Shop.jsx";
import Shopoutlet from "../page/Shopoutlet.jsx";
import Cart from "../page/Cart.jsx";
import SingleProduct from "../page/SingleProduct.jsx";
import { createContext, useEffect, useState } from "react";
import { products } from "../data/constant.js";
import Subscription from "../page/Subcription.jsx";
import Signup from "../page/signup.jsx";
import Login from "../page/login.jsx";
import CustomOrder from "../page/CustomOrder.jsx";
import CheckOut from "../page/CheckOut.jsx";
export const ecomContext = createContext();
import axios from 'axios';
import Order from "../page/Order.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { cartPostCall } from "../util/api.js";


import AdminLogin from "../admin-login.jsx";
import AdminDashboard from "../admin/Dashboard.jsx";
import AdminProducts from "../admin/Products.jsx";
import AdminOrders from "../admin/AdminOrders.jsx";
import AddProduct from "../admin/AddProduct.jsx";
import AdminPrivateRoute from "../AdminPrivateRoute.jsx";
function Home() {


  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);












  function handleAddToCart(e, product) {
    let quantity = product.quantity || 1;

    const existingIndex = cart.findIndex((item) =>
      item.product_id === product.product_id
    );

    let updatedCart;

    if (existingIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      toast.info(`Increased quantity of ${product.name || "product"} in cart`);
    } else {
      product.quantity = 1;
      updatedCart = [...cart, product];
      toast.success(`Product added in cart!`);
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 

    // Send to backend
    cartPostCall(product.product_id, quantity);
  }






  console.log(cart);


  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("loggedInUser"));




  return (
    <BrowserRouter>
      <ecomContext.Provider value={{ products, handleAddToCart, cart, setCart, isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/custom" element={<CustomOrder />} ></Route>
          <Route path="/subscriptions" element={<Subscription />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/shop" element={<Shopoutlet />} >
            <Route index element={<Shop />}></Route>
            <Route path=":id" element={<SingleProduct />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>







//admin
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* <Route path="/admin/dashboard" element={<AdminPrivateRoute><AdminDashboard /></AdminPrivateRoute>} /> */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* <Route path="/admin/products" element={<AdminPrivateRoute><AdminProducts /></AdminPrivateRoute>} /> */}
          <Route path="/admin/products" element={<AdminProducts />} />

          {/* <Route path="/admin/add-product" element={<AdminPrivateRoute><AddProduct /></AdminPrivateRoute>} /> */}
          <Route path="/admin/add-product" element={<AdminDashboard />} />

          {/* <Route path="/admin/orders" element={<AdminPrivateRoute><AdminOrders /></AdminPrivateRoute>} /> */}
          <Route path="/admin/orders" element={<AdminOrders />} />



        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ecomContext.Provider>
    </BrowserRouter>
  );
}

export default Home;