import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-container">
            <div className={`auth-box ${isLogin ? "login-mode" : "signup-mode"}`}>
                <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                <form>
                    {!isLogin && (
                        <div className="input-group">
                            <input type="text" placeholder="Full Name" required />
                        </div>
                    )}
                    <div className="input-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    {!isLogin && (
                        <div className="input-group">
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                    )}
                    <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
                </form>
                <p onClick={toggleForm}>
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                </p>
            </div>
        </div>
    );
};

export default Auth;
