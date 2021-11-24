import React from 'react';
import Post from './Post';
import "./posts.css"


//will map over posts
export default function Posts({ post }) {
  return (
    <div className="posts">
      <Post post={post} />
    </div>
  );
}