// const { connect } = require("@/app/config/db");
// const { default: Project } = require("@/app/models/ProjectModel");
// const { writeFile } = require("fs/promises");
// const { NextResponse } = require("next/server");

import { connect } from "@/app/config/db";
import Project from "@/app/models/ProjectModel";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";
import { Readable } from "stream";
import { promisify } from "util";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pipeline = promisify(Readable.prototype.pipe);

export async function POST(Request) {
  try {
    await connect();
    const data = await Request.formData();

    const file = data.get("Image");
    let imageUrl = "";
    let publicId = "";

    if (file) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Upload to Cloudinary
      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream({ resource_type: "auto" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      imageUrl = uploadResponse.secure_url;
      publicId = uploadResponse.public_id;

      console.log(`Uploaded image URL: ${imageUrl}`);
      console.log(`Uploaded image URL: ${publicId}`);
    } else {
      // Use a default image if no file is uploaded
      imageUrl =
        "https://res.cloudinary.com/dpj2ewekx/image/upload/v1725603041/samples/smile.jpg"; // Replace with your default image URL
    }

    const { ProjectName, ProjectCategory, ProjectDescription } =
      Object.fromEntries(data.entries());

    const existingProjectName = await Project.findOne({ ProjectName });

    if (existingProjectName) {
      return NextResponse.json({
        error: "Project already exists",
        status: 400,
      });
    }

    const Post_Project = new Project({
      ProjectName,
      ProjectCategory,
      ProjectDescription,
      Image: imageUrl, // Store the Cloudinary URL in MongoDB
      publicId,
    });

    const Save_Project = await Post_Project.save();
    if (!Save_Project) {
      return NextResponse.json({ message: "Project not added" });
    } else {
      return NextResponse.json({
        message: "Project created successfully",
        success: true,
        status: 200,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}

// get all team members
export async function GET() {
  try {
    await connect();
    const All_Projects = await Project.find();
    const ProjectCount = await Project.countDocuments();
    if (!All_Projects || All_Projects.length === 0) {
      // return NextResponse.json({ Result: "No Project Availible" });
      return NextResponse.json({ Result: All_Projects });
    } else {
      return NextResponse.json({ Result: All_Projects, count: ProjectCount });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}
