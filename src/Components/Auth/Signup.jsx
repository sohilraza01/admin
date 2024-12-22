import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'Donor'
  });

  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8800/signup", formData);
  
      // Save user info to localStorage
      localStorage.setItem("currentUser", JSON.stringify(response.data.user));
  
      // Redirect based on role
      switch (formData.role) {
        case "Admin":
          navigate("/login");
          break;
        case "Donor":
          window.location.href = "http://localhost:5173/";
          break;
        case "Agent":
          navigate("/agent");
          break;
        default:
          navigate("/");
      }
  
      // Reset form
      setFormData({
        username: "",
        email: "",
        password: "",
        role: "Donor",
      });
  
    } catch (error) {
      alert("Signup failed: " + (error.response?.data?.error || error.message));
    }
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signup">
      <form onSubmit={signupHandler}>
        <div className="title">Sign Up</div>
        <div className="signup-form">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="role">Role</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            className="role"
          >
            <option value="Admin">Admin</option>
            <option value="Agent">NGO</option>
            <option value="Donor">Donor</option>
          </select>

          <button id="btn" type="submit">Sign-up</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
