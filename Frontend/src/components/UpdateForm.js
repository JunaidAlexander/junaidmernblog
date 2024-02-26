import React, { useState, useEffect } from "react";
import axios from "axios";
import "./updateform.css";

function UpdateForm({
  id,
  InitialTitle,
  InitialPreview,
  InitialPost,
  onUpdate,
}) {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState(InitialTitle);
  const [preview, setPreview] = useState(InitialPreview);
  const [post, setPost] = useState(InitialPost);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get("http://localhost:3001/blogs").then((res) => {
      setBlogs(res.data);
      console.log(res.data);
    });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/blogs/${id}`, { title, preview, post })
      .then(() => {
        onUpdate();
      })
      .catch((error) => {
        console.log("Unable to update blog");
      });
  };

  return (
    <div className="container update-form">
      <label className="pb-2">Title:</label>
      <input
        className=" rounded-xl form-control"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <label className="pb-2">Preview:</label>
      <input
        className="form-control rounded-xl "
        type="text"
        value={preview}
        onChange={(e) => setPreview(e.target.value)}
      />
      <br />
      <br />

      <label className="pb-2">Post:</label>
      <textarea
        rows="10"
        cols="20"
        className="form-control rounded-xl "
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <br />
      <br />
      {/* Button */}
      <button className="btn mb-5 " onClick={handleUpdate}>
        Submit Blog!
      </button>
    </div>
  );
}

export default UpdateForm;
