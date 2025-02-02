import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve stored user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("user"));
  
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      alert("Login successful!");
      navigate(`/${role}`); // Redirect based on role (employee or employer)
    } else {
      alert("Invalid email or password!");
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
