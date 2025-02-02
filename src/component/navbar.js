// Navbar.js
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
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/joblist">
          Job List
        </Button>
        {role === "employer" ? (
          <>
            <Button color="inherit" component={Link} to="/postjob">
              Post Job
            </Button>
            <Button color="inherit" component={Link} to="/employer/joblist">
              Your Jobs
            </Button>
          </>
        ) : null}
        <Button color="inherit" component={Link} to="/login">
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
