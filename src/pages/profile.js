import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PostJob({ addJob }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new job object
    const newJob = {
      id: Date.now().toString(), // Generate a unique ID based on timestamp
      title,
      company,
      description,
      location,
      salary,
    };

    // Add the new job to the list using the addJob function passed as a prop
    addJob(newJob);

    // Redirect to the job list page after posting the job
    navigate('/jobs');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Post a New Job
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Job Title"
          variant="outlined"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Company"
          variant="outlined"
          fullWidth
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Job Description"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Salary"
          variant="outlined"
          fullWidth
          required
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Post Job
        </Button>
      </form>
    </Box>
  );
}

export default PostJob;
