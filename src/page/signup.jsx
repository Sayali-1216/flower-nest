



import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    phone: '',
    address: '',
   
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

    // const users = JSON.parse(localStorage.getItem('users')) || [];
    // const userExists = users.find(user => user.email === formData.email);

    // if (userExists) {
    //   setError('User already exists with this email');
    // } else {
    //   users.push(formData);
    //   localStorage.setItem('users', JSON.stringify(users));
    //   alert('Registration successful!');
    //   setFormData({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     address: '',
    //     password: '',
    //   });
    // }

     axios.post('http://garland.mohitsasane.tech/backend/api/users/register',formData).then(response=>{
      console.log("post created :",response.data);
      // alert("Sign up successful..");
      toast.success("Signup successful!", { autoClose: 2000 });
     })
     .catch(error=>{
      // console.log("Error creating post :",error);
      toast.error("Error creating account!", { autoClose: 2000 });
     })
    




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
          name="pass"
          placeholder="Create Password"
          value={formData.pass}
          onChange={handleChange}
          required
          minLength={6}
        />


        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
        />
        <input
          type="text"
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;