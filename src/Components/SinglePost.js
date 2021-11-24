import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./createpost.css"
//will use props
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


  return (
    <div className="single-post">
      <>
        {updateMode ?
          <>
            <input type="text" value={post.title} />
            <br></br>
            <textarea className="content-area" value={post.body} />
          </>
          : (
            <>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </>
          )

        }

      </>
      <span>
        <br />
        by:<Link to={`/?user=${post.user_name}`} className="link">
          <p>{post.user_name}</p>
        </Link>
      </span>
      <p>Posted: {new Date(post.created_at).toDateString()}</p>
      {post.user_name === user?.user && (
        <>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setUpdateMode(true)} >Edit</button>
        </>
      )}

    </div>
  );
}
