import "./login.css"
import React, { useRef, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../context/Context"
import axios from "axios"

//successful login redirects to home page and shows users posts
//response.data && window.location.replace("/?user="); need to figure out how to do this

export default function Login({ host }) {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(`${host}/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      response.data && window.location.replace(`/?user=${userRef.current.value}`);

    } catch (error) {
      dispatch({ type: "LOGIN_FAIL" });
    }
  }


  return (
    <div className="login">
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          Username:
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit">Login</button>
        <button className="signUpButton" ><Link to="/signup" >Sign Up</Link></button>
      </form>
    </div>
  );
}