// const { connect } = require("@/app/config/db");
// const { default: BlogModel } = require("@/app/models/BlogModel");
// const { writeFile } = require("fs/promises");
// const { NextResponse } = require("next/server");
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // post team
// export async function POST(Request) {
//   try {
//     await connect();
//     const data = await Request.formData();
//     console.log(data);

//     const file = data.get("image");
//     const filename = file.name;
//     console.log(filename);
//     const byteData = await file.arrayBuffer();
//     const buffer = Buffer.from(byteData);

//     // const filePath = `./uploads/${file.name}`;
//     const filePath = `./public/uploads/${file.name}`;

//     await writeFile(filePath, buffer);
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

// // get all team members
// export async function GET() {
//   try {
//     await connect();
//     const All_Blog = await BlogModel.find();
//     const BlogCount = await BlogModel.countDocuments();
//     if (!All_Blog || All_Blog.length === 0) {
//       // return NextResponse.json({ Result: "No Project Availible" });
//       return NextResponse.json({ Result: All_Blog });
//     } else {
//       return NextResponse.json({ Result: All_Blog, count: BlogCount });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ Message: "Internal Server Error " });
//   }
// }

const { connect } = require("@/app/config/db");
const { default: BlogModel } = require("@/app/models/BlogModel");
const { writeFile } = require("fs/promises");
const { NextResponse } = require("next/server");

// post team
export async function POST(Request) {
  try {
    await connect();
    const data = await Request.formData();
    console.log(data);

    const file = data.get("image");
    const filename = file.name;
    console.log(filename);
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // const filePath = `./uploads/${file.name}`;
    const filePath = `./public/uploads/${file.name}`;

    await writeFile(filePath, buffer);
    const formDataObject = {};

    // Iterate over form data entries
    for (const [key, value] of data.entries()) {
      // Assign each field to the formDataObject
      formDataObject[key] = value;
    }
    const { blogtitle, author, datetime, description } = formDataObject;

    console.log(blogtitle, author, datetime, description);

    const existingBlogName = await BlogModel.findOne({ blogtitle });

    if (existingBlogName) {
      return NextResponse.json({
        error: "Blog already exists",
        status: 400,
      });
    }

    const Post_Blog = new BlogModel({
      blogtitle,
      author,
      datetime,
      description,
      image: filename,
    });

    const Save_Blog = await Post_Blog.save();
    console.log(Save_Blog);
    if (!Save_Blog) {
      return NextResponse.json({ message: "Blog Not added" });
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
