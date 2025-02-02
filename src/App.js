import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import JobList from "./pages/joblist";
import JobDetails from "./pages/jobdetails";
import PostJob from "./pages/postjob";
import Joblistemployer from "./pages/joblistemployer";
import JobDetailsemployer from "./pages/jobdetailsemployer";
import { useState, useEffect } from "react";
import { HomeIcon } from "@mui/icons-material/Home";

const App = () => {
  const [user, setUser] = useState(null); // Keep track of user data
  const [role, setRole] = useState(localStorage.getItem("role") || "employee");

  useEffect(() => {
    // Load user data and role (in a real app, this would be handled via a backend call)
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
    setRole(savedUser?.role || "employee");
  }, []);

  return (
    <Router>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/joblist" element={<JobList role={role} />} />
        <Route path="/jobdetails/:id" element={<JobDetails role={role} />} />

        {/* Employer-Only Pages */}
        {role === "employer" && (
          <>
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/employer/joblistemployer" element={<Joblistemployer />} />
            <Route path="/employer/jobdetailsemployer/:id" element={<JobDetailsemployer />} />
          </>
        )}

      </Routes>
    </Router>
  );
};

export default App;
