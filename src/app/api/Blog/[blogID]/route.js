const { connect } = require("@/app/config/db");
const { default: BlogModel } = require("@/app/models/BlogModel");
const { NextResponse } = require("next/server");
import { unlink, writeFile } from "fs/promises";
import cloudinary from "cloudinary";
import path from "path";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Delete a blog post
export async function DELETE(request, context) {
  try {
    const id = context.params.blogID;
    console.log(id);

    // Connect to the database
    await connect();

    // Find the blog by ID
    const Find_Project = await BlogModel.findById(id);

    // Check if the blog exists
    if (!Find_Project) {
      return NextResponse.json({ message: "Blog not found", status: 404 });
    }

    // Delete the blog from the database
    const _deletedblog = await BlogModel.findByIdAndDelete(id);
    console.log(_deletedblog);

    // Check if the blog was found and deleted
    if (!_deletedblog) {
      return NextResponse.json({
        message: "Blog not found",
        status: 404,
      });
    }

    // Get the Cloudinary public ID from the blog's image URL
    const imagePublicId = Find_Project._id; // Assuming you store the Cloudinary public ID when uploading the image

    // Delete the image from Cloudinary
    try {
      const cloudinaryResponse = await cloudinary.uploader.destroy(
        imagePublicId
      );
      console.log(`Cloudinary response: ${cloudinaryResponse.result}`);
    } catch (error) {
      console.error("Failed to delete image from Cloudinary:", error);
    }

    return NextResponse.json({
      message: "Blog and associated image deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog", status: 500 });
  }
}

// Get a specific blog post
export async function GET(request, context) {
  try {
    await connect();
    const id = context.params.blogID;
    console.log(id);
    const Find_project = await BlogModel.findById(id);
    if (!Find_project) {
      return NextResponse.json({ result: "No Blog Available" });
    } else {
      return NextResponse.json({ Result: Find_project });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}

// Update a blog post
export async function PUT(request, context) {
  try {
    await connect();
    const id = context.params.blogID;
    console.log(id);

    const data = await request.formData();
    const file = data.get("image");
    let newImageUrl = null;
    let newImagePublicId = null;

    // Check if a new image is uploaded
    if (typeof file === "object" && file.name) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Upload the new image to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload_stream(
        {},
        (error, result) => {
          if (error) throw new Error(error);
          newImageUrl = result.secure_url;
          newImagePublicId = result.public_id;
        }
      );

      // Pass the buffer to the upload stream
      uploadResponse.end(buffer);
    }

    // Create a form data object
    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }

    const { blogtitle, author, datetime, description } = formDataObject;
    console.log(blogtitle, author, datetime, description);

    // Find the blog by ID
    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Update blog details
    blog.blogtitle = blogtitle || blog.blogtitle;
    blog.author = author || blog.author;
    blog.datetime = datetime || blog.datetime;
    blog.description = description || blog.description;

    if (newImageUrl && newImagePublicId) {
      // If a new image is uploaded, remove the old image from Cloudinary
      if (blog._id) {
        try {
          await cloudinary.uploader.destroy(blog._id);
        } catch (error) {
          console.error("Failed to delete old image from Cloudinary:", error);
        }
      }

      // Update blog with new image URL and public ID
      blog.image = newImageUrl;
      blog.image_public_id = newImagePublicId;
    }

    await blog.save();

    return NextResponse.json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Error Updating Blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}
