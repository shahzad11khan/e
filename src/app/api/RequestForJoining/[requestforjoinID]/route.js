const { connect } = require("@/app/config/db");
const { default: RequestForJoining } = require("@/app/models/RequestOfJoining");
const { NextResponse } = require("next/server");
import { unlink } from "fs/promises";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function DELETE(request, context) {
  try {
    const id = context.params.requestforjoinID;
    console.log(id);

    // Connect to the database
    await connect();

    // Find the user by ID
    const Request_Message = await RequestForJoining.findById(id);

    // Check if the user exists
    if (!Request_Message) {
      return NextResponse.json({ message: "Request not found", status: 404 });
    }

    // Get the image file path
    const imagePath = path.join("./public/dpf/", Request_Message.file_cv);
    console.log(imagePath);
    // return;

    // Delete the user from the database
    const _deletedUser = await RequestForJoining.findByIdAndDelete(id);

    // Check if the user was found and deleted
    if (!_deletedUser) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }

    // Delete the image file from the filesystem
    try {
      await unlink(imagePath);
      console.log(`Deleted file: ${imagePath}`);
    } catch (error) {
      console.error(`Failed to delete file: ${imagePath}`, error);
    }

    return NextResponse.json({
      message: "User deleted successfully",
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
    const id = context.params.requestrorjoiningID;
    console.log(id);
    const Specific_Request = await RequestForJoining.findById(id);
    if (!Specific_Request) {
      return NextResponse.json({ result: "No Request Availible" });
    } else {
      return NextResponse.json({ Result: Specific_Request });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}
