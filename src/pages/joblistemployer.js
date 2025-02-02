import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Joblistemployer = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch all jobs and filter by employer's jobs
    const fetchedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const employerJobs = fetchedJobs.filter((job) => job.postedBy === "employer");
    setJobs(employerJobs);
  }, []);

  const handleDelete = (id) => {
    // Delete job logic for employer
    let jobs = JSON.parse(localStorage.getItem("jobs"));
    jobs = jobs.filter((job) => job.id !== id);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    setJobs(jobs); // Update state after deleting
  };

  return (
    <div>
      <h1>Your Posted Jobs</h1>
      {jobs.length === 0 ? (
        <p>You haven't posted any jobs yet.</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id}>
            <Link to={`/employer/jobdetails/${job.id}`}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </Link>
            <button onClick={() => handleDelete(job.id)}>Delete Job</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Joblistemployer;
