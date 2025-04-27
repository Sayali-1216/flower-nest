// LoginOptions.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginOptions.css'; // for simple styling

const LoginOptions = () => {
  const navigate = useNavigate();

  const goToAdminLogin = () => {
    navigate('/admin-login');
  };

  const goToUserLogin = () => {
    navigate('/user-login');
  };

  return (
    <div className="login-options-container">
      <h2>Select Login Type</h2>
      <div className="buttons">
        <button className="login-button" onClick={goToAdminLogin}>Admin Login</button>
        <button className="login-button" onClick={goToUserLogin}>User Login</button>
      </div>
    </div>
  );
};

export default LoginOptions;
