import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // Fetch jobs from local storage (or you could connect to an API)
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  // Navigate to the PostJob page
  const handlePostJob = () => {
    navigate("/jobdetails");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Available Job Listings
      </Typography>

      {/* Show message when no jobs are available */}
      {jobs.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          No jobs available at the moment. 
          <Button variant="outlined" color="primary" onClick={handlePostJob}>
            Post a Job
          </Button>
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.location}
                  </Typography>
                  <Button variant="contained" color="primary" href={`/job/${job.id}`}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default JobList;
