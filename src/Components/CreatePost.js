import { useState, useContext } from 'react';
import axios from 'axios';
import "./createpost.css"
import { Context } from '../context/Context';

export default function CreatePost({ host }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const time = new Date();


    const newPost = {
      username: user,
      title,
      content,
      created_at: time
    }
    try {
      const response = await axios.post(`${host}/create`,
        newPost
      );
      response.data && window.location.replace(`/?user=${user}`);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Awesome Blog Content Goes Here"
          type="text"
          className="content-area"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="submit" type="submit" >Post</button>
      </form>
    </div>
  );
}