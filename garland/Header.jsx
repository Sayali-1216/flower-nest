
import React, { useContext, useState } from "react";
import "./Header.css";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { ecomContext } from "./Home.jsx";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { cart } = useContext(ecomContext);

    // Function to toggle menu on mobile
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>FLOWER<span>Nest</span></h1>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="/" onClick={toggleMenu}>Home</a></li>
                    <li><a href="/shop" onClick={toggleMenu}>Shop</a></li>
                    <li><a href="/category" onClick={toggleMenu}>Categories</a></li>
                    <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
                    <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </nav>

            {/* Header Icons */}
            <div className="header-icons">
                <a href="/cart" className="icon"><FaShoppingCart /> <span>{cart.length}</span></a> {/* Cart Icon */}
                <a href="/auth" className="icon"><FaUser /></a> {/* User Icon */}


                {/* Mobile Menu Button */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {/* <button onClick={() => {
                localStorage.removeItem("currentUser");
                alert("Logged out successfully");
            }}>Logout</button> */}

        </header>
    );
};

export default Header;









