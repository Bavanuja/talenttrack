import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={5} p={4}>
        <Typography variant="h3" gutterBottom>
          Welcome to Talent Track
        </Typography>
        <Typography variant="h6" paragraph>
          Find your dream job or post job openings to connect with the best talents.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate("/joblist")}
        >
          Browse Jobs
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
