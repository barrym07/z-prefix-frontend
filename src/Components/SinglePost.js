import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Context } from "../context/Context";
import "./createpost.css"



export default function SinglePost({ host }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const user = useContext(Context);
  const [post, setPost] = useState({});

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const getPost = async () => {
    const response = await axios.get(`${host}/blogs/${path}`);
    setPost(response.data[0]);
    setTitle(response.data[0].title)
    setBody(response.data[0].body)
  }

  useEffect(() => {
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${host}/blogs/${path}`);
      console.log(response);
      window.location.replace(`/?user=${user.user}`);
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async () => {
    const newPost = {
      title,
      content: body
    }
    try {
      const response = await axios.put(`${host}/blogs/${path}`, newPost);
      response.data && window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Box sx={{ mx: "auto", width: '100%' }}>
      <>
        {updateMode ?
          <>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br></br>
            <textarea className="content-area" value={body} onChange={(e) => setBody(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
          </>
          : (
            <>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </>
          )
        }
      </>
      <Typography variant="button" display="block" gutterBottom>
        by: <Link to={`/?user=${post.user_name}`} className="link">
          {post.user_name}
        </Link>
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Posted: {new Date(post.created_at).toDateString()}
      </Typography>
      {post.user_name === user?.user && (
        <>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setUpdateMode(true)} >Edit</button>
        </>
      )}
    </Box>
  );
}
