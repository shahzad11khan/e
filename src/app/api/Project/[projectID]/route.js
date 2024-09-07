const { connect } = require("@/app/config/db");
const { default: Project } = require("@/app/models/ProjectModel");
const { NextResponse } = require("next/server");
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(request, context) {
  try {
    const id = context.params.projectID;
    console.log("project ID:", id);

    // Connect to the database
    await connect();

    // Find the blog by ID
    const blog = await Project.findById(id);

    if (!blog) {
      return NextResponse.json({ message: "project not found", status: 404 });
    }

    console.log("project:", blog);
    const imagePublicId = blog.publicId; // Ensure this matches your schema
    console.log("Image Public ID:", imagePublicId);

    // Delete the blog from the database
    const deletedBlog = await Project.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({
        message: "Failed to delete project",
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
      message: "project and associated image deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({
      error: "Failed to delete project",
      status: 500,
    });
  }
}

// get Secific
export async function GET(request, context) {
  try {
    await connect();
    const id = context.params.projectID;
    console.log(id);
    const Find_project = await Project.findById(id);
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
    const id = context.params.projectID;
    console.log(id);

    const data = await request.formData();
    const file = data.get("Image");
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
    const { ProjectName, ProjectCategory, ProjectDescription } = formDataObject;
    console.log(ProjectName, ProjectCategory, ProjectDescription);

    // Find the blog by ID
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Update blog details
    project.ProjectName = ProjectName || project.ProjectName;
    project.ProjectCategory = ProjectCategory || project.ProjectCategory;
    project.ProjectDescription =
      ProjectDescription || project.ProjectDescription;
    console.log("old public id:", project.publicId);
    console.log("old image url", project.Image);
    // console.log(newImagePublicId);

    if (newImageUrl && newImagePublicId) {
      // If a new image is uploaded, remove the old image from Cloudinary
      if (project.publicId) {
        try {
          await cloudinary.uploader.destroy(project.publicId);
          console.log("file deleted");
        } catch (error) {
          console.error("Failed to delete old image from Cloudinary:", error);
        }
      }

      // Update blog with new image URL and public ID
      project.Image = newImageUrl;
      console.log("new image url", project.Image);

      project.publicId = newImagePublicId;
      console.log("new image public id :", project.publicId);
    }
    // return;

    await project.save();

    return NextResponse.json({
      message: "Blog updated successfully",
      project,
    });
  } catch (error) {
    console.error("Error Updating Blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}
