const { connect } = require("@/app/config/db");
const { default: Team } = require("@/app/models/TeamModel");
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
    const id = context.params.teamID;
    console.log(id);

    // Connect to the database
    await connect();

    // Find the user by ID
    const Find_Team = await Team.findById(id);

    // Check if the user exists
    if (!Find_Team) {
      return NextResponse.json({ message: "Request not found", status: 404 });
    }

    // Get the image file path
    // const filePath = `./public/uploads/${file.name}`;
    const imagePath = path.join("./public/uploads/", Find_Team.image);
    console.log(imagePath);
    // return;

    // Delete the user from the database
    const _deletedUser = await Team.findByIdAndDelete(id);

    // Check if the user was found and deleted
    if (!_deletedUser) {
      return NextResponse.json({
        message: "team member not found",
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
      message: "team member deleted successfully",
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
    const id = context.params.teamID;
    console.log(id);
    const Find_team = await Team.findById(id);
    if (!Find_team) {
      return NextResponse.json({ result: "No Request Availible" });
    } else {
      return NextResponse.json({ Result: Find_team });
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
    const id = context.params.teamID;
    console.log(id);
    const data = await request.formData();

    const file = data.get("image");
    console.log(file);
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

    const { username, email, designation } = formDataObject;
    console.log(username, email, designation);
    // Check if the user exists
    const team = await Team.findById(id);
    if (!team) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update the user details
    team.username = username || team.username;
    team.email = email || team.email;
    team.designation = designation || team.designation;

    if (filename) {
      team.image = filename;
    }

    await team.save();

    return NextResponse.json({
      message: "team member record updated successfully",
      team,
    });
  } catch (error) {
    console.error("Error Updating User:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
