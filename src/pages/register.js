import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "employee", // Default role
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, role } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Send a POST request to JSON Server to save the user
      const response = await axios.post("http://localhost:3001/users", {
        name,
        email,
        password,
        role,
      });

      if (response.status === 201) {
        alert("Registration Successful!");
        navigate("/login", { state: { role } }); // Pass the role to login page
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Create an Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              variant="outlined"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="employee">Employee</option>
              <option value="employer">Employer</option>
            </select>
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;