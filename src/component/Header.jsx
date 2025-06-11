import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { ecomContext } from "../router/Home.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin,setIsAdmin]=useState(false);
  const navigate = useNavigate();
  const { cart, isLoggedIn, setIsLoggedIn } = useContext(ecomContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('loggedInUser'))

    console.log(user)
    if(user?.role==='super_admin'||user?.role==="admin"){
      console.log("user is admin")
      setIsAdmin(true)
    }

  },[])
  
    

    
  

  return (
    <header className="header">
    
        {isAdmin?<div className="admin-header"><button onClick={() => window.location.href = "/admin"}>
          Admin
        </button></div>:""

        }
      
      <div className="logo">
        <h1>
          FLOWER<span>Nest</span>
        </h1>
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/shop" onClick={toggleMenu}>Shop</a></li>
          {/* <li><a href="/subscriptions" onClick={toggleMenu}>Subscriptions</a></li> */}
          <li><a href="/order" onClick={toggleMenu}>My Orders</a></li>
          <li><a href="/custom" onClick={toggleMenu}>Customize Order</a></li>
          <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="header-icons">
        <a href="/cart" className="icon" style={{ position: "relative" }}>
          <FaShoppingCart />
          <span
            style={{
              position: "absolute",
              right: 0,
              bottom: "1.4rem",
              backgroundColor: "yellow",
              fontSize: "0.9rem",
              borderRadius: "50%",
              padding: "2px 6px",
            }}
          >
            {/*    
         {
         localStorage.getItem("cart")===[]?0:({cart.length})
         
         } */}
            {cart.length}

          </span>
        </a>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <a href="/login" className="icon"><FaUser /></a>
          // <>
          //   <Route path="/login" element={<LoginOptions />} />
          //   <Route path="/admin-login" element={<AdminLogin />} />
          //   <Route path="/user-login" element={<UserLogin />} />

          // </>

        )}

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
