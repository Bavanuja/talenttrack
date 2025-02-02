import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';

function JobDetails({ jobs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return <Typography variant="h6">Job not found</Typography>;
  }

  const { title, company, description, location, salary } = job;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {company} | {location}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      <Typography variant="h6">Salary: {salary}</Typography>
      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/jobs')}
        sx={{ mt: 2 }}
      >
        Back to Job Listings
      </Button>
    </Box>
  );
}

export default JobDetails;
