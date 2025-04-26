













import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { ecomContext } from '../router/Home';

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(ecomContext);

  const [formData, setFormData] = useState({ email: '', pass: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://garland.mohitsasane.tech/backend/api/users/login', formData); 
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      setIsLoggedIn(true);
      alert("Login successful!");
      navigate('/');
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Flower<span>Nest</span></h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          value={formData.pass}
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;

