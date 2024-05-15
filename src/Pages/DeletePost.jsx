import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DeletePost() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    setMessage("The post has been deleted");
  };

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="container">
      {message ? (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {message}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr key={index}>
                <th scope="row">1</th>
                <td>{truncateString(post.title, 20)}</td>
                <td>{truncateString(post.body, 40)}</td>
                <td>
                  <button
                    className="btn me-2"
                    onClick={() => deletePost(post.id)}
                  >
                    <i class="bi bi-trash3"></i>
                  </button>
                  <Link to={`/update-post/${post.id}`}>
                    <i class="bi bi-pencil-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DeletePost;
