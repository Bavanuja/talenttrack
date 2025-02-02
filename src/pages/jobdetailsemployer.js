import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetailsemployer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [editedJob, setEditedJob] = useState({ title: "", description: "" });

  useEffect(() => {
    // Fetch job details based on job ID
    const jobData = JSON.parse(localStorage.getItem("jobs")).find((job) => job.id === id);
    setJob(jobData);
    if (jobData) {
      setEditedJob({ title: jobData.title, description: jobData.description });
    }
  }, [id]);

  const handleDelete = () => {
    // Delete job logic for employer
    let jobs = JSON.parse(localStorage.getItem("jobs"));
    jobs = jobs.filter((job) => job.id !== id);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    navigate("/employer/joblist");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let jobs = JSON.parse(localStorage.getItem("jobs"));
    jobs = jobs.map((job) =>
      job.id === id ? { ...job, ...editedJob } : job
    );
    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert("Job updated successfully!");
    navigate("/employer/joblist");
  };

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>Job Details</h1>
      <h2>{job.title}</h2>
      <p>{job.description}</p>

      <h3>Update Job</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <input
            type="text"
            name="title"
            value={editedJob.title}
            onChange={(e) => setEditedJob({ ...editedJob, title: e.target.value })}
            placeholder="Job Title"
          />
        </div>
        <div>
          <textarea
            name="description"
            value={editedJob.description}
            onChange={(e) => setEditedJob({ ...editedJob, description: e.target.value })}
            placeholder="Job Description"
          />
        </div>
        <button type="submit">Update Job</button>
      </form>

      <button onClick={handleDelete}>Delete Job</button>
    </div>
  );
};

export default JobDetailsemployer;
