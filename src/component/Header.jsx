import React, { useContext, useState } from "react";
import "./Header.css";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { ecomContext } from "../router/Home.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <header className="header">
      <div className="logo">
        <h1>
          FLOWER<span>Nest</span>
        </h1>
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/shop" onClick={toggleMenu}>Shop</a></li>
          <li><a href="/subscriptions" onClick={toggleMenu}>Subscriptions</a></li>
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
            {cart.length}
          </span>
        </a>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <a href="/login" className="icon"><FaUser /></a>
        )}

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
