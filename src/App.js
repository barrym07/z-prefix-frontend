import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from './context/Context';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import SinglePost from './Components/SinglePost';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import axios from 'axios';
require("dotenv").config();
//const host = process.env.BACKEND_URL || "http://localhost:5000";

function App() {
  const user = useContext(Context);


  const [posts, setPosts] = useState([]);

  function setHost() {
    let host;
    host = "https://barry-z-prefix-api.herokuapp.com";
    // if (process.env.NODE_ENV === 'development') {
    //   host = "http://localhost:3001";
    //   return host;
    // } else {
    //   host = "https://barry-z-prefix-api.herokuapp.com";
    //   return host;
    // }
    return host;
  }
  const getPosts = async () => {
    const response = await axios.get(`${setHost()}/blogs`);
    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  console.log("posts:", posts);


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home posts={posts} host={setHost()} />} />
        <Route exact path="/create" element={user ? <CreatePost host={setHost()} /> : <Login />} />
        <Route exact path="/post/:id" element={<SinglePost host={setHost()} />} />
        <Route exact path="/login" element={<Login host={setHost()} />} />
        <Route exact path="/signup" element={<SignUp host={setHost()} />} />
      </Routes>
    </div>
  );
}


export default App;
