import React from "react";
import "./post.css"
import { Link } from "react-router-dom";

//will render from posts state
export default function Post({ post }) {
  return (
    <div className="posts">

      <Link to={`/post/${post.id}`} className="link"> {post.title} </Link>
      <p>Posted: {new Date(post.created_at).toDateString()}</p>
      <span>
        by:
        <Link to={`/?user=${post.user_name}`} className="link">
          <p>{post.user_name}</p>
        </Link>
      </span>
      <p className="post-content">{post.body}</p>

    </div>
  );
}