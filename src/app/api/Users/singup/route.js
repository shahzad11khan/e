import bcrypt from "bcrypt";
import User from "@/app/models/UserModel";
import { connect } from "@/app/config/db.js";
import { NextResponse } from "next/server";
import { sendEmail } from "@/app/helper/mailer";
import { writeFile } from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

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

    const filePath = `./public/uploads/${file.name}`;

    await writeFile(filePath, buffer);
    const formDataObject = {};

    // Iterate over form data entries
    for (const [key, value] of data.entries()) {
      // Assign each field to the formDataObject
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
    console.log(salt, password);
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
    if (!Save_User) {
      return NextResponse.json({ message: "Message Not added" });
    } else {
      return NextResponse.json({
        message: "User created successfully",
        success: true,
        status: 200,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
