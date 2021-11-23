import "./login.css"
import React from "react"
import { Link } from "react-router-dom"


export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="loginForm">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button className="loginButton" >Login</button>
        <button className="signUpButton" ><Link to="/signup" >Sign Up</Link></button>
      </form>
    </div>
  );
}