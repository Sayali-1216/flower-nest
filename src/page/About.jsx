import React, { useEffect, useState } from "react";
import "./About.css";

const AboutUs = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => (prev < 1000 ? prev + 10 : 1000)); // Increments up to 1000
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about-section">
            <div className="about-bg"></div>

            <div className="about-content">
                <h2 className="about-title">About Our Garland Store</h2>
                <p className="about-text">
                    We specialize in <strong >handcrafted floral garlands</strong>, perfect for <strong>weddings, ceremonies, and decorations</strong>.  
                    Our mission is to  <strong>deliver freshness and beauty</strong> in every garland we create.
                </p>

                <div className="about-stats">
                    <div className="stat-box">
                        <h3>{counter}+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat-box">
                        <h3>500+</h3>
                        <p>Unique Designs</p>
                    </div>
                    <div className="stat-box">
                        <h3>10+ Years</h3>
                        <p>Experience</p>
                    </div>
                </div>

                <button className="about-btn" onClick={() => window.location.href = "/shop"}>Explore Our Collection →</button>
            </div>
        </section>
    );
};

export default AboutUs;
