import React, { useEffect, useState } from "react";

function AddNewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: description,
        userId: 1,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setSuccessMessage("Data has been added!");
      });
  };

  return (
    <div className="container">
      {successMessage ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Successfully</strong> {successMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-5">
          <label htmlFor="post-title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="post-title"
            name="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="post-description" className="form-label">
            Post Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="post-description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading ? true : false}
          className="btn btn-primary"
        >
          {loading ? "loading" : "Save Post"}
        </button>
      </form>
    </div>
  );
}

export default AddNewPost;
