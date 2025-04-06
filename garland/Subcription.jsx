import React, { useState } from "react";
import "./Subcription.css";
import { FaCheckCircle, FaStar, FaGift, FaCrown } from "react-icons/fa";

const Subscription = () => {
    const [activePlan, setActivePlan] = useState("daily");

    const plans = {
        daily: [
            {
                id: 1,
                name: "Basic",
                price: "$1.99",
                icon: <FaStar />,
                features: ["1 Order per Day", "Standard Support"],
                bgColor: "#ff7e5f"
            },
            {
                id: 2,
                name: "Premium",
                price: "$2.99",
                icon: <FaGift />,
                features: ["Faster Delivery", "Priority Orders"],
                bgColor: "#feb47b"
            }
        ],
        weekly: [
            {
                id: 1,
                name: "Basic",
                price: "$9.99",
                icon: <FaStar />,
                features: ["7 Orders per Week", "Standard Support"],
                bgColor: "#ff7e5f"
            },
            {
                id: 2,
                name: "Premium",
                price: "$14.99",
                icon: <FaGift />,
                features: ["Faster Delivery", "Priority Orders"],
                bgColor: "#feb47b"
            }
        ],
        monthly: [
            {
                id: 1,
                name: "Basic",
                price: "$29.99",
                icon: <FaStar />,
                features: ["Unlimited Orders", "Standard Support"],
                bgColor: "#ff7e5f"
            },
            {
                id: 2,
                name: "Premium",
                price: "$49.99",
                icon: <FaCrown />,
                features: ["VIP Support", "Exclusive Discounts"],
                bgColor: "#feb47b"
            }
        ]
    };

    return (
        <section className="subscription-section">
            <h2>Choose Your Plan</h2>

            {/* Tab Switcher */}
            <div className="plan-tabs">
                <button className={activePlan === "daily" ? "active" : ""} onClick={() => setActivePlan("daily")}>Daily</button>
                <button className={activePlan === "weekly" ? "active" : ""} onClick={() => setActivePlan("weekly")}>Weekly</button>
                <button className={activePlan === "monthly" ? "active" : ""} onClick={() => setActivePlan("monthly")}>Monthly</button>
            </div>

            {/* Plans Display */}
            <div className="plans-container">
                {plans[activePlan].map((plan) => (
                    <div key={plan.id} className="plan-card" style={{ background: plan.bgColor }}>
                        <div className="plan-icon">{plan.icon}</div>
                        <h3>{plan.name}</h3>
                        <p className="plan-price">{plan.price} <span> {activePlan}</span></p>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index}><FaCheckCircle /> {feature}</li>
                            ))}
                        </ul>
                        <button className="subscribe-btn">Subscribe Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Subscription;
