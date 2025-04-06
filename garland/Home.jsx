// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import React from "react-dom/client";
// import Main from "./Main";
// import About from "./About";
// import Contact from "./Contact";
// import Shop from "./Shop";
// import Header from "./Header";
// import Auth from "./Auth";
// import Cart from "./Cart.jsx";
// import Category from "./Category.jsx";
// import { useState } from "react";
// import { CartProvider } from "./CartContext";
// import CheckOut from "./CheckOut.jsx";


// function Home() {


//   return (
//     <>

//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Main />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//           <Route path="/auth" element={< Auth />}></Route>


//           <CartProvider>
//             <Shop />
//             <Cart />
//             <CheckOut />
//           </CartProvider>

//           <Route path="/category" element={<Category />}></Route>


//         </Routes>
//       </BrowserRouter>


//     </>
//   )
// }

// export default Home;










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
import { createContext, useState } from "react";
import { products } from "./constant";

export const ecomContext = createContext();

function Home() {

  
  

  const [cart, setCart] = useState([]);
  function handleAddToCart(e, product) {
    setCart([...cart, product]);

  }

  console.log(cart);

  return (
    <BrowserRouter>
      <ecomContext.Provider value={{ products, handleAddToCart, cart, setCart }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/auth" element={<Auth />} ></Route>
          <Route path="/shop" element={<Shopoutlet/>} >
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