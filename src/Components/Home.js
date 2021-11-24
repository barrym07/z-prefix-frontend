// NEED TO RESET userPosts state when home page is loaded again

import "./home.css"
import Posts from "./Posts"
import "./posts.css"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import axios from "axios"

export default function Home({ posts, host }) {

  const location = useLocation();
  const searchString = location.search;
  const [userPosts, setUserPosts] = useState([]);


  useEffect(() => {
    const getUserPosts = async () => {
      const response = await axios.get(`${host}/${searchString}`)
      setUserPosts(response.data);
    }
    getUserPosts();

  }, [searchString])
  console.log("userPosts:", userPosts);

  let renderedPosts = userPosts.length > 0 ?
    userPosts.map(post => (
      <Posts key={post.id} post={post} />
    )) :
    posts.map(post => (
      <Posts post={post} />
    ));

  return (
    <div classname="home" >

      <h1>Wonderful Blog App</h1>
      {/* {userPosts.map(post => (
        <Posts key={post.id} post={post} />
      ))}
      {posts.map(post => (
        <Posts post={post} />
      ))} */}
      {renderedPosts}

    </div>
  );
}