import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./blogpage.css";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get("http://localhost:3001/blogs").then((res) => {
      setBlogs(res.data);
      // console.log(res.data)
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/blogs/${id}`)
      .then(() => {
        fetchBlogs();
      })
      .catch((error) => {
        console.log("Unable to delete post");
      });
  };

  return (
    <div className="p-5 text-center blog-page justify-content-center">
      <h1 className="text-center text-2xl pt-4 pb-5">OUR BLOG</h1>
      <div className="blog-con text-center justify-content-center">
        {blogs.map((blog) => (
          <div key={blog._id} className="shadow p-4 blog">
            <Link to={`/blogs/${blog._id}`}>
              <h4 className="pt-3 title">{blog.title}</h4> <br />
              <span>{blog.preview}...</span>
            </Link>
            <div className=" pt-4">
              <button
                className="btn delete-blog"
                onClick={() => handleDelete(blog._id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
