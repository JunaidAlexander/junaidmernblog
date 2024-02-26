import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";
import "./blogprofile.css";

function BlogProfile() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); // Initialize blog state as null
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get(`http://localhost:3001/blogs/${id}`).then((res) => {
      setBlog(res.data);
      console.log(res.data);
    });
  };

  if (!blog) {
    // Render loading state while data is being fetched
    return <div>Loading...</div>;
  }

  const handleUpdateClick = () => {
    setSelectedBlog(blog);
  };

  const handleUpdateDone = () => {
    setSelectedBlog(null);
    fetchBlogs(); // Fetch updated data after update
  };

  return (
    <div className="text-center p-6 bg-light pb-5 ">
      <h1 className=" pt-4 pb-4 full-b">FULL BLOG</h1>
      <div className="container blog-p bg-tertiary shadow pt-5 pb-5 mb-4">
        {selectedBlog === blog && (
          <UpdateForm
            id={id}
            InitialTitle={blog.title}
            InitialPreview={blog.preview}
            InitialPost={blog.post}
            onUpdate={handleUpdateDone}
          />
        )}
        <h4 className=" p-4">Title: {blog.title}</h4>
        <br />
        <br />
        <span id="prev">Preview: {blog.preview}</span>
        <br />
        <br />
        <span className="p-4">Created: {blog.createdAt}</span>
        <br />
        <br />
        <p
          className="blog-para"
          dangerouslySetInnerHTML={{
            __html: blog.post ? blog.post.replace(/\n/g, "<br />") : "", // Check if blog.post is defined
          }}
        />
        <div>
          <button
            className="btn mt-3"
            ata-bs-toggle="modal"
            data-bs-target="#updateBlog"
            onClick={handleUpdateClick}
          >
            Update Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogProfile;
