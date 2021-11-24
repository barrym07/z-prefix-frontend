import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
//will use props
export default function SinglePost({ host }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  const getPost = async () => {
    const response = await axios.get(`${host}/blogs/${path}`);
    setPost(response.data[0]);
  }

  useEffect(() => {
    getPost();


  }, [path]);
  console.log("post from single:", post);

  return (
    <div className="single-post">


      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <span>
        by:
        <Link to={`/?user=${post.user_name}`} className="link">
          <p>{post.user_name}</p>
        </Link>
      </span>
      <p>Posted: {new Date(post.created_at).toDateString()}</p>
      <button>Delete</button>
      <button>Edit</button>

    </div>
  );
}
