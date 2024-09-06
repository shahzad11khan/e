// const { connect } = require("@/app/config/db");
// const { default: Team } = require("@/app/models/TeamModel");
// const { NextResponse } = require("next/server");
// import { cloudinaryLoader } from "next-cloudinary";
// Configure Cloudinary
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";
import { connect } from "@/app/config/db";
import Team from "@/app/models/TeamModel";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(Request) {
  try {
    await connect();
    const data = await Request.formData();
    console.log(data);

    const file = data.get("image");
    let filename = "default-image.png"; // Default image

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

      filename = uploadResponse.secure_url; // Use Cloudinary URL
      console.log(`Uploaded image URL: ${filename}`);
    }

    // Extract form data
    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }
    const { username, email, designation, LinkedIn, Github } = formDataObject;

    console.log(username, email, designation, LinkedIn, Github);

    const existingUser = await Team.findOne({ email });

    if (existingUser) {
      return NextResponse.json({
        error: "User already exists",
        status: 400,
      });
    }

    const Post_Team = new Team({
      username,
      email,
      designation,
      LinkedIn,
      Github,
      image: filename,
    });

    const Save_Team = await Post_Team.save();
    console.log(Save_Team);

    if (!Save_Team) {
      return NextResponse.json({ message: "Team Member Not added" });
    } else {
      return NextResponse.json({
        message: "Team Member created successfully",
        success: true,
        status: 200,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}

export async function GET() {
  try {
    await connect();
    const All_Team = await Team.find();
    const teamCount = await Team.countDocuments();

    if (!All_Team || teamCount.length === 0) {
      return NextResponse.json({ result: All_Team });
    } else {
      return NextResponse.json({ Result: All_Team, count: teamCount });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}
