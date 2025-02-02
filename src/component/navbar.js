import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Navbar = ({ role }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Talent Track
        </Typography>
        <Button color="inherit" component={Link} to="/home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/joblist">
          Job List
        </Button>
        <Button color="inherit" component={Link} to="/jobdetails/:id">
          Job Details
        </Button>
        
        {/* Only show 'Post Job' and 'Your Jobs' for Employers */}
        {role === "employer" && (
          <>
            <Button color="inherit" component={Link} to="/postjob">
              Post Job
            </Button>
            <Button color="inherit" component={Link} to="/joblistemployer">
              Your Jobs
            </Button>
          </>
        )}
        
        {/* These buttons are available for all users */}
        <Button color="inherit" component={Link} to="/">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
