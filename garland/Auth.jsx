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





// import React, { useState } from 'react';
// import './Auth.css'; // Optional for styling

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     if (isLogin) {
//       // LOGIN
//       const user = users.find(u => u.email === formData.email && u.password === formData.password);
//       if (user) {
//         setMessage(`Welcome back, ${user.name}!`);
//         localStorage.setItem('currentUser', JSON.stringify(user)); // optional
//       } else {
//         setMessage('Invalid email or password');
//       }
//     } else {
//       // SIGNUP
//       const exists = users.some(u => u.email === formData.email);
//       if (exists) {
//         setMessage('User already exists. Try logging in.');
//       } else {
//         const newUser = { ...formData };
//         localStorage.setItem('users', JSON.stringify([...users, newUser]));
//         setMessage('Signup successful! You can now log in.');
//         setIsLogin(true); // switch to login after signup
//       }
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         )}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//       </form>
//       <p className="switch">
//         {isLogin ? "Don't have an account?" : "Already have an account?"}
//         <button onClick={() => {
//           setIsLogin(!isLogin);
//           setMessage('');
//         }}>
//           {isLogin ? 'Sign Up' : 'Login'}
//         </button>
//       </p>
//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default Auth;





// import React, { useState } from "react";
// import "./Auth.css";

// const Auth = () => {
//   const [authMode, setAuthMode] = useState("login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const switchMode = () => {
//     setAuthMode(authMode === "login" ? "signup" : "login");
//     setMessage("");
//     setName("");
//     setEmail("");
//     setPassword("");
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const userExists = users.find((user) => user.email === email);

//     if (userExists) {
//       setMessage("User already exists. Try logging in.");
//     } else {
//       const newUser = { name, email, password };
//       users.push(newUser);
//       localStorage.setItem("users", JSON.stringify(users));
//       setMessage("Signup successful. Please log in.");
//       setAuthMode("login");
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const matchedUser = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (matchedUser) {
//       localStorage.setItem("currentUser", JSON.stringify(matchedUser));
//       setMessage(`Welcome, ${matchedUser.name}!`);
//     } else {
//       setMessage("Invalid email or password.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{authMode === "login" ? "Login" : "Sign Up"}</h2>
//       <form
//         onSubmit={authMode === "login" ? handleLogin : handleSignup}
//         className="auth-form"
//       >
//         {authMode === "signup" && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="auth-input"
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="auth-input"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="auth-input"
//         />
//         <button type="submit" className="auth-button">
//           {authMode === "login" ? "Login" : "Sign Up"}
//         </button>
//       </form>
//       <p className="auth-switch">
//         {authMode === "login"
//           ? "Don't have an account?"
//           : "Already have an account?"}{" "}
//         <button onClick={switchMode}>
//           {authMode === "login" ? "Sign Up" : "Login"}
//         </button>
//       </p>
//       {message && <p className="auth-message">{message}</p>}
//     </div>
//   );
// };

// export default Auth;


