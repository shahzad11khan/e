import bcrypt from "bcrypt";
import User from "@/app/models/UserModel";
import { connect } from "@/app/config/db.js";
import { NextResponse } from "next/server";
import { sendEmail } from "@/app/helper/mailer";
import { writeFile } from "fs/promises";
import path from "path";

const uploadsDir = path.join(process.cwd(), "public", "uploads");

export async function POST(Request) {
  try {
    await connect();
    const data = await Request.formData();
    console.log(data);

    const file = data.get("Image");
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
    const { username, email, password, confirmpassword } = formDataObject;

    console.log(username, email, password, confirmpassword);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({
        error: "User already exists",
        status: 400,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const Post_Message = new User({
      username,
      email,
      password: hashedPassword,
      confirmpassword,
      Image: filename,
    });

    const Save_User = await Post_Message.save();
    console.log(Save_User);

    await sendEmail({ email, emailType: "VERIFY", userId: Save_User._id });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
