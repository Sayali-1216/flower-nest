import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsLetter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing, ${email}!`);
      setEmail("");
    }
  };

  const testimonials = [
    { id: 1, quote: "I love the freshness of their flowers! The garlands are amazing! 🌸", name: "Emily R." },
    { id: 2, quote: "The best floral store! Always fresh and beautifully handcrafted! 💐", name: "Michael T." },
    { id: 3, quote: "Their customer service and quality are outstanding! Highly recommended! ✨", name: "Sophia L." },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <div className="custom-arrow prev">&#9664;</div>,
    nextArrow: <div className="custom-arrow next">&#9654;</div>,
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>📩 Stay Updated with the Best Floral Deals!</h2>
        <p>Subscribe for exclusive discounts, new collections, and floral tips.</p>
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="subscribe-btn">Subscribe</button>
        </form>
      </div>

      {/* Testimonials Slider */}
      <div className="testimonial-slider">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <p>“{testimonial.quote}”</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Newsletter;
