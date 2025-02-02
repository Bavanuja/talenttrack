import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JobList = ({ role }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch all jobs (or filter based on the user role)
    const fetchedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    if (role === "employee") {
      setJobs(fetchedJobs); // Show all jobs for employee
    } else if (role === "employer") {
      const employerJobs = fetchedJobs.filter((job) => job.postedBy === "employer");
      setJobs(employerJobs); // Show only jobs posted by the employer for employer
    }
  }, [role]);

  return (
    <div>
      <h1>Job List</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <Link to={`/jobdetails/${job.id}`}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
