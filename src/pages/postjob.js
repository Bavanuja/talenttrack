import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newJob = { title, company, location, description, id: Date.now() };

    // Retrieve existing jobs from localStorage
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Add the new job to the list
    storedJobs.push(newJob);

    // Save the updated list back to localStorage
    localStorage.setItem("jobs", JSON.stringify(storedJobs));

    // Redirect to the job list page after posting
    navigate("/joblist");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Post a New Job
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Job Title"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Job Description"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Post Job
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PostJob;
