import React, { useState, useEffect } from "react";
import axios from "axios";
import "./createblog.css";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [post, setPost] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get("http://localhost:3001/blogs").then((res) => {
      // console.log(res.data)
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/blogs", { title, preview, post })
      .then(() => {
        setTitle("");
        setPreview("");
        setPost("");
        fetchBlogs();
      })
      .catch((error) => {
        // console.log('Unable to post blog')
      });
  };

  return (
    <div className=" container p-5 mt-5 mb-5 text-center createblog">
      <h1 className="text-center text-2xl p-4">CREATE A BLOG</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <label>Title: </label>
          <br />
          <input
            className="form-control  rounded-xl p-2 bg-zinc-300"
            type="text"
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          {/* Preview Input */}
          <label>Preview: </label>
          <br />
          <input
            className="form-control rounded-xl p-2 "
            type="text"
            placeholder="Enter Preview Here"
            value={preview}
            onChange={(e) => setPreview(e.target.value)}
          />
          <br />
          <br />
          {/* Post Input */}
          <label>Post:</label>
          <br />
          <textarea
            className="form-control  rounded-xl  p-2"
            placeholder="Enter Your Thoughts Here..."
            value={post}
            rows="6"
            cols="10"
            onChange={(e) => setPost(e.target.value)}
          />
          <br />
          <br />
          {/* Button */}
          <button className="btn btn-outline-success " type="submit">
            Submit Blog!
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
