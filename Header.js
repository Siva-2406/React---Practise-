//! Create Header --> Navbar --> Home --> About --> Cart --> Login page using router
 
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Cart = () => <h2>Cart Page</h2>;

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ email: "", password: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const validateForm = () => {
//     let valid = true;
//     let newErrors = { email: "", password: "" };

//     if (!email) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newErrors.email = "Invalid email format";
//       valid = false;
//     }

//     if (!password) {
//       newErrors.password = "Password is required";
//       valid = false;
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     if (validateForm()) {
//       alert("Form submitted successfully!");
//     }
//   };

//   return (
//     <div style={styles.formContainer}>
//       <h2>Login Page</h2>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input 
//             type="email" 
//             name="email" 
//             style={styles.input} 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//           {submitted && <p style={styles.error}>{errors.email}</p>}
//         </label>
//         <br />
//         <label>
//           Password:
//           <input 
//             type="password" 
//             name="password" 
//             style={styles.input} 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />
//           {submitted && <p style={styles.error}>{errors.password}</p>}
//         </label>
//         <br />
//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <nav style={styles.navbar}>
//       <ul style={styles.navList}>
//         <li><Link to="/" style={styles.link}>Home</Link></li>
//         <li><Link to="/about" style={styles.link}>About</Link></li>
//         <li><Link to="/cart" style={styles.link}>Cart</Link></li>
//         <li><Link to="/login" style={styles.link}>Login</Link></li>
//       </ul>
//     </nav>
//   );
// };

// const styles = {

  
//   navbar: {
//     background: "#333",
//     padding: "10px",
//     textAlign: "center",
//      margin:"0px"
//   },
//   navList: {
//     listStyle: "none",
//     padding: 0,
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//   },
//   link: {
//     color: "orange",
//     textDecoration: "none",
//     fontSize: "18px",
//   },
//   formContainer: {
//     textAlign: "center",
//     marginTop: "20px",
    
//   },
//   form: {
//     display: "inline-block",
//     textAlign: "left",
//     background: "#f4f4f4",
//     padding: "20px",
//     borderRadius: "8px",
//   },
//   input: {
//     display: "block",
//     width: "100%",
//     padding: "8px",
//     margin: "5px 0",
//   },
//   button: {
//     background: "orange",
//     color: "black",
//     padding: "10px 15px",
//     border: "none",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     fontSize: "14px",
//     margin: "5px 0 0 0",
//   }
// };

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//! ====================================================================================================================================== //
