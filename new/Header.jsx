import React from "react";
import { ShoppingCart, Menu } from "lucide-react";
import "./Header.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <h1 className="logo">GarlandNest</h1>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="icons">
          <ShoppingCart className="icon" />
          <Menu className="icon menu-icon" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('/garland-hero.jpg')" }}>
        <div className="hero-content">
          <h2>Fresh, Elegant Garlands</h2>
          <p>Luxurious floral arrangements for every occasion</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="products">
        <h3>Best Sellers</h3>
        <div className="product-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="product-card">
              <img src={`/garland${item}.jpg`} alt={`Garland ${item}`} />
              <div className="product-info">
                <h4>Elegant Garland</h4>
                <p className="price">$25.00</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 GarlandNest. Crafted with Love.</p>
      </footer>
    </div>
  );
};

export default LandingPage;






















const products = [
  { id: 1, name: "Red Rose Wedding Garland", price: "$30.00", image: "/garland1.jpg", category: "Wedding Garlands" },
  { id: 2, name: "Golden Marigold Garland", price: "$35.00", image: "/garland2.jpg", category: "Wedding Garlands" },
  { id: 3, name: "Jasmine Wedding Garland", price: "$40.00", image: "/garland3.jpg", category: "Wedding Garlands" },
  { id: 4, name: "Orchid Wedding Garland", price: "$45.00", image: "/garland4.jpg", category: "Wedding Garlands" },
  { id: 5, name: "Diwali Marigold Garland", price: "$25.00", image: "/garland5.jpg", category: "Festival Garlands" },
  { id: 6, name: "Holi Colorful Floral Garland", price: "$28.00", image: "/garland6.jpg", category: "Festival Garlands" },
  { id: 7, name: "Christmas Pinecone Garland", price: "$32.00", image: "/garland7.jpg", category: "Festival Garlands" },
  { id: 8, name: "New Year Golden Floral Garland", price: "$30.00", image: "/garland8.jpg", category: "Festival Garlands" },
  { id: 9, name: "Temple Mango Leaf Garland", price: "$35.00", image: "/garland9.jpg", category: "Temple Garlands" },
  { id: 10, name: "Sacred Lotus Garland", price: "$38.00", image: "/garland10.jpg", category: "Temple Garlands" },
  { id: 11, name: "Sandalwood Temple Garland", price: "$29.00", image: "/garland11.jpg", category: "Temple Garlands" },
  { id: 12, name: "Tulsi & Jasmine Garland", price: "$45.00", image: "/garland12.jpg", category: "Temple Garlands" },
  { id: 13, name: "White Rose Home Decor", price: "$27.00", image: "/garland13.jpg", category: "Home Decor Garlands" },
  { id: 14, name: "Green Leaf Wall Hanging", price: "$22.00", image: "/garland14.jpg", category: "Home Decor Garlands" },
  { id: 15, name: "Minimalist Garland", price: "$20.00", image: "/garland15.jpg", category: "Home Decor Garlands" },
  { id: 16, name: "Luxury Floral Garland", price: "$30.00", image: "/garland16.jpg", category: "Home Decor Garlands" },
  { id: 17, name: "Custom Name Garland", price: "$50.00", image: "/garland17.jpg", category: "Custom Garlands" },
  { id: 18, name: "Personalized Floral Design", price: "$55.00", image: "/garland18.jpg", category: "Custom Garlands" },
  { id: 19, name: "Special Occasion Garland", price: "$45.00", image: "/garland19.jpg", category: "Custom Garlands" },
  { id: 20, name: "Monogrammed Garland", price: "$60.00", image: "/garland20.jpg", category: "Custom Garlands" },
  { id: 21, name: "Bridal Hair Accessory", price: "$18.00", image: "/garland21.jpg", category: "Floral Accessories" },
  { id: 22, name: "Rose Boutonniere", price: "$15.00", image: "/garland22.jpg", category: "Floral Accessories" },
  { id: 23, name: "Wedding Chair Garland", price: "$25.00", image: "/garland23.jpg", category: "Floral Accessories" },
  { id: 24, name: "Floral Wrist Corsage", price: "$12.00", image: "/garland24.jpg", category: "Floral Accessories" },
  { id: 25, name: "Decorative Garden Garland", price: "$35.00", image: "/garland25.jpg", category: "Home Decor Garlands" },
  { id: 26, name: "Wedding Entry Garland", price: "$40.00", image: "/garland26.jpg", category: "Wedding Garlands" },
  { id: 27, name: "Ganesh Puja Garland", price: "$32.00", image: "/garland27.jpg", category: "Temple Garlands" },
  { id: 28, name: "Custom Party Garland", price: "$28.00", image: "/garland28.jpg", category: "Custom Garlands" },
  { id: 29, name: "Floral Dupatta Garland", price: "$50.00", image: "/garland29.jpg", category: "Floral Accessories" },
  { id: 30, name: "Ethnic Wedding Garland", price: "$55.00", image: "/garland30.jpg", category: "Wedding Garlands" }
];
