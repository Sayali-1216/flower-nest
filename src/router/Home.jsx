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
import { toast } from 'react-toastify';
import { cartPostCall } from "../util/api.js";
function Home() {









  const [cart, setCart] = useState([]);


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://garland.mohitsasane.tech/api/cart", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setCart(response.data.cart || []);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);


  // const [cart, setCart] = useState(() => {
  //   const localData = localStorage.getItem("cart");
  //   return localData ? JSON.parse(localData) : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);




  function handleAddToCart(e, product) {
    if (cart === 0) {


      setCart( [{...product}]);
    }
    // e.preventDefault();
    let quantity = 1;
    console.log("product ", product);

    const newCart = cart.map((item) => {
      if (item.id === product.product_id) {

        item.quantity += 1;
        quantity = item.quantity;
        return item;
      }
      else {
        return item;
      }
    })

    setCart([...newCart]);
    console.log("new caart ", newCart);

    console.log("quantity ", quantity, product.product_id);
    cartPostCall(product.id, quantity);
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
          <Route path="/shop" element={<Shopoutlet />} >
            <Route index element={<Shop />}></Route>
            <Route path=":id" element={<SingleProduct />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>
      </ecomContext.Provider>
    </BrowserRouter>
  );
}

export default Home;