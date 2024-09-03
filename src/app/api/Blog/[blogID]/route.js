const { connect } = require("@/app/config/db");
const { default: BlogModel } = require("@/app/models/BlogModel");
const { NextResponse } = require("next/server");
import { unlink, writeFile } from "fs/promises";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Delete team member
export async function DELETE(request, context) {
  try {
    const id = context.params.blogID;
    console.log(id);

    // Connect to the database
    await connect();

    // Find the user by ID
    const Find_Project = await BlogModel.findById(id);

    // Check if the user exists
    if (!Find_Project) {
      return NextResponse.json({ message: "Request not found", status: 404 });
    }

    // Get the image file path
    // const filePath = `./public/uploads/${file.name}`;
    const imagePath = path.join("./public/uploads/", Find_Project.image);
    console.log(imagePath);
    // return;

    // Delete the user from the database
    const _deletedblog = await BlogModel.findByIdAndDelete(id);
    console.log(_deletedblog);
    // Check if the user was found and deleted
    if (!_deletedblog) {
      return NextResponse.json({
        message: "Project not found",
        status: 404,
      });
    }

    // Delete the image file from the filesystem
    try {
      await unlink(imagePath);
      console.log(`Deleted file: ${imagePath}`);
    } catch (error) {
      console.error(`Failed to delete file: ${imagePath}`, error);
    }

    return NextResponse.json({
      message: "Project deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    // Return an error response
    return NextResponse.json({ error: "Failed to delete user", status: 500 });
  }
}

// get Secific
export async function GET(request, context) {
  try {
    await connect();
    const id = context.params.blogID;
    console.log(id);
    const Find_project = await BlogModel.findById(id);
    if (!Find_project) {
      return NextResponse.json({ result: "No Request Availible" });
    } else {
      return NextResponse.json({ Result: Find_project });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}

// pages/api/users/[userID].js
export async function PUT(request, context) {
  try {
    await connect();
    const id = context.params.blogID;
    console.log(id);
    const data = await request.formData();

    const file = data.get("image");
    let filename = null;
    let buffer = null;

    if (typeof file === "object") {
      filename = file.name;
      const byteData = await file.arrayBuffer();
      buffer = Buffer.from(byteData);
      const filePath = `./public/uploads/${filename}`;
      await writeFile(filePath, buffer);
    }

    const formDataObject = {};

    // Iterate over form data entries
    for (const [key, value] of data.entries()) {
      // Assign each field to the formDataObject
      formDataObject[key] = value;
    }

    const { blogtitle, author, datetime, description } = formDataObject;
    console.log(blogtitle, author, datetime, description);

    // Check if the user exists
    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update the user details
    blog.blogtitle = blogtitle || blog.blogtitle;
    blog.author = author || blog.author;
    blog.datetime = datetime || blog.datetime;
    blog.description = description || blog.description;

    if (filename) {
      blog.image = filename;
    }

    await blog.save();

    return NextResponse.json({
      message: "Record updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Error Updating User:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
