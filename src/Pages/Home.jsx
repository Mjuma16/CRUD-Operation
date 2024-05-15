import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });
  //this function will truncate the text shorter.
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  //this function will make slug of title for url.
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <div className="container">
      <div className="row">
        {posts.map((post, index) => {
          return (
            <div key={index} className="col-lg-4 mb-4">
              <Link to={`/posts/${convertToSlug(post.title)}/${post.id}`}>
                <div
                  className="card"
                  style={{ width: "20rem", height: "100%" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      {truncateString(post.title, 20)}
                    </h5>
                    <p className="card-text">
                      {truncateString(post.body, 100)}
                    </p>
                    <Link to="#" className="card-link">
                      Card link
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
