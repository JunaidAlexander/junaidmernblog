require('dotenv').config(); // This must be the first line in your server.js  
const express = require("express");  
const mongoose = require("mongoose");  
const cors = require("cors");  
const bodyParser = require("body-parser");  
const Blog = require("./models/blogSchema");  

const app = express();  

// Connect to MongoDB  
const dbURI = process.env.DB_URI;  // Fetch the DB_URI from environment variables  
console.log("Database URI:", dbURI); // Log to verify it's being read correctly  

mongoose  
    .connect(dbURI, {  
        useNewUrlParser: true,  
        useUnifiedTopology: true  
    })  
    .then(() => {  
        app.listen(process.env.PORT || 3001, () => {  
            console.log("Server and MongoDB are connected");  
        });  
    })  
    .catch(error => {  
        console.error("Unable to connect to Server and MongoDB:", error);  
    });  
// middleware
app.use(bodyParser.json());
app.use(cors());

// GET blogs
app.get("/blogs", async (req, res) => {
	try {
		const blogs = await Blog.find();
		res.status(200).json(blogs);
	} catch (error) {
		console.error("Error fetching blogs:", error);
		res.status(500).json({ message: "Unable to get blogs", error });
	}
});

// GET blog by ID
app.get("/blogs/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const singleBlog = await Blog.findById(id);
		if (singleBlog) {
			res.status(200).json(singleBlog);
		} else {
			res.status(404).json({ message: "Blog not found" });
		}
	} catch (error) {
		console.error("Error fetching blog by ID:", error);
		res.status(500).json({ message: "Unable to get blog by ID", error });
	}
});

// POST blog
app.post("/blogs", async (req, res) => {
	const { title, preview, post } = req.body;
	const blog = new Blog({ title, preview, post });
	try {
		const savedBlog = await blog.save();
		res
			.status(201)
			.json({ message: "Blog was CREATED successfully", blog: savedBlog });
	} catch (error) {
		console.error("Error posting blog:", error);
		res.status(400).json({ message: "Unable to post blog", error });
	}
});

// UPDATE blog
app.put("/blogs/:id", async (req, res) => {
	const { id } = req.params;
	const { title, preview, post } = req.body;
	try {
		const updatedBlog = await Blog.findByIdAndUpdate(
			id,
			{ title, preview, post },
			{ new: true }
		);
		if (updatedBlog) {
			res
				.status(200)
				.json({ message: "Blog was successfully UPDATED", blog: updatedBlog });
		} else {
			res.status(404).json({ message: "Blog not found" });
		}
	} catch (error) {
		console.error("Error updating blog:", error);
		res.status(400).json({ message: "Unable to update blog", error });
	}
});

// DELETE blog
app.delete("/blogs/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deletedBlog = await Blog.findByIdAndDelete(id);
		if (deletedBlog) {
			res.status(200).json({ message: "Blog was successfully DELETED" });
		} else {
			res.status(404).json({ message: "Blog not found" });
		}
	} catch (error) {
		console.error("Error deleting blog:", error);
		res.status(500).json({ message: "Unable to delete blog", error });
	}
});
