import Posts from "./Posts"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import axios from "axios"
import { Box, Typography } from "@mui/material"


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


  let renderedPosts = userPosts.length > 0 ?
    userPosts.map(post => (
      <Posts key={post.id} post={post} />
    )) :
    posts.map(post => (
      <Posts post={post} />
    ));

  return (
    <Box sx={{ mx: "auto", width: '100%', maxWidth: 500 }}>
      <h1>Wonderful Blog App</h1>
      {renderedPosts}
    </Box>
  );
}