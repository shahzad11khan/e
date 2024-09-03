const { connect } = require("@/app/config/db");
const { default: Project } = require("@/app/models/ProjectModel");
const { writeFile } = require("fs/promises");
const { NextResponse } = require("next/server");
export const config = {
  api: {
    bodyParser: false,
  },
};

// post team
export async function POST(Request) {
  try {
    await connect();
    const data = await Request.formData();
    console.log(data);

    const file = data.get("Image");
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
    const { ProjectName, ProjectCategory, ProjectDescription } = formDataObject;

    console.log(ProjectName, ProjectCategory);

    const existingProjectName = await Project.findOne({ ProjectName });

    if (existingProjectName) {
      return NextResponse.json({
        error: "project already exists",
        status: 400,
      });
    }

    const Post_Project = new Project({
      ProjectName,
      ProjectCategory,
      ProjectDescription,
      Image: filename,
    });

    const Save_Project = await Post_Project.save();
    console.log(Save_Project);
    if (!Save_Project) {
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
