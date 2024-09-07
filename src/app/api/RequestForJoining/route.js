const { connect } = require("@/app/config/db");
const { default: RequestForJoining } = require("@/app/models/RequestOfJoining");
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// post
export async function POST(Request) {
  try {
    await connect();
    const data = await Request.formData();
    console.log(data);

    const file = data.get("file_cv");
    let filename = "";
    let publicId = "";

    if (file) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);
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
      publicId = uploadResponse.public_id; // Use Cloudinary URL
      console.log(`Uploaded image ID: ${publicId}`);
    }

    const formDataObject = {};
    // Iterate over form data entries
    for (const [key, value] of data.entries()) {
      // Assign each field to the formDataObject
      formDataObject[key] = value;
    }
    const { username, email, phone, experience, expected_salary } =
      formDataObject;

    console.log(username, email, phone, experience, expected_salary);

    const Post_Request = new RequestForJoining({
      username,
      email,
      phone,
      experience,
      expected_salary,
      file_cv: filename,
      publicId,
    });

    const Save_Request = await Post_Request.save();
    console.log(Save_Request);
    if (!Save_Request) {
      return NextResponse.json({ message: "data Not added" });
    } else {
      return NextResponse.json({
        message: "User  data sended  successfully",
        success: true,
        status: 200,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}

// get
export async function GET() {
  try {
    await connect();
    const All_Request = await RequestForJoining.find();
    const countRequest = await RequestForJoining.countDocuments();
    if (!All_Request || All_Request.length === 0) {
      return NextResponse.json({ result: All_Request });
    } else {
      return NextResponse.json({ Result: All_Request, count: countRequest });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}
