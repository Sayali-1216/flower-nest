import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === formData.email);

    if (userExists) {
      setError('User already exists with this email');
    } else {
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful!');
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
        />
        <button type="submit">Register</button>
        {/* <p className="redirect">
          Already have an account?{" "} */}
          {/* <span onClick={() => navigate("/login")} className="link">Login</span> */}
          <p>Already have an account? <a href="/login">Login</a></p>
        {/* </p> */}
      </form>
    </div>
  );
};

export default Register;
