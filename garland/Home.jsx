

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import Shopoutlet from "./Shopoutlet";
import Auth from "./Auth";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import { createContext, useEffect, useState } from "react";
import { products } from "./constant";
import Subscription from "./Subcription.jsx";
import Signup from "./signup.jsx";
import Login from "./login.jsx";
import CustomOrder from "./CustomOrder.jsx";

export const ecomContext = createContext();

function Home() {


// const [cart,setCart]=useState([]);

// const [cart, setCart] = useState(
//   localStorage.getItem("cart") === null ? [] : JSON.parse(localStorage.getItem("cart"))
// );



  // function handleAddToCart(e, product) {
  //   setCart([...cart, product]);

  // }

  function handleAddToCart(e, product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  

  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });


  // useEffect(() => {
  //   let temp = cart;
  //   temp.forEach((obj) => {
  //     obj.quantity = 1;
  //   });
  //   localStorage.setItem("cart", JSON.stringify(temp));
  // }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  


  console.log(cart);

  


  return (
    <BrowserRouter>
      <ecomContext.Provider value={{ products, handleAddToCart, cart, setCart }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          {/* <Route path="/auth" element={<Auth />} ></Route> */}
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/custom" element={<CustomOrder/>} ></Route>
          <Route path="/subscriptions" element={<Subscription/>}></Route>
          <Route path="/shop" element={<Shopoutlet />} >
            <Route index element={<Shop />}></Route>
            <Route path=":id" element={<SingleProduct />}></Route>
          </Route>

          <Route path="/cart" element={<Cart />} ></Route>

        </Routes>
      </ecomContext.Provider>
    </BrowserRouter>
  );
}

export default Home;