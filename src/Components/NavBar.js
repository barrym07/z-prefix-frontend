import React, { useContext } from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

export default function NavBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand link">Home</Link>
      {user ? (
        <>
          <Link to="/create" className="navbar-left link">Create Post</Link>
          <button className="navbar-right link" onClick={handleLogout}>Log Out</button>
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