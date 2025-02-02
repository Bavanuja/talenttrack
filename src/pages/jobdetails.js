import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetails = ({ role }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details based on the job ID
    const jobData = JSON.parse(localStorage.getItem("jobs")).find((job) => job.id === id);
    setJob(jobData);
  }, [id]);

  const handleDelete = () => {
    // Delete job logic for employer
    if (role === "employer" && job) {
      let jobs = JSON.parse(localStorage.getItem("jobs"));
      jobs = jobs.filter((job) => job.id !== id);
      localStorage.setItem("jobs", JSON.stringify(jobs));
      navigate("/employer/joblist");
    }
  };

  const handleUpdate = () => {
    // Navigate to a job update page for employer
    if (role === "employer") {
      navigate(`/employer/jobdetails/${id}/edit`);
    }
  };

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      {role === "employer" && (
        <>
          <button onClick={handleUpdate}>Update Job</button>
          <button onClick={handleDelete}>Delete Job</button>
        </>
      )}
    </div>
  );
};

export default JobDetails;
