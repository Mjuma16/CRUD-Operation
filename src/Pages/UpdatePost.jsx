import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdatePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container">
      <h1 className="my-4" style={{ textAlign: "center" }}>
        Update the Post
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="post-title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="post-title"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            value={post.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="post-description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="post-description"
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            value={post.body}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;
