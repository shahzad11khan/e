const { connect } = require("@/app/config/db");
const { default: Team } = require("@/app/models/TeamModel");
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
import path from "path";
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
// post team
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
    // Iterate over form data entries
    for (const [key, value] of data.entries()) {
      // Assign each field to the formDataObject
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

// get all team members
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
