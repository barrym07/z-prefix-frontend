import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

export default function NavBar() {
  const user = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Home</Link>
      <Link to="/create" className="navbar-left">Create Post</Link>
      {user ? (<botton className="navbar-right">Log Out</botton>) : (
        <>
          <Link to="/signup" className="navbar-right">Sign Up</Link>
          <Link to="/login" className="navbar-right">Login</Link>
        </>

      )
      }
      {/* {user && "Log Out"} */}
    </nav>
  );

}