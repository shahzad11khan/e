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
    console.log("Blog ID:", id);

    // Connect to the database
    await connect();

    // Find the blog by ID
    const blog = await BlogModel.findById(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found", status: 404 });
    }

    console.log("Blog:", blog);
    const imagePublicId = blog.publicId; // Ensure this matches your schema
    console.log("Image Public ID:", imagePublicId);

    // Delete the blog from the database
    const deletedBlog = await BlogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({
        message: "Failed to delete blog",
        status: 500,
      });
    }

    // Delete the image from Cloudinary if publicId exists
    if (imagePublicId) {
      try {
        const cloudinaryResponse = await cloudinary.v2.uploader.destroy(
          imagePublicId
        );
        console.log(`Cloudinary response: ${cloudinaryResponse.result}`);
      } catch (error) {
        console.error("Failed to delete image from Cloudinary:", error);
      }
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
      const uploadResponse = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        // Write buffer to the upload stream
        uploadStream.end(buffer);
      });

      newImageUrl = uploadResponse.secure_url;
      newImagePublicId = uploadResponse.public_id;

      // console.log("New Image URL:", newImageUrl);
      // console.log("New Image Public ID:", newImagePublicId);
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
    console.log("old public id:", blog.publicId);
    console.log("old image url", newImageUrl);
    console.log(newImagePublicId);

    if (newImageUrl && newImagePublicId) {
      // If a new image is uploaded, remove the old image from Cloudinary
      if (blog.publicId) {
        try {
          await cloudinary.uploader.destroy(blog.publicId);
          console.log("file deleted");
        } catch (error) {
          console.error("Failed to delete old image from Cloudinary:", error);
        }
      }

      // Update blog with new image URL and public ID
      blog.image = newImageUrl;
      console.log(blog.image);

      blog.publicId = newImagePublicId;
      console.log("new image public id :", blog.publicId);
    }
    // return;

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
