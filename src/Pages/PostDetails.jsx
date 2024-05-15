import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { slug, id } = useParams();
  const [post, setPost] = useState({});
  const [author, setAuthhor] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((res) => res.json())
      .then((data) => setAuthhor(data));
  }, [post.userId]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Author - {author.name}</div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
