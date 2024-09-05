const { connect } = require("@/app/config/db");
const { default: BlogModel } = require("@/app/models/BlogModel");
// const { writeFile } = require("fs/promises");
const { NextResponse } = require("next/server");
// import path from "path";

// // post team
// export async function POST(Request) {
//   try {
//     await connect();
//     const data = await Request.formData();
//     console.log(data);

//     const file = data.get("image");
//     // let filename = "";
//     const byteData = await file.arrayBuffer();
//     const buffer = Buffer.from(byteData);

//     // Convert the image to Base64
//     const base64Image = buffer.toString("base64");
//     const mimeType = file.type; // Get the MIME type (image/png, image/jpeg, etc.)
//     const base64String = `data:${mimeType};base64,${base64Image}`; // This will be stored in the DB

//     // if (file) {
//     //   filename = file.name;
//     //   console.log(filename);

//     //   // Ensure the uploads directory exists
//     //   const uploadsDir = path.join(process.cwd(), "public", "uploads");

//     //   const filePath = path.join(uploadsDir, filename);
//     //   console.log(`File path: ${filePath}`);

//     //   const byteData = await file.arrayBuffer();
//     //   const buffer = Buffer.from(byteData);

//     //   await writeFile(filePath, buffer);
//     // } else {
//     //   // Use a default image if no file is uploaded
//     //   filename = "default-image.png"; // Replace with your default image name
//     // }

//     // // Create an object to store form data
//     // const formDataObject = {};
//     // // Iterate over form data entries
//     // for (const [key, value] of data.entries()) {
//     //   // Assign each field to the formDataObject
//     //   formDataObject[key] = value;
//     // }

//     const { blogtitle, author, datetime, description } = Object.fromEntries(
//       data.entries()
//     );
//     // const { blogtitle, author, datetime, description } = formDataObject;

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
//       image: base64String,
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
export async function POST(Request) {
  try {
    // Connect to the database
    await connect();

    // Retrieve form data
    const data = await Request.formData();

    // Extract the image file from the form data
    const file = data.get("image");

    // Handle the image upload and convert it to Base64
    let base64String = "";
    if (file) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Convert the image to Base64
      const base64Image = buffer.toString("base64");
      const mimeType = file.type; // Get the MIME type (image/png, image/jpeg, etc.)
      base64String = `data:${mimeType};base64,${base64Image}`; // This will be stored in the DB
    } else {
      // Use a default image if no file is uploaded
      base64String = "data:image/png;base64,DEFAULT_IMAGE_BASE64_STRING"; // Replace with your default image Base64 string
    }

    // Extract other form data fields
    const { blogtitle, author, datetime, description } = Object.fromEntries(
      data.entries()
    );

    // Check if a blog with the same title already exists
    const existingBlog = await BlogModel.findOne({ blogtitle });

    if (existingBlog) {
      return NextResponse.json({
        error: "Blog already exists",
        status: 400,
      });
    }

    // Create a new blog entry
    const newBlog = new BlogModel({
      blogtitle,
      author,
      datetime,
      description,
      image: base64String, // Save the image as a Base64 string
    });

    // Save the blog to the database
    const savedBlog = await newBlog.save();

    // Return success or failure message based on the result
    if (!savedBlog) {
      return NextResponse.json({ message: "Blog not added", status: 500 });
    } else {
      return NextResponse.json({
        message: "Blog created successfully",
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
