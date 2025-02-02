import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import JobList from "./pages/joblist";
import JobDetails from "./pages/jobdetails";
import PostJob from "./pages/postjob";
import Login from "./pages/login";
import Joblistemployer from "./pages/joblistemployer";
import JobDetailsemployer from "./pages/jobdetailsemployer";
import Register from "./pages/register";
import Navbar from "./component/navbar";

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
      {!(window.location.pathname === "/" || window.location.pathname === "/register") && (
        <Navbar role={role} />
      )}
      
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/joblist" element={<JobList role={role} />} />
        <Route path="/jobdetails/:id" element={<JobDetails role={role} />} />

        {/* Employer-Only Pages */}
        {role === "employer" && (
          <>
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/joblistemployer" element={<Joblistemployer />} />
            <Route path="/jobdetailsemployer/:id" element={<JobDetailsemployer />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
