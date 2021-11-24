import React, { useContext } from 'react';
import { Button } from '@mui/material'
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

export default function NavBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  const handleReload = () => {
    window.location.replace(`/`) && window.location.reload()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand link" onClick={handleReload}>Home</Link>
      {user ? (
        <>
          <Link to="/create" className="navbar-left link">Create Post</Link>
          <Button variant="text" className="navbar-right link" onClick={handleLogout}>Log Out</Button>
        </>
      ) : (
        <>
          <Link to="/signup" className="navbar-right link">Sign Up</Link>
          <Link to="/login" className="navbar-right link">Login</Link>
        </>
      )}
      {/* {user && "Log Out"} */}
    </nav>
  );

}