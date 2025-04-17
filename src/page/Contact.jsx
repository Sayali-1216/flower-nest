import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Left Side - Contact Info */}
                <div className="contact-info">
                    <h2>📩 Get In Touch</h2>
                    <p>Have any questions? We'd love to hear from you! Reach out to us for orders, inquiries, or collaborations.</p>

                    <div className="contact-details">
                        <p>📍 Address: 123 Flower Street, Blossom City</p>
                        <p>📞 Phone: +1 234 567 890</p>
                        <p>📧 Email: contact@garlandstore.com</p>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Send Us a Message</h3>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Send Message 🚀</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
