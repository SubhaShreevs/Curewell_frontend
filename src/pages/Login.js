import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./AdminLogin.css"; // Ensure you have the CSS file for styling

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/admin/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Login Successful!");
      navigate("/dashboard"); // Redirect to the admin dashboard
    } catch (error) {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <p>Login to manage the hospital system</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <p>
          New User? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
