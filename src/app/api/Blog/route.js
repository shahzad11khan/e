const { connect } = require("@/app/config/db");
const { default: BlogModel } = require("@/app/models/BlogModel");
const { writeFile } = require("fs/promises");
const { NextResponse } = require("next/server");
import path from "path";

// // post team
// export async function POST(Request) {
//   try {
//     await connect();
//     const data = await Request.formData();
//     console.log(data);

//     const file = data.get("image");
//     let filename = "";

//     if (file) {
//       filename = file.name;
//       console.log(filename);

//       // Ensure the uploads directory exists
//       const uploadsDir = path.join(process.cwd(), "public", "uploads");

//       const filePath = path.join(uploadsDir, filename);
//       console.log(`File path: ${filePath}`);

//       const byteData = await file.arrayBuffer();
//       const buffer = Buffer.from(byteData);

//       await writeFile(filePath, buffer);
//     } else {
//       // Use a default image if no file is uploaded
//       filename = "default-image.png"; // Replace with your default image name
//     }

//     // Create an object to store form data
//     const formDataObject = {};
//     // Iterate over form data entries
//     for (const [key, value] of data.entries()) {
//       // Assign each field to the formDataObject
//       formDataObject[key] = value;
//     }

//     const { blogtitle, author, datetime, description } = formDataObject;

//     console.log(blogtitle, author, datetime, description);

//     const existingBlogName = await BlogModel.findOne({ blogtitle });

//     if (existingBlogName) {
//       return NextResponse.json({
//         error: "Blog already exists",
//         status: 400,
//       });
//     }

//     const Post_Blog = new BlogModel({
//       blogtitle,
//       author,
//       datetime,
//       description,
//       image: filename,
//     });

//     const Save_Blog = await Post_Blog.save();
//     console.log(Save_Blog);
//     if (!Save_Blog) {
//       return NextResponse.json({ message: "Blog Not added" });
//     } else {
//       return NextResponse.json({
//         message: "Blog created successfully",
//         success: true,
//         status: 200,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: error.message, status: 500 });
//   }
// }

const uploadsDir = path.join(process.cwd(), "public", "uploads");

export async function POST(Request) {
  try {
    await connect();
    const data = await Request.formData();
    console.log(data);

    const file = data.get("image");
    let filename = "";

    if (file) {
      filename = file.name;
      console.log(filename);

      const filePath = path.join(uploadsDir, filename);
      console.log(`File path: ${filePath}`);

      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Ensure the uploads directory exists
      await writeFile(filePath, buffer);
    } else {
      // Use a default image if no file is uploaded
      filename = "default-image.png"; // Replace with your default image name
    }

    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }
    const { blogtitle, author, datetime, description } = formDataObject;

    console.log(blogtitle, author, datetime, description);

    const existingUser = await BlogModel.findOne({ blogtitle });

    if (existingUser) {
      return NextResponse.json({
        error: "User already exists",
        status: 400,
      });
    }

    const Post_Message = new BlogModel({
      blogtitle,
      author,
      datetime,
      description,
      image: filename,
    });

    const Save_User = await Post_Message.save();
    console.log(Save_User);

    return NextResponse.json({
      message: "BLog created successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
// get all team members
export async function GET() {
  try {
    await connect();
    const All_Blog = await BlogModel.find();
    const BlogCount = await BlogModel.countDocuments();
    if (!All_Blog || All_Blog.length === 0) {
      return NextResponse.json({ Result: All_Blog });
    } else {
      return NextResponse.json({ Result: All_Blog, count: BlogCount });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}
