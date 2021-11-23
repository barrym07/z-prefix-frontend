import "./createpost.css"

export default function CreatePost() {
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form className="create-form">
        <input type="text" placeholder="Title" />
        <br />
        <textarea placeholder="Awesome Blog Content Goes Here" type="text" className="content-area" />
        <button className="submit" >Post</button>
      </form>
    </div>
  );
}