import "./signUp.css"
import { useState, useEffect } from "react";
import axios from "axios";

export default function SignUp({ host }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${host}/createuser`, {
        username,
        password
      });
      response.data && window.location.replace("/login");
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <label>
          Username:
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter a username..."
          onChange={e => setUsername(e.target.value)}
        />
        <label>
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter a password..."
          onChange={e => setPassword(e.target.value)}
        />
        <button className="signUpButton" type="submit">Sign Up</button>
      </form>
    </div>
  )
}