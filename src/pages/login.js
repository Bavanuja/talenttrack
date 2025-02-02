import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee"); // Default is employee
  const navigate = useNavigate();
  const location = useLocation();

  // Get the role passed from the Register page (if any)
  useEffect(() => {
    if (location.state?.role) {
      setRole(location.state.role);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Fetch users from JSON Server
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;
  
      // Check if the entered email and password match any user
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
  
      if (user) {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("role", user.role);
  
        // Redirect based on role
        if (user.role === "employee") {
          navigate("/home"); // Redirect employees to the home page
        } else if (user.role === "employer") {
          navigate("/postjob"); // Redirect employers to the post job page
        }
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please try again.");
    }
  };
  

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Login to Talent Track
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <select onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="employee">Employee</option>
              <option value="employer">Employer</option>
            </select>
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Don't have an account? <a href="/register">Register</a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;