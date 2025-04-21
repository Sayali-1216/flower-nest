// import React, { useState ,useContext} from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import axios from 'axios';
// import { ecomContext } from "../router/Home.jsx";


// const Login = () => {
//   const navigate = useNavigate();
//   const { isLoggedIn, setIsLoggedIn } = useContext(ecomContext);

//   const [formData, setFormData] = useState({ email: '', pass: '' });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };



//   const handleLogin = (e) => {
//     e.preventDefault();
    


   
//     axios.post('http://garland.mohitsasane.tech/api/users/login', formData)
//     .then(response => {
//       console.log("Login successful:", response.data);
//       alert("Login successful!");

//       // localStorage.setItem('token', response.data.token);
//       // // localStorage.setItem('user', JSON.stringify(response.data.user));
//       localStorage.setItem("loggedInUser", JSON.stringify({ email: formData.email }));
//       setIsLoggedIn(true);
//       navigate('/');
      
//     })
//     .catch(error => {
//       console.log("Login error:", error);
//       setError("Invalid email or password");
//     });
// };
//   return (
//     <div className="login-container">
//       <h2>Login to FlowerNest</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           required
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="pass"
//           placeholder="Password"
//           value={formData.pass}
//           required
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//       <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//     </div>
//   );
// };

// export default Login;



















// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import axios from 'axios';
// import { ecomContext } from '../router/Home';

// const Login = () => {
//   const navigate = useNavigate();
//   const { setIsLoggedIn } = useContext(ecomContext);

//   const [formData, setFormData] = useState({ email: '', pass: '' });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     axios.post('  ', formData) // Change URL as needed
//       .then(response => {
//         console.log("Login successful:", response.data);
//         alert("Login successful!");

//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem("loggedInUser", JSON.stringify({ email: formData.email }));
//         setIsLoggedIn(true); 

//         navigate('/');
//       })
//       .catch(error => {
//         console.log("Login error:", error);
//         setError("Invalid email or password");
//       });
//   };

//   return (
//     <div className="login-container">
//       <h2>Login to FlowerNest</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           required
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="pass"
//           placeholder="Password"
//           value={formData.pass}
//           required
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//       <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//     </div>
//   );
// };

// export default Login;













import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { ecomContext } from '../router/Home';

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(ecomContext);

  const [formData, setFormData] = useState({ email: '', pass: '' });
  const [error, setError] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://garland.mohitsasane.tech/api/users/login', formData); 
      const { token, user } = response.data;

      // Store token in localStorage
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
      <h2>Login to FlowerNest</h2>
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

